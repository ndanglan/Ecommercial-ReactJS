import React from 'react'
import classes from './ProductTabs.module.css'

const ProductTabs = ({ description }) => {
  return (
    <>
      <div className={ classes.tabs }>
        <ul className={ classes.tabOptions }>
          <li>
            <a href="#_">Description</a>
          </li>
        </ul>
      </div>
      <p className={ classes.desc }>
        { description }
      </p>
    </>
  )
}

export default ProductTabs
