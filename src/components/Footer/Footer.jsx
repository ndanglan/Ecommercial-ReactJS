import React from 'react'
import classes from './Footer.module.css'
import Container from './../../Layout/Container';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={ classes.footer }>
      <div className={ `${classes.grid} grid` }>
        <Container mainClass={ classes.container }>
          <div className={ classes.item }>
            <h3 className={ classes.itemTitle }>Contact</h3>
            <ul className={ classes.list }>
              <li className={ `mb-1 ${classes.listItem}` }>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                </p>
                <p>
                  Ngõ 15 Duy Tân
                  <br />
                  Phú Diễn, Từ Liêm, Hà Nội
                </p>
              </li>
              <li className={ `mb-1 ${classes.listItem}` }>
                <i className="fas fa-phone-alt"></i>
                <div className="foot__box-element__list__item-info">
                  <span>(00) 123 456 789</span> <br />
                  <span>(00) 123 456 789</span>
                </div>
              </li>

              <li className={ `${classes.listItem}` }>
                <p>
                  <i className="far fa-envelope"></i>
                </p>
                <p className="foot__box-element__list__item-info">
                  contac@yourcompany.com
                </p>
              </li>
            </ul>
          </div>
          <div className={ classes.item }>
            <h3 className={ classes.itemTitle }>Get to Know Us</h3>
            <ul className={ classes.list }>
              <li className={ `${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Careers
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Blog
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  About Haravan
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Investor Relations
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Haravan Devices
                </a>
              </li>
            </ul>
          </div>
          <div className={ classes.item }>
            <h3 className={ classes.itemTitle }>Make Money with Us</h3>
            <ul className={ classes.list }>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Sell products on Haravan
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Sell on Haravan Business
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Sell apps on Haravan
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Advertise Your Products
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Become an Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div className={ classes.item }>
            <h3 className={ classes.itemTitle }>Let Us Help You</h3>
            <ul className={ classes.list }>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Haravan and COVID-19
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Your Account
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Your Orders
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Shipping Rates & Policies
                </a>
              </li>
              <li className={ ` ${classes.listItem}` }>
                <a href="#_">
                  <i className="fas fa-angle-right"></i>
                  Returns & Replacements
                </a>
              </li>
            </ul>
          </div>
          <div className={ classes.item }>
            <h3 className={ classes.itemTitle }>Sign in for the best experience</h3>
            <form >
              <input type="email" placeholder="Your Email" name="email" />
              <button type="submit">
                <i className="fas fa-angle-right"></i>
              </button>
            </form>
            <div className={ classes.listSocial }>
              <ul>
                <li>
                  <a href="#_"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#_"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#_"><i className="fab fa-pinterest"></i></a>
                </li>
                <li>
                  <a href="#_"><i className="fas fa-wifi"></i></a>
                </li>
                <li>
                  <a href="#_"><i className="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href="#_"><i className="fab fa-google-plus-g"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className={ classes.payPal }>
        <div className="container">
          <a href="#_"><img src="//hstatic.net/415/1000144415/1000221609/paypal.png?v=117"
            alt="Nội thất cao cấp" /></a>
        </div>
      </div>
      <div className={ classes.copyright }>
        <p>
          © 2021, <Link to="/">Haravan.com</Link>, Inc. or its affiliates
          <a
            href="https://www.haravan.com/?utm_campaign=poweredby&amp;utm_medium=haravan&amp;utm_source=onlinestore"> powered
            by Haravan</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
