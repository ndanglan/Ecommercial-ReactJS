import React, { useEffect, useState } from 'react'

import ProductBox from '../ProductBox/ProductBox'
import SectionTitle from '../SectionTitle/SectionTitle'
import Container from './../../Layout/Container';

import classes from './FeatureSection.module.css'

const FeatureSection = ({ featureProducts }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    setFeaturedProducts(featureProducts.filter(item => item.price > 50).slice(0, 8))
  }, [featureProducts])

  return (
    <section className={ classes.featured }>
      <Container flex={ false }>
        <SectionTitle title="Top Sellers" />
        <ProductBox data={ featuredProducts.length !== 0 ? featuredProducts : [] } />
      </Container>
    </section>
  )
}

export default FeatureSection
