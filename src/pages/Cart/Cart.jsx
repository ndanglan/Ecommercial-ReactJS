import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getOrders, increaseProduct, decreaseProduct, remove, clearCart } from '../../stores/features/cartsSlice';
import { getUserInfo } from '../../stores/features/authSlice'
import Container from '../../Layout/Container'
import { SideBar } from '../../components'
import classes from './Cart.module.css'

const CartBody = ({ orders }) => {
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const increase = (id) => {
    dispatch(increaseProduct({ "_id": id }))
  }

  const decrease = (id) => {
    dispatch(decreaseProduct({ "_id": id }))
  }

  const removeHandler = (id) => {
    dispatch(remove({ "_id": id }))
  }

  const clearHandler = () => {
    dispatch(clearCart({ type: 'clear' }));
  }

  const orderHandler = (data) => {
    navigate(`/user/${userInfo["_id"]}/checkout`, { state: data })
  }

  return (
    <>
      <div className={ classes.cartBody }>
        <div className={ classes.cartList }>
          { orders.products.length !== 0 ? (
            <>
              { orders.products.map((item, index) => {
                return (
                  <div className={ classes.cartItem } key={ index }>
                    <div className={ classes.itemImg }>
                      <img src={ item.image } alt={ item.title } />
                    </div>
                    <div className={ classes.itemInfo }>
                      <h3 className={ classes.heading }>
                        { item.title }
                      </h3>
                      <p className={ classes.desc }>
                        { item.description }
                      </p>
                      <p className={ classes.category }>
                        <strong>category:</strong> { item.category }
                      </p>
                      <div className={ classes.actions }>
                        <form >
                          <label className={ classes.amount }>Amount</label>
                          <div className={ classes.controlAmount }>
                            <p onClick={ () => decrease(item["_id"]) }>
                              <i className="fas fa-minus"></i>
                            </p>
                            <input type="text" value={ item.amount } />
                            <p onClick={ () => increase(item["_id"]) }>
                              <i className="fas fa-plus"></i>
                            </p>
                          </div>
                          <hr />
                        </form>
                      </div>
                      <div className={ classes.total }>
                        <h3>Total: { item.totalPrice.toFixed(2) }$</h3>
                        <button onClick={ () => removeHandler(item["_id"]) }>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              }) }
            </>
          ) : (
            <h1>You haven't had any products in your cart yet</h1>
          ) }
        </div>
        <div className={ classes.totalPrice }>
          Total price: { orders.total }$
        </div>
        <div className={ classes.orderBtn }>
          <button className={ classes.dangerBtn } onClick={ clearHandler }>
            Clear All
          </button>
          <button className={ classes.orderBtn } onClick={ () => orderHandler(orders.products) }>
            Order
          </button>
        </div>
      </div>
    </>
  )
}

const Cart = () => {
  const orders = useSelector(getOrders);

  return (
    <Container>
      <div className={ classes.wrapper }>
        <SideBar />
        <CartBody orders={ orders } />
      </div>
    </Container>
  )
}

export default Cart
