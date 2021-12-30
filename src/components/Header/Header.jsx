import React from 'react'

import NavTop from './NavTop/NavTop';
import NavMiddle from './NavMiddle/NavMiddle'
import NavBottom from './NavBottom/NavBottom';

import classes from './Header.module.css'

const Header = () => {

  return (
    <header className={ classes.header }>
      <NavTop />
      <NavMiddle />
      <NavBottom />
    </header>
  )
}

export default Header
