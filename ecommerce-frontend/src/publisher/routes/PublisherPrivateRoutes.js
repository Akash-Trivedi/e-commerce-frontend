/**
 * author: akash trivedi
 * date-created: 11-march-2022
 * functionality: creates new routes for the specified url starting with 'publisher'
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import Login from '../components/Login';
import AddProduct from "../components/AddProduct";
import Dashboard from '../components/Dashboard';


export default function PublisherPrivateRoutes() {
  localStorage.getItem('user');
  let userLogedIn = false;

  return (
    <Routes>
      <Route path='publisher'>
        <Route path='dashboard' element={userLogedIn?<Dashboard />:<Login />} />
        <Route path='add-product' element={<AddProduct />} />
      </Route>
    </Routes>
  )
}
