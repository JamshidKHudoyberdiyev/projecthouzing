import React from 'react'
import CarouselAnt from '../Carousel'
import CategoryCard from '../CategoryCard'
import Filter from '../Filter'
import HouseCard from '../HouseCard'

import { Container } from './style'


const Home = () => {
  return (
    <Container>
      <Filter/>
      <CarouselAnt/>
      <HouseCard/>
      <CategoryCard/>
    </Container>
  )
}

export default Home