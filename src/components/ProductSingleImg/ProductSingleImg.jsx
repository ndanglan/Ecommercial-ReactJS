import React from 'react'
import classes from './ProductSingleImg.module.css';
// import ImgSlider from './../Slider/ImgSlider';

const ProductSingleImg = ({ image }) => {

  // CUSTOMIZATION for indicator
  // const SlickArrowRight = ({ ...props }) => (
  //   <button
  //     { ...props }
  //     className={
  //       `${classes.btn} ${classes.btnRight} slick-next slick-arrow `
  //     }
  //     type="button"
  //   >
  //     <i className="fas fa-angle-right"></i>
  //   </button>
  // );

  // const SlickArrowLeft = ({ ...props }) => (
  //   <button
  //     { ...props }
  //     className={
  //       `${classes.btn} ${classes.btnLeft} slick-next slick-arrow `
  //     }
  //     type="button"
  //   >
  //     <i className="fas fa-angle-left"></i>
  //   </button>
  // );

  // let settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   prevArrow: <SlickArrowLeft />,
  //   nextArrow: <SlickArrowRight />,
  // };

  return (
    <div className={ `col ${classes.imgBox}` } >
      <a href="#_">
        <img src={ image } alt="main-img" />
      </a>

      {/* API haven't had this field yet */ }

      {/* <div className={ classes.imageIndicator }>
        <ImgSlider settings={ settings } className={ classes.imageWrapper }>
          <div className={ classes.indicatorItem }>
            <img src="/img/hinhmh01.jpg" className="w-100"
              alt="banner1" />
          </div>
          <div className={ classes.indicatorItem }>
            <img src="/img/hinhmh02.jpg" className="d-block w-100"
              alt="banner2" />
          </div>
          <div className={ classes.indicatorItem }>
            <img src="/img/hinhmh01.jpg" className="d-block w-100"
              alt="banner3" />
          </div>
          <div className={ classes.indicatorItem }>
            <img src="/img/hinhmh01.jpg" className="d-block w-100"
              alt="banner4" />
          </div>
          <div className={ classes.indicatorItem }>
            <img src="/img/hinhmh01.jpg" className="d-block w-100"
              alt="banner4" />
          </div>
        </ImgSlider>
      </div> */}
    </div >
  )
}

export default ProductSingleImg
