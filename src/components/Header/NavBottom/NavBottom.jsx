import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';

import useLoadingData from '../../../hooks/useLoadingData';
import { productsServices } from '../../../services';
import Container from './../../../Layout/Container';

import classes from './NavBottom.module.css';

const NavBottom = () => {
  const [categories, setCategories] = useState([]);
  const [fixedNav, setFixedNav] = useState(false);
  const services = productsServices.list
  const data = useLoadingData(services);

  useEffect(() => {
    if (data?.length > 0) {
      let category = [];
      data.forEach(item => {
        if (!category.includes(item.category)) {
          category = [...category, item.category];
        }
      })
      setCategories(category)
    }
  }, [data])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setFixedNav(true);
      } else {
        setFixedNav(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <nav className={ `${classes.navBottom} navbar navbar-expand-lg` }>
        <Container flex={ false } mainClass={ `container-fluid ${classes.container}` }>
          <div className={ `${classes.navBottomMenu} navbar-collapse ${fixedNav ? `${classes.fixedNav}` : ""} ` } id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={ classes.navItem }>
                <NavLink className={ `${classes.navLink} nav-link active` } aria-current="page" to="/">Home</NavLink>
              </li>
              <li className={ `${classes.navItem} ${classes.dropDown}  dropdown` }>
                <a className={ `${classes.navLink} ${classes.dropdownToggle} nav-link dropdown-toggle` } href="#_">
                  Category
                  <i className="fas fa-angle-down"></i>
                </a>
                <ul className={ `${classes.dropdownMenu} dropdown-menu` }>
                  <li>
                    <Link to="/categories">All</Link>
                  </li>
                  { categories?.map((item, index) => {
                    return (
                      <li key={ index }>
                        <Link to={ `/categories/${item}` }>
                          { item }
                        </Link>
                      </li>
                    )
                  }) }
                </ul>
              </li>
              <li className={ classes.navItem }>
                <NavLink className={ `${classes.navLink} nav-link` } to="/news">News</NavLink>
              </li>
              <li className={ classes.navItem }>
                <NavLink className={ `${classes.navLink} nav-link` } to="/intro" tabIndex="-1" aria-disabled="true">About us</NavLink>
              </li>
              <li className={ classes.navItem }>
                <NavLink className={ `${classes.navLink} nav-link` } to="/contact" tabIndex="-1" aria-disabled="true">Contact us</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <div className="input-group">
                <input className={ `${classes.formControl} form-control` } type="search" placeholder="Search" />
                <button className={ `${classes.btnOutline} btn btn-outline` } type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default NavBottom
