import React from 'react'
import classes from './Container.module.css'

const Container = (props) => {
  return (
    <div
      className={
        `container ` +
        classes.container +
        ` ${props.flex ? `${classes.flex}` : ""}` +
        ` ${props.mainClass ? props.mainClass : ""}`
      }
    >
      { props.wrapper ?
        (
          <div className={ classes.wrapper }>
            { props.children }
          </div>
        ) :
        (
          <>
            { props.children }
          </>
        )
      }
    </div >
  )
}

export default Container
