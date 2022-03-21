/**
 * author: akash trivedi
 * date-created: 11-march-2022
 * functionality: creates new routes for the specified url starting with 'publisher'
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'

import Login from '../components/Login'
import AddProduct from "../components/AddProduct"
import Dashboard from '../components/Dashboard'
import Shops from '../components/Shops'
import NotFound from '../../utility/components/NotFound'
import Profile from '../components/Profile'
import UpdateProfile from '../components/UpdateProfile'
import Statistics from '../components/Statistics'
import OrderHistory from '../components/OrderHistory'
import Feedbacks from '../components/Feedbacks'


export default function PublisherPrivateRoutes() {
  let userLogedIn = true

  return (
    <Routes>
      <Route path='/dashboard' element={userLogedIn ? <Dashboard /> : <Login />}>
        <Route path={'profile'} element={<Profile />} />
        <Route path='shops' element={<Shops />} />
        <Route path='sales-report' element={<Statistics />} />
        <Route path='update-profile' element={<UpdateProfile />} />
        <Route path='orders' element={<OrderHistory />} />
        <Route path='feedbacks' element={<Feedbacks />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
