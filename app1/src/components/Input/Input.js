import React from 'react'

function Input(props) {
    const {variant='small',...rest}=props
  return (
    <input type="text" className={`input ${variant}`} />
  )
}

export default Input