import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Navbar from '../components/Navbar'
import RootContext from '../contex'
import { navbar } from '../utils/navbar'

const Root = () => {
  return (
   <BrowserRouter>
  <RootContext>
     <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route  element={<Navbar/>}>          
           {navbar.map(({path,element,id})=>{
             return <Route key={id} path={path} element={element} />
           })}
        <Route path='/daryo' element={<h1> Daryo Page</h1>}/>
        </Route>
        <Route path='*' element={<h1> Not found Eror Page</h1>}/>
     </Routes>
  </RootContext>

   </BrowserRouter>
  )
}

export default Root