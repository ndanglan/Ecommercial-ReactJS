import React from 'react'

import classes from './InputWithLabel.module.css'

const InputWithLabel = React.forwardRef(
  (props, ref) => {
    const { id, type, placeholder, label, formikField, err, errMessage, ...others } = props;
    return (
      <div className={ classes.wrapper }>
        <label htmlFor={ id }>{ label }</label>
        <div>
          <input
            ref={ ref }
            id={ id }
            type={ type }
            placeholder={ placeholder }
            className={ `${err ? "is-invalid" : ""}` }
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
      </div>
    )
  }
)

export default InputWithLabel
