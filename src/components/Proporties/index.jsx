import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import Filter from '../Filter';
import HouseCard from '../HouseCard';
import { Container } from './style'


const {REACT_APP_BASE_URL:url} = process.env;


const Proporties = () => {

  
  const {search} = useLocation()
  

  const [data,setData] = useState([])
 
  useEffect(()=>{
  fetch(`${url}/houses/list${search}`)
  .then(res=>res.json())
  .then(res=>setData(res?.data || []))
 },[search])



 return (
  <div>

    <Filter/>
    <Container>
      {
        data.map((value)=>{
          return <HouseCard key={value.id} data={value}/>
        })
      }
    </Container>
      </div>
  )
}

export default Proporties