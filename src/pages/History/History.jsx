import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { cartsServices, productsServices } from '../../services';
import Container from '../../Layout/Container';
import { SideBar } from '../../components';

import classes from './History.module.css'

const HistoryBody = () => {
  const [products, setProducts] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const { userId } = useParams();

  const loadData = () => {
    const cartReq = cartsServices.list();
    const productReq = productsServices.list();

    api.promise([cartReq, productReq])
      .then(
        api.spread((...res) => {
          const historyUserCart = res[0].carts.filter((item) => {
            return item.userId === userId
          })
          setOrderHistory(historyUserCart);
          setProducts(res[1]);
        })
      )
      .catch(err => {
        console.log(err);
      })
  }

  const removeFromCartHistory = (orderId, productId) => {
    const orderContainProduct = orderHistory.filter((item) => item["_id"] === orderId);

    if (orderContainProduct[0]?.products.length !== 1) {
      const deletedProducts = orderContainProduct[0]?.products?.filter(item => item.productId !== productId)

      const dataToUpdate = {
        userId: userId,
        products: [...deletedProducts],
      }

      cartsServices.updateCart(orderId, dataToUpdate)
        .then(res => {
          if (res.message === "edit successful") {
            toast.warning('You have been remove your order successfully', {
              onClose: () => loadData()
            })
          }
        })
        .catch(err => {
          console.log(err);
          return err;
        })
    } else {
      cartsServices.deleteCart(orderId)
        .then(res => {
          if (res.message === "delete completed") {
            toast.success('You have been remove your order successfully', {
              onClose: () => loadData()
            })
          }
        })
        .catch(err => {
          console.log(err);
          return err;
        })
    }
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <div className={ classes.orderBody }>
        <div className={ classes.orderList }>
          { orderHistory?.length !== 0 && (
            <>
              { orderHistory?.map((item, index) => {
                const productsInOrder = item?.products;

                if (productsInOrder) {
                  const data = productsInOrder.map((product, index) => {
                    const productInOrder = products.find((item) => item["_id"] === product.productId);
                    if (productInOrder) {
                      return (
                        <div className={ classes.orderItem } key={ index }>
                          <div className={ classes.orderStatus }>
                            <p>
                              <i className="fas fa-truck"></i>
                              <span>Completed</span>
                            </p>
                          </div>
                          <div className={ classes.itemInfoBox }>
                            <div className={ classes.itemImg }>
                              <img src={ productInOrder?.image } alt={ productInOrder?.title } />
                            </div>
                            <div className={ classes.itemInfo }>
                              <h3 className={ classes.heading }>
                                { productInOrder?.title }
                              </h3>
                              <p className={ classes.category }>
                                <strong>category:</strong> { productInOrder?.category }
                              </p>
                              <div className={ classes.amountBox }>
                                <p className={ classes.quantity }>
                                  x { product?.quantity }
                                </p>
                                <p className={ classes.netprice }>
                                  { productInOrder?.price }$
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className={ classes.orderTotal }>
                            <span>
                              Order Total
                            </span>
                            <span>
                              { (productInOrder?.price * product?.quantity).toFixed(2) }$
                            </span>
                          </div>
                          <div className={ classes.actions } >
                            <Link to={ `/category/${productInOrder["_id"]}` }>
                              <button className={ classes.buyMoreBtn }>
                                Buy more
                              </button>
                            </Link>
                            <button className={ classes.removeBtn } onClick={ () => removeFromCartHistory(item["_id"], productInOrder["_id"]) }>
                              Remove
                            </button>
                          </div>
                        </div>
                      )
                    }
                  })

                  return (
                    <React.Fragment key={ index }>
                      { data.length > 0 && <hr className={ classes.hr } /> }
                      { data }
                    </React.Fragment>
                  )
                }
              }) }
            </>
          ) }
        </div>
      </div>
    </>
  )
}

const History = () => {

  return (
    <Container>
      <div className={ classes.wrapper }>
        <SideBar />
        <HistoryBody />
      </div>
    </Container>
  )
}

export default History
