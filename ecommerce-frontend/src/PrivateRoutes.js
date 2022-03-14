/**
 * author: akash trivedi
 * date-created: 11-march-2022
 * functionality: creates new routes for the specified url starting with 'publisher'
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import Register from './publisher/components/Register';
import Login from './publisher/components/Login';
import AddProduct from "./publisher/components/AddProduct";
import Dashboard from './publisher/components/Dashboard';

export default function PrivateRoutes() {
  localStorage.getItem('user')
  let userLogedIn = false;

  return (
    <Routes>
      <Route path='publisher'>
        <Route path='dashboard' element={<Dashboard />} />
        {/* <Route path='publisher-registrations' element={<Register />} />
      <Route path='product' element={<Product tag={tags} />} >
      <Route path=':prodcutId' element={<Product tag={tags} />} />
    </Route> */}
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='add-product' element={<AddProduct />} />
      </Route>
    </Routes>
  )
}
