import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAuth, getUserInfo, logout } from '../../../stores/features/authSlice';
import { clearCart } from '../../../stores/features/cartsSlice'
import Container from './../../../Layout/Container';

import classes from './NavTop.module.css'

const IsNotLoggedIn = () => {
  return (
    <>
      <div className={ classes.navLogin }>
        <p className={ classes.navItem }>
          <i className="fa fa-user"></i>
          <span> Account </span>
        </p>
        <ul className={ classes.navLoginSubmenu }>
          <li>
            <i className="fas fa-sign-in-alt"></i>
            <Link to="/login/login" > Login </Link>
          </li>
          <li>
            <i className="fas fa-key"></i>
            <Link to="/login/register" > Register </Link>
          </li>
          <li>
            <i className="fas fa-user-cog"></i>
            <a href="https://admin-silk-shop.netlify.app" target="_blank " rel="noopener noreferrer">
              Admin
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

const IsLoggedIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfo);

  const logoutHandler = (e) => {
    e.preventDefault();
    navigate('/');
    dispatch(logout());
    dispatch(clearCart())
  }

  return (
    <>
      <div className={ classes.navLogin }>
        <p className={ classes.navItem }>
          <span className={ classes.userImgName }>
            { userInfo?.name?.lastname.charAt(0) }
          </span>
          <span> { userInfo?.name?.lastname } </span>
        </p>
        <ul className={ classes.navLoginSubmenu }>
          <li>
            <i className="fas fa-user-shield"></i>
            <Link to="/account/profile" >
              My account
            </Link>
          </li>
          <li>
            <i className="fas fa-lock"></i>
            <Link to="/account/reset" >
              Reset password
            </Link>
          </li>
          <li>
            <i className="fas fa-history"></i>
            <Link to={ `user/${userInfo["_id"]}/history` } >
              History
            </Link>
          </li>
          <li>
            <i className="fas fa-user-cog"></i>
            <Link to="/admin" >
              Admin
            </Link>
          </li>
          <li>
            <i className="fas fa-sign-in-alt"></i>
            <a href="#_" onClick={ logoutHandler }> Logout </a>
          </li>
        </ul>
      </div>
    </>
  )
}

const NavTop = () => {
  const isLoggedIn = useSelector(getAuth);

  return (
    <>
      <nav className={ classes.navTop }>
        <Container flex={ true }>
          <div className={ classes.navInfo }>
            <p className={ classes.navItem }>
              <i className="far fa-clock"></i>
              <span> Monday - Friday: 9:00 am - 18:00 pm </span>
            </p>
            <p className={ classes.navItem }>
              <i className="far fa-envelope"></i>
              <span> info@company.com </span>
            </p>
          </div>
          { !isLoggedIn ?
            (
              <IsNotLoggedIn />
            ) :
            (
              <IsLoggedIn />
            ) }
        </Container>
      </nav>
    </>
  )
}

export default NavTop
