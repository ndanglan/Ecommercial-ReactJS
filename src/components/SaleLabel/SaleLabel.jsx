import React from 'react'
import classes from './SaleLabel.module.css'

const SaleLabel = ({ onsale, soldout }) => {
  return (
    <span className={ `${classes.label}` + `${onsale ? `${classes.onSale}` : ""}` } >
      { onsale ? "Giảm" : "Bán hêt" }
    </span >
  )
}

export default SaleLabel
