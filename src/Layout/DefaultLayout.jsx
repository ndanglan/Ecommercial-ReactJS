import React from 'react'
import { Footer, Header } from './../components';

const DefaultLayout = ({ children }) => {

  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default DefaultLayout
