import React from 'react'
import Slider from 'react-slick'

const ImgSlider = ({ settings, children, ...other }) => {
  return (
    <Slider { ...other } { ...settings }>
      { children }
    </Slider>
  )
}

export default ImgSlider
