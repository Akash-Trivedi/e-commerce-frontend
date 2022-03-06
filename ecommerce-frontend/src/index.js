import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './publisher/components/Register';
import PublisherLogin from './publisher/components/Login';
const websiteTitle = 'Vocal to Local';

ReactDOM.render(
  /**
   * this is used 
   */
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App title={websiteTitle} />} />
      <Route path='publisher/login' element={<PublisherLogin title={websiteTitle} />} />
      {/* <Route path='publisher-registrations' element={<Register />} />
      <Route path='product' element={<Product tag={tags} />} >
        <Route path=':prodcutId' element={<Product tag={tags} />} />
      </Route> */}
      <Route path='publisher/registration' element={<Register />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);