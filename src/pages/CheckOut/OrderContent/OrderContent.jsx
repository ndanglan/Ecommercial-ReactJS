import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { cartsServices } from '../../../services';
import { getUserInfo } from '../../../stores/features/authSlice';
import { clearCart } from '../../../stores/features/cartsSlice';
import { ConfirmDialog } from '../../../components';
import classes from './OrderContent.module.css'

const OrderContent = ({ order }) => {
  const userInfo = useSelector(getUserInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let orderTotal = 0;
  order.forEach(item => {
    orderTotal += item.totalPrice
  })

  const [confirmOptions, setConfirmOptions] = useState({});

  const orderHandler = (data) => {
    setConfirmOptions({
      ...confirmOptions,
      type: 'confirmOrder',
      show: true,
      title: `Are you sure to complete this order?`,
      rightBtn: 'Confirm',
      leftBtn: 'Cancel',
      data: data
    })
  }

  const cancel = () => {
    setConfirmOptions({
      show: false
    })
  }

  const onConfirmOrder = (data) => {
    setConfirmOptions({
      show: false
    })

    const dataToAdd = {
      userId: userInfo["_id"],
      products: data?.map(item => {
        return {
          "productId": item["_id"],
          "quantity": item.amount
        }
      })
    }

    cartsServices.addNewCart(dataToAdd)
      .then(res => {
        toast.success("You have ordered successfully!", {
          onClose: () => {
            navigate(`/user/${userInfo["_id"]}/history`)
            dispatch(clearCart({ type: 'none' }));
          }
        });
        return res
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <div className={ classes.order }>
        <div className={ classes.orderHeading }>
          <h3>
            Products Ordered
          </h3>
        </div>
        <div className={ classes.orderDetail }>
          { order.map((item, index) => {
            return (
              <div className={ classes.detail } key={ index }>
                <div className={ classes.desc }>
                  <img src={ item.image } alt={ item.title } />
                  <span>{ item.title }</span>
                </div>
                <div className={ classes.unitPrice }>
                  <span>Unit Price</span>
                  <span>{ item.price } $</span>
                </div>
                <div className={ classes.amount }>
                  <span>Amount</span>
                  <span>{ item.amount }</span>
                </div>
                <div className={ classes.subTotal }>
                  <span>Subtotal</span>
                  <span>{ item.totalPrice.toFixed(2) } $</span>
                </div>
              </div>
            )
          }) }
        </div>
        <div className={ classes.total }>
          <span>Order Total ({ order.length } { order.length > 1 ? "items" : "item" })</span>
          <span>
            { orderTotal.toFixed(2) } $
          </span>
        </div>
        <div className={ classes.placeOrder }>
          <button onClick={ () => orderHandler(order) }>
            Place order
          </button>
        </div>
      </div>
      <ConfirmDialog options={ confirmOptions } onConfirm={ onConfirmOrder } cancel={ cancel } />
    </>
  )
}

export default OrderContent
