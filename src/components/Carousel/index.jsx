import React, { useRef } from 'react'
import { Carousel } from 'antd';
import { Container,Img,Arrow, Blur,Content, Content_Title, Content_info} from './style';
import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'




const CarouselAnt = () => {


   const slider = useRef()
  const onMovie =({target:{dataset:{name}}})=>{
    if(name==="left") slider.current.prev()
    if(name==="right") slider.current.next()
  }

  return (
    (  
      <Container>
        <Carousel dots ref={slider} autoplay>
          <Img src={img1}/>
          <Img src={img2}/>
        </Carousel>
        <Blur/>
        <Content>
          <Content_Title>Skyper Pool Partment</Content_Title>
          <Content_info>112 Glenwood Ave Hyde Park, Boston, MA</Content_info>
        </Content>
        <Arrow onClick={onMovie} data-name="left" chap={"true"} />
        <Arrow onClick={onMovie} data-name="right" />
      </Container>
      )
  )
}

export default CarouselAnt