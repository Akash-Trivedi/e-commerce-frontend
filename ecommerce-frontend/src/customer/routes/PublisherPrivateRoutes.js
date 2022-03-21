/**
 * author: akash trivedi
 * date-created: 11-march-2022
 * functionality: creates new routes for the specified url starting with 'publisher'
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'

import AddProduct from "../components/AddProduct"
import Dashboard from '../components/Dashboard'
import Shops from '../components/Shops'
import NotFound from '../../utility/components/NotFound'
import Profile from '../components/Profile'
import UpdateProfile from '../components/UpdateProfile'
import Statistics from '../components/Statistics'
import OrderHistory from '../components/OrderHistory'
import Feedbacks from '../components/Feedbacks'

import Signup from '../components/Signup';
import Login from '../components/Login';

export default function PublisherPrivateRoutes() {
  let [publisherActive, updatePublisherState] = React.useState(true)
  let publisherData = null;

  return (
    <Routes>
      <Route path='/dashboard' element={publisherActive ? <Dashboard active={publisherActive} /> : <Login active={false} />}>
        <Route path={'profile'} element={<Profile />} />
        <Route path='shops' element={<Shops />} />
        <Route path='sales-report' element={<Statistics />} />
        <Route path='update-profile' element={<UpdateProfile />} />
        <Route path='orders' element={<OrderHistory />} />
        <Route path='feedbacks' element={<Feedbacks />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path='publisher-signup' element={<Signup />} />
      <Route path='publisher-login' element={publisherActive ? <Dashboard active={publisherActive} /> : <Login active={updatePublisherState} />} />
    </Routes>
  )
}
