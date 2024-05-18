import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/Home'
import SingleProduct from '../../screens/singleProduct/SingleProduct'
import MyNavbar from '../../components/Navbar'

const Routers = () => {
  return (
    <>
    <MyNavbar/>
    
    <BrowserRouter>
    <Routes>
         <Route path='/' element ={<Home/>}/>
         <Route path='single/:id' element = {<SingleProduct/>}/>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default Routers