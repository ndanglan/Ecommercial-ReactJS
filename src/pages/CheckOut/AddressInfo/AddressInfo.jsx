import React from 'react'
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../stores/features/authSlice';

import classes from './AddressInfo.module.css'

const AddressInfo = () => {
  const userInfo = useSelector(getUserInfo);
  return (
    <div className={ classes.address }>
      <p></p>
      <div className={ classes.addressContent }>
        <div className={ classes.title }>
          <span>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <h3>
            Delivery Address
          </h3>
        </div>
        <div className={ classes.content }>
          <div className={ classes.details }>
            <span>
              { userInfo.name.firstname + " " + userInfo.name.lastname + " " + userInfo.phone }
            </span>
            <span>
              { userInfo.address.number + ", " + userInfo.address.street + ", " + userInfo.address.city }
            </span>
          </div>
          <div className={ classes.btn }>
            <button>
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressInfo
