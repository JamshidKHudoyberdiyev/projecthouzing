import React from 'react'
import CarouselAnt from '../Carousel'
import Filter from '../Filter'

import { Container } from './style'


const Home = () => {
  return (
    <Container>
      <Filter/>
      <CarouselAnt/>
    
    </Container>
  )
}

export default Home