/**
 * author: akash trivedi
 * date-created: 11-march-2022
 * functionality: creates new routes for the specified url starting with 'publisher'
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'

import NewProduct from "../components/NewProduct"
import NewShop from "../components/NewShop"
import Products from "../components/Products"
import UpdateProduct from "../components/UpdateProduct"
import Dashboard from '../components/Dashboard'
import Shops from '../components/Shops'
import NotFound from '../../utility/components/NotFound'
import Profile from '../../utility/components/Profile'
import UpdateProfile from '../../utility/components/UpdateProfile'
import Statistics from '../components/Statistics'
import OrderHistory from '../components/OrderHistory'
import Feedbacks from '../components/Feedbacks'

import Signup from '../components/Signup';
import Login from '../../utility/components/Login';

export default function PublisherPrivateRoutes() {
  let [publisherActive, updatePublisherState] = React.useState(true)
  let publisherData = null;

  return (
    <Routes>
      <Route path='/publisher-dashboard/' element={<Dashboard active={publisherActive} />}>
        <Route path={'profile'} element={<Profile />} />
        <Route path='shops' element={<Shops />} />
        <Route path='products' element={<Products />} />
        <Route path='new-product' element={<NewProduct />} />
        <Route path='new-shop' element={<NewShop />} />
        <Route path='feedback' element={<Feedbacks />} />
        <Route path='update-product' element={<UpdateProduct />} />
        <Route path='sales-report' element={<Statistics />} />
        <Route path='update-profile' element={<UpdateProfile link={'http://localhost:8000/api/customer/publisher-update-profile/'} />} />
        <Route path='orders' element={<OrderHistory />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path='publisher-signup' element={<Signup />} />
      <Route path='publisher-login' element={<Login active={updatePublisherState} />} />
    </Routes>
  )
}
