import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom';

import ImgSlider from './../Slider/ImgSlider';
import { Brands } from '../../DummyData';
import Container from './../../Layout/Container';

import classes from './BrandSection.module.css'

const BrandSection = () => {

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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };


  return (
    <section className={ classes.brand }>
      <Container flex={ false }>
        <div className={ classes.wrapper }>
          <ImgSlider settings={ settings }>

            { Brands.map(brand => {
              return (
                <div className={ `text-center ${classes.box}` } key={ brand.id }>
                  <Link to="/" className={ classes.brand }>
                    <img src={ brand.img } alt={ brand.name } />
                  </Link>
                </div>
              )
            }) }
          </ImgSlider>
        </div>
      </Container>
    </section>
  )
}

export default BrandSection
