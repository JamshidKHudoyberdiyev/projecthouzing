import React, { useRef } from 'react'
import Input from '../Generic/Input'
import { Container,ContentContainer,FragmentTitle,Icon,Fragment } from './style'
import Button from '../Generic/Button'
import 'antd/dist/antd.css';
import { Popover } from 'antd'
import { uzeReapleace } from '../../hooks/useReplace';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';









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
  
  const location= useLocation()
  const navigate = useNavigate()

  const onchange =({target:{name,value}})=>{
    navigate(`${location.pathname}${uzeReapleace(name,value)}`)
  }
  
  const query = useSearch()
  



  const content = (
    <ContentContainer>
        <FragmentTitle>Adress</FragmentTitle>
      <Fragment>
         <Input  defaultValue ={query.get("country")} onChange={onchange} name={"country"} ref={Countryref} placeholder={'Country'}/>
         <Input  defaultValue ={query.get("region")} onChange={onchange} name="region" ref={Regionref}  placeholder={'Region'}/>
         <Input  defaultValue ={query.get("city")} onChange={onchange} name="city" ref={Cityref} placeholder={'City'}/>
         <Input  defaultValue ={query.get("zip_code")} onChange={onchange} name="zip_code" ref={Zipref} placeholder={'Zip Code'}/>
      </Fragment>
        <FragmentTitle>Appartment info</FragmentTitle>
      <Fragment>
         <Input  defaultValue ={query.get("room")} onChange={onchange} name="room" ref={Roomref} placeholder={'Rooms'}/>
         <Input  defaultValue ={query.get("size")} onChange={onchange} name="size" ref={Sizeref} placeholder={'Size'}/>
         <Input  defaultValue ={query.get("sort")} onChange={onchange} name="sort" ref={Sortref} placeholder={'Sort'}/>
      </Fragment>
        <FragmentTitle>Price</FragmentTitle>
      <Fragment>
         <Input  defaultValue ={query.get("min_price")} onChange={onchange} name="min_price" ref={Minref} placeholder={'Min price'}/>
         <Input  defaultValue ={query.get("max_price")} onChange={onchange} name="max_price" ref ={Maxref} placeholder={'Max price'}/>
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
