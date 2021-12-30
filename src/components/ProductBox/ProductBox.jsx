import React from 'react'

import ProductItem from '../ProductItem/ProductItem'

import classes from './ProductBox.module.css'


const ProductBox = ({ data }) => {

  const productMap = data.map((item, index) => {
    return (
      <ProductItem { ...item } key={ index } />
    )
  })

  return (
    <>
      <div className={ classes.box }>
        { productMap }
      </div>
    </>
  )
}

export default ProductBox
