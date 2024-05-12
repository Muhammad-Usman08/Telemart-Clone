import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/Home'

const Routers = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
         <Route path='/' element ={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default Routers