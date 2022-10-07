import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import RootContext from '../contex'

const Root = () => {
  return (
   <BrowserRouter>
  <RootContext>
     <Routes>
     <Route path='/' element={<Navigate to='/home'/>} />
     <Route path='/home' element={<h1>Home page</h1>} />
     <Route path='/Proporties' element={<h1>Proporties page</h1>} />
     </Routes>
  </RootContext>

   </BrowserRouter>
  )
}

export default Root