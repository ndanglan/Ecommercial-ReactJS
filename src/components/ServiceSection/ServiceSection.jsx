import React from 'react'

import ServiceItem from './ServiceItem/ServiceItem'
import Container from './../../Layout/Container';

import classes from './ServiceSection.module.css'

const ServiceSection = () => {
  return (
    <section className={ classes.serviceSection }>
      <Container flex={ false }>
        <div className={ classes.box }>
          <ServiceItem image="/img/box1.png" title="High quality" desc="Bring great value to you." />
          <ServiceItem image="/img/box2_11zon.png" title="Free shipping fee" desc="Apply to orders greater than 100$" />
          <ServiceItem image="/img/box3_11zon.png" title="Safety payment" desc="Allowing both cash and card" />
        </div>
      </Container>
    </section>
  )
}

export default ServiceSection
