import React from 'react'
import CarouselAnt from '../Carousel'
import Category from '../Category'

import Filter from '../Filter'
import HouseCard from '../HouseCard'

import { Container } from './style'


const Home = () => {
  return (
    <Container>
      <Filter/>
      <CarouselAnt/>
      <HouseCard/>
      <Category/>
    </Container>
  )
}

export default Home