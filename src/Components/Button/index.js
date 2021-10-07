import React from 'react'
import './style.scss'

const Button = function (props) {
  const { text, template = 'btn btn-primary', handler } = props
  return (
    <button type='button' className={template} onClick={handler}>{text}</button>
  )
}

export default Button
