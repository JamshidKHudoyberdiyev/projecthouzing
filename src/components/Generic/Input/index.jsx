import React from 'react'
import { Container } from './style'

const Input = ({
  type,
  height,
  width,
  Onchange,
  placeholder,
  name,
  defaultValue,
  value
}) => {
  return (
    <Container  
    placeholder={placeholder} 
    name={name}  
    type={type} 
    Onchange={Onchange}   
    height={height} 
    value={value}
    defaultValue={defaultValue}
    width={width}/>
  )
}

export default  Input