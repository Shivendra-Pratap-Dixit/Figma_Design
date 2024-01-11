import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Shop from '../Pages/Shop'
import Login from '../Pages/Login'

const AllRoutes = () => {
  return (
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/shop' element={<Shop/>}/>
<Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes