import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth } from '../../stores/features/authSlice';

import { add } from '../../stores/features/cartsSlice';
import classes from './ProductSingleView.module.css'

const ProductSingleView = (props) => {
  const { description, price, title, ...others } = props;
  const [inFavorite, setInFavorite] = useState(false);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  const params = useParams();
  const isLoggedIn = useSelector(getAuth);

  const increase = () => {
    setAmount(prev => prev + 1)
  }
  const decrease = () => {
    setAmount(prev => {
      if (prev === 1) {
        return prev
      }
      return prev - 1;
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const orderedProduct = {
      ...props,
      amount: amount,
      totalPrice: amount * price
    }

    if (isLoggedIn) {
      dispatch(add({ product: orderedProduct }));
    }
    else {
      navigation('/login/login', { state: location })
    }
  }

  const addToFavorite = (e) => {
    e.preventDefault();

    setInFavorite(prev => !prev);
    if (!inFavorite) {
      toast.success('You added this product to favorite list successfully')
    } else {
      toast.warning('You removed this product from favorite list successfully')
    }
  }

  useEffect(() => {
    setAmount(1);
  }, [params.categoryId])

  return (
    <div className={ `col ${classes.singleView}` }>
      <div className={ classes.infoBox }>
        <h1 className={ classes.name }>{ title }</h1>
        <hr className={ classes.hr } />
        <div className={ classes.socialBtns }>
          <button >
            <i className="fas fa-thumbs-up"></i>
            Like
          </button>
          <button >
            <i className="fab fa-twitter"></i>
            Tweet
          </button>
          <button >
            <i className="fas fa-plus-square"></i>
            Share
          </button>
        </div>
        <p className={ classes.desc }>
          { description }
        </p>
        <div className={ classes.categoryInfo }>
          <span>Category:</span> { others.category }
        </div>
        <div>
          <span className={ classes.price }> { (amount * price).toFixed(2) }$</span>
          &nbsp;
        </div>

        <form onSubmit={ submitHandler }>
          <hr />
          <label className={ classes.amount }>Amount</label>
          <div className={ classes.controlAmount }>
            <p onClick={ decrease }>
              <i className="fas fa-minus"></i>
            </p>
            <input type="text" value={ amount } className="amount-input" />
            <p onClick={ increase }>
              <i className="fas fa-plus"></i>
            </p>
          </div>
          <button type="submit">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Add to your cart
            </span>
          </button>
          <a href='#_' className={ classes.favorite } onClick={ addToFavorite }>
            <i className={ `fas fa-heart ${inFavorite ? classes.selected : ""}` }></i>
            <span>
              Add to Wishlist
            </span>
          </a>
        </form>
      </div>
    </div>
  )
}

export default ProductSingleView
