import React from 'react'
import classes from './ServiceItem.module.css';

const ServiceItem = ({ image, title, desc }) => {
  return (
    <div className={ classes.item }>
      <div className={ classes.icon }>
        <img src={ image } alt={ title } />
      </div>
      <div className={ classes.info }>
        <h5 className={ classes.title }>{ title }</h5>
        <p className={ classes.desc }>
          { desc }
        </p>
      </div>
    </div>
  )
}

export default ServiceItem
