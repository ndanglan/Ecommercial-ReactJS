import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAuth } from '../../../stores/features/authSlice';
import { getOrders } from '../../../stores/features/cartsSlice';
import Container from './../../../Layout/Container';
import classes from './NavMiddle.module.css';

const NavMiddle = () => {
  const orders = useSelector(getOrders);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const isLoggedIn = useSelector(getAuth);

  return (
    <>
      <div className={ classes.navMiddle }>
        <Container flex={ true }>
          <Link to="/" className={ classes.navLogo }>
            <img src="/img/logo_11zon.png" alt="logo" />
          </Link>
          <div>
            <Link to={ isLoggedIn ? `/user/${userInfo["_id"]}/cart` : "/login/login" } className={ classes.navCartToggle }>
              <i className="fas fa-shopping-bag"></i>
              <span> { orders?.products?.length || 0 } </span>
              <span> products </span>
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default NavMiddle
