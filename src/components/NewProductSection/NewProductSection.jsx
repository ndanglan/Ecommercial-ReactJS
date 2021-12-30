import React from 'react'

import Container from './../../Layout/Container';
import SectionTitle from './../SectionTitle/SectionTitle';
import ImgSlider from './../Slider/ImgSlider';
import ProductItem from '../ProductItem/ProductItem';

import classes from './NewProductSection.module.css'

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

const NewProductSection = ({ newProducts }) => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <section className={ classes.newproduct }>
      <Container flex={ false }>
        <SectionTitle title="Popular Products" />
        <div className={ classes.wrapper }>
          <ImgSlider settings={ settings }>
            {
              newProducts?.map((item, index) => {
                return (
                  <ProductItem { ...item } key={ index } />
                )
              })
            }
          </ImgSlider>
        </div>
      </Container>
    </section>
  )
}

export default NewProductSection
