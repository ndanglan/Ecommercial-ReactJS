import React from 'react'

import { AdvSection, BannerSection, BrandSection, FeatureSection, HeroSection, NewProductSection, RelatedSection, ServiceSection } from '../../components'
import { productsServices } from '../../services';
import useLoadingData from '../../hooks/useLoadingData'

const HomePage = () => {
  const services = productsServices.list
  const data = useLoadingData(services);

  return (
    <>
      { true ?
        <main>
          <HeroSection />
          <ServiceSection />
          <BannerSection />
          <NewProductSection newProducts={ data } />
          <AdvSection />
          <FeatureSection featureProducts={ data ? data : [] } />
          <BrandSection />
          <RelatedSection />
        </main>
        :
        null
      }
    </>
  )
}

export default HomePage
