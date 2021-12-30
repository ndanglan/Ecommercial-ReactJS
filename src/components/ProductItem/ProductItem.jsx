import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAuth } from '../../stores/features/authSlice';

import { add } from '../../stores/features/cartsSlice';
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getAuth);
  const navigation = useNavigate();
  const location = useLocation();
  const { image, category, price, title, description, ...others } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    const orderedProduct = {
      image,
      category,
      price,
      title,
      "_id": others["_id"],
      description,
      amount: 1,
      totalPrice: price
    }
    if (isLoggedIn) {
      dispatch(add({ product: orderedProduct }));
    }
    else {
      navigation('/login/login', { state: location })
    }
  }

  return (
    <div className={ classes.container }>
      <div className={ classes.image }>
        <div className={ classes.thumbnail }>
          <Link to={ `/category/${others["_id"]}` }>
            <img src={ image } alt={ category }
              className={ classes.frontThumbnail } />
          </Link>
        </div>
      </div>
      <div className={ classes.info }>
        <div className={ classes.name }>
          <Link to={ `/category/${others["_id"]}` }> { title } </Link>
        </div>
        <div className={ classes.price }>
          <span>
            <span>{ price }$</span>
          </span>
        </div>
        <div className={ classes.actions }>
          <form className="add-to-cart" onSubmit={ submitHandler }>
            <button type="submit" name="add" className={ `${classes.btn} is-added` }>
              <i className="fa fa-shopping-cart"></i>
            </button>
          </form>
          <Link to={ `/category/${others["_id"]}` } className={ `${classes.btn} product-quick-view ` }>
            <i className="fa fa-eye"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
