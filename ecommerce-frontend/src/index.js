import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TokenTest from "./TokenTest";
import CustomerLogin from "./user/components/Login";
import CustomerRegistration from "./user/components/SignupForm";
import CustomerShoppingCart from './user/components/CustomerShoppingCart';
import Dashboard from "./publisher/components/Dashboard";
import DashboardMain from './publisher/components/DashboardMain';
import UpdateProfile from './publisher/components/UpdateProfile';
import PrivateRoutes from './PrivateRoutes';
import Product from './main/components/Product';
import AddressSelection from './utility/components/AddressSelection';
let componentMap = {
  "dashboardMain": () => { DashboardMain() },
  "updateProfile": () => { UpdateProfile() },
}
const websiteTitle = 'Vocal to Local';
const APIROOTURL = 'http://localhost:8000/api/';

ReactDOM.render(
  /**
     * this is used 
     */
  <BrowserRouter>
    <PrivateRoutes />
    <Routes>
      <Route path="select-delivery-location" element={<AddressSelection />} />
      <Route path='' element={<App title={websiteTitle} rooturl={APIROOTURL} />} />
      <Route path='product'>
        <Route path=":productId" element={<Product rooturl={APIROOTURL} />} />
      </Route>
      <Route path='dashboard' element={<Dashboard componentMap={componentMap} />} />
      <Route path='token' element={<TokenTest />} />
      <Route path='update-profile' element={<UpdateProfile />} />
      <Route path='customer'>
        <Route path='shopping-cart' element={<CustomerShoppingCart />} />
        <Route path='login' element={<CustomerLogin />} />
        <Route path='register' element={<CustomerRegistration />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);