import React from 'react'
import classes from './RelatedSection.module.css'

const RelatedSection = () => {
  return (
    <section className={ classes.related }>
      <div className={ `${classes.relatedBackground} ` }>
        <div className={ `${classes.box} text-center` }>
          <h3 className={ `${classes.heading}` }>Advertisement</h3>
          <h2 className={ `${classes.title}` }>Holiday Gift Guide</h2>
          <p className={ `${classes.content}` }>
            Find the perfect gifts for those closest to you
          </p>
        </div>
      </div>
    </section>
  )
}

export default RelatedSection
