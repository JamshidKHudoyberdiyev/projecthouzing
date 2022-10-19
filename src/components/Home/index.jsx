import React from 'react'
import CarouselAnt from '../Carousel'
import Filter from '../Filter'
import HouseCard from '../HouseCard'
// import {Input,Button} from '../Generic'
import { Container } from './style'


const Home = () => {
  return (
    <Container>
      <Filter/>
      <CarouselAnt/>
      <HouseCard/>
    </Container>
  )
}

export default Home