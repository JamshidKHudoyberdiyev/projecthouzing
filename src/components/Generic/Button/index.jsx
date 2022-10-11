import React from 'react'
import { Container } from './style'

const Button = ({children,type,height,width,onclick}) => {
  return (
    <Container  type={type} onClick={onclick}   height={height} width={width}>
      {children|| "genric button"}
    </Container>
  )
}

export default  Button