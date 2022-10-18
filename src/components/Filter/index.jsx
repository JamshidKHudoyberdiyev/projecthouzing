import React, { useRef } from 'react'
import Input from '../Generic/Input'
import { Container,ContentContainer,FragmentTitle,Icon,Fragment } from './style'
import Button from '../Generic/Button'
import 'antd/dist/antd.css';
import { Popover } from 'antd'







export const Filter = () => {

  const Countryref = useRef();
  const Regionref = useRef();
  const Cityref = useRef();
  const Zipref = useRef();
  const Roomref = useRef();
  const Sizeref = useRef();
  const Sortref = useRef();
  const Minref = useRef();
  const Maxref = useRef();

  const content = (
    <ContentContainer>
        <FragmentTitle>Adress</FragmentTitle>
      <Fragment>
         <Input ref={Countryref} placeholder={'Country'}/>
         <Input ref={Regionref}  placeholder={'Region'}/>
         <Input ref={Cityref} placeholder={'City'}/>
         <Input ref={Zipref} placeholder={'Zip Code'}/>
      </Fragment>
        <FragmentTitle>Appartment info</FragmentTitle>
      <Fragment>
         <Input ref={Roomref} placeholder={'Rooms'}/>
         <Input ref={Sizeref} placeholder={'Size'}/>
         <Input ref={Sortref} placeholder={'Sort'}/>
      </Fragment>
        <FragmentTitle>Price</FragmentTitle>
      <Fragment>
         <Input ref={Minref} placeholder={'Min price'}/>
         <Input ref ={Maxref} placeholder={'Max price'}/>
      </Fragment>
    </ContentContainer>
  )

  return (
    <Container>
      <Input width={830}  icon={<Icon.House/>} placeholder={"Enter an address, neighborhood, city, or ZIP code"}/>
      <Popover trigger="click" placement="bottomRight" content={content} >  
      <div>
      <Button width={131} type={'light'}><Icon.Advanced/>Advanced</Button> 
      </div>       
      </Popover>
    

      <Button width={180} type={'primary'}><Icon.Search/>Search</Button>
    </Container>
  )
}


export default Filter
