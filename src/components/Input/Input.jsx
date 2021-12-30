import React from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef(
  (props, ref) => {
    const { type, placeholder, attributes, formikField, err, errMessage, ...others } = props;

    return (
      <div className={ `${attributes}` }>
        <input
          ref={ ref }
          type={ type }
          placeholder={ placeholder }
          className={ `${classes.input} ${err ? "is-invalid" : ""}` }
          { ...others }
          { ...formikField }
        />
        { err ? (
          <div className={ `invalid-feedback ${classes.invalidFeedBack}` }>
            { errMessage }
          </div>
        ) : (
          null
        ) }
      </div>
    )
  }
)

export default Input
