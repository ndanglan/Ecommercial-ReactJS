import React from 'react'
import { Link } from 'react-router-dom';

import Container from './../../Layout/Container';

import classes from './AdvSection.module.css'

const AdvSection = () => {
  return (
    <section className={ classes.adv }>
      <Container flex={ false }>
        <div className={ `row ${classes.wrapper}` }>
          <div className="col"></div>
          <div className={ `col ${classes.element}` }>
            <Link to="/" className={ classes.effect }>
              <img src="/img/adv7.jpg" alt="adv" className={ classes.advImg } />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AdvSection
