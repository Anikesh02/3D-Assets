import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Features from '../pages/Features'
import Subscriptions from '../pages/Subscriptions'

const Routers = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/features' element={<Features/>}></Route>
    <Route path='/plan' element={<Subscriptions/>}></Route>

    </Routes>
  )
}

export default Routers