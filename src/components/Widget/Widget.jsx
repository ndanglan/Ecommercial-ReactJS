import React from 'react'
import classes from './Widget.module.css'

const Widget = (props) => {
  return (
    <div className={ classes.wrapper }>
      <div className={ classes.title }>
        <h4>{ props.title }</h4>
      </div>
      <div>
        <ul className={ classes.menu }>
          { props.children.map((item, index) => {
            return (
              <li key={ index }>
                { item }
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default Widget
