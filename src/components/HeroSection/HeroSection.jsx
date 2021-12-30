import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ImgSlider from './../Slider/ImgSlider';
import Container from '../../Layout/Container';
import { Link } from 'react-router-dom';

import classes from './HeroSection.module.css'

const HeroSection = () => {

  const SlickArrowRight = ({ ...props }) => (
    <button
      { ...props }
      className={
        `${classes.btn} ${classes.btnRight} slick-next slick-arrow `
      }
      type="button"
    >
      <i className="fas fa-arrow-right"></i>
    </button>
  );

  const SlickArrowLeft = ({ ...props }) => (
    <button
      { ...props }
      className={
        `${classes.btn} ${classes.btnLeft} slick-next slick-arrow `
      }
      type="button"
    >
      <i className="fas fa-arrow-left"></i>
    </button>
  );
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <>
      <div className={ classes.heroSection }>
        <Container flex={ false }>
          <div className={ `${classes.wrapper} row` }>
            <div className={ `${classes.col} col` }>
              <ImgSlider className={ classes.slider } settings={ settings }>
                <div className={ classes.slide }>
                  <img src="/img/image_slider1.jpg" alt="img-slider1" />
                  <div className={ `${classes.boxInfo}` }>
                    <h2 className={ `${classes.boxInfoTitle} hero-title` }>
                      legendary
                    </h2>
                    <p className={ `${classes.boxInfoSubTitle} hero-desc` }>
                      creating high quality colorful and innovative products
                    </p>
                    <div className={ `${classes.boxInfoButton} hero-btn` } >
                      <Link to="/categories"> Buy Now </Link>
                    </div>
                  </div>
                </div>
                <div className={ classes.slide }>
                  <img src="/img/image_slider2.jpg" alt="img-slider1" />
                  <div className={ `${classes.boxInfo}` }>
                    <h2 className={ `${classes.boxInfoTitle} hero-title` }>
                      legendary
                    </h2>
                    <p className={ `${classes.boxInfoSubTitle} hero-desc` }>
                      creating high quality colorful and innovative products
                    </p>
                    <div className={ `${classes.boxInfoButton} hero-btn` }>
                      <Link to="/categories"> Buy Now </Link>
                    </div>
                  </div>
                </div>
                <div className={ classes.slide }>
                  <img src="/img/image_slider3_1.jpg" alt="img-slider1" />
                  <div className={ `${classes.boxInfo}` }>
                    <h2 className={ `${classes.boxInfoTitle} hero-title` }>
                      legendary
                    </h2>
                    <p className={ `${classes.boxInfoSubTitle} hero-desc` }>
                      creating high quality colorful and innovative products
                    </p>
                    <div className={ `${classes.boxInfoButton} hero-btn` }>
                      <Link to="/categories"> Buy Now </Link>
                    </div>
                  </div>
                </div>
              </ImgSlider>
            </div>
            <div className={ `${classes.col} col` }></div>
          </div>
        </Container>
      </div >
    </>
  )
}

export default HeroSection
