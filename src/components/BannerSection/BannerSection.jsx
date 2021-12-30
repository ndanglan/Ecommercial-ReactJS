import React from 'react'
import { Link } from 'react-router-dom';

import Container from './../../Layout/Container';

import classes from './BannerSection.module.css'

const BannerSection = () => {
  return (
    <section className={ classes.banner }>
      <Container className={ `container ${classes.container}` }>
        <div className={ classes.box }>
          <Link to="/" className={ classes.link }>
            <img className={ classes.img } src="/img/b5.jpg" alt="banner" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default BannerSection
