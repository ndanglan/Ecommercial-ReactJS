import React from 'react'
import classes from './SectionTitle.module.css'

const SectionTitle = ({ title }) => {
  return (
    <div className={ classes.title }>
      <span> { title } </span>
    </div>
  )
}

export default SectionTitle
