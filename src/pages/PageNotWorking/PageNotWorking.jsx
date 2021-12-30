import React from 'react'

import Container from '../../Layout/Container'

import classes from './PageNotWorking.module.css'

const PageNotWorking = () => {
  return (
    <Container>
      <div className={ classes.wrapper }>
        <h1>Trang này không khả dụng</h1>
        <img src="/img/apology..jpg" alt="sorry" />
      </div>
    </Container>
  )
}

export default PageNotWorking
