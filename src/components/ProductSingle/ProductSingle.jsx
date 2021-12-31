import React from 'react'

import { productsServices } from '../../services'
import useLoadingData from '../../hooks/useLoadingData'
import Container from '../../Layout/Container'
import ProductItem from '../ProductItem/ProductItem'
import ProductSingleImg from '../ProductSingleImg/ProductSingleImg'
import ProductSingleView from '../ProductSingleView/ProductSingleView'
import ImgSlider from '../Slider/ImgSlider'
import SectionTitle from '../SectionTitle/SectionTitle'

import classes from './ProductSingle.module.css'

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
const ProductSingle = ({ productInfo }) => {

  let services = productsServices.getCategory;
  const recommendProducts = useLoadingData(services, productInfo.category);

  let settings = {
    dots: false,
    infinite: recommendProducts.length >= 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <Container>
      <div className={ classes.wrapper }>
        <ProductSingleImg image={ productInfo.image } />
        <ProductSingleView { ...productInfo } />
      </div>
      <SectionTitle title="Related Products" />
      <div className={ classes.sliderWrapper }>
        <ImgSlider settings={ settings }>
          {
            recommendProducts?.map((item, index) => {
              return (
                <ProductItem { ...item } key={ index } />
              )
            })
          }
        </ImgSlider>
      </div>
    </Container>
  )
}

export default ProductSingle
