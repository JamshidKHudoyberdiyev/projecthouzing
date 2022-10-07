import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

const Root = () => {
  return (
   <BrowserRouter>

     <Routes>
     <Route path='/' element={<Navigate to='/home'/>} />
     <Route path='/home' element={<h1>Home page</h1>} />
     <Route path='/Proporties' element={<h1>Proporties page</h1>} />
     </Routes>

   </BrowserRouter>
  )
}

export default Root