import React, { forwardRef } from 'react'
import { Container, Icon, InputWrapper } from './style'



const Input = forwardRef(({
  height,
  width,
  icon,
  type,
  Onchange,
  placeholder,
  name,
  defaultValue,
  value
 },ref)=>{
  return (

    <InputWrapper height={height} width={width} >
        <Icon>{icon}</Icon>
         <Container  
         placeholder={placeholder} 
         name={name}   
         type={type} 
         Onchange={Onchange}   
         height={height} 
         value={value}
         defaultValue={defaultValue}
         width={width}
         ref={ref}/>

    </InputWrapper>
  )
})

export default  Input