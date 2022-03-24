import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublisherPrivateRoutes from './publisher/routes/PublisherPrivateRoutes'
import CustomerPrivateRoutes from './customer/routes/CustomerPrivateRoutes'
import Product from './main/components/Product'
import AddressSelection from './utility/components/AddressSelection'
import NotFound from './utility/components/NotFound'
import Cart from './customer/components/ShoppingCart'
import MainState from "./main/state/State"
import Main from "./main/components/Main";
import About from "./main/components/About";
import Support from './main/components/Support'
import Login from './utility/components/Login'
import Signup from './utility/components/Signup'

const websiteTitle = 'Vocal to Local'

const customerLoginVariables = {
  heading: 'customer ',
  type: 'customer',
  link: 'http://127.0.0.1:8000/api/customer/login/'
}

const customerSignupVariables = {
  heading: 'join with us !',
  type: 'customer',
  link: 'http://127.0.0.1:8000/api/customer/signup/'
}

const publisherLoginVariables = {
  heading: 'publisher',
  type: 'publisher',
  link: 'http://127.0.0.1:8000/api/publisher/login/'
}

const publisherSignupVariables = {
  heading: 'join with us as publisher!',
  type: 'publisher',
  link: 'http://127.0.0.1:8000/api/publisher/signup/'
}


ReactDOM.render(
  <MainState>
    <BrowserRouter>
      <Routes>
        <Route path="select-delivery-location" element={<AddressSelection />} />
        <Route path='/' element={<App title={websiteTitle} />}>
          <Route path='homepage' element={<Main />} />
          <Route path='product'>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='about' element={<About />} />
          <Route path='support' element={<Support />} />
          <Route path='publisher-signup' element={<Signup variables={publisherSignupVariables} />} />
          <Route path='publisher-login' element={<Login variables={publisherLoginVariables} />} />
          <Route path='customer-login' element={<Login variables={customerLoginVariables} />} />
          <Route path='customer-signup' element={<Signup variables={customerSignupVariables} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <CustomerPrivateRoutes />
      <PublisherPrivateRoutes />
    </BrowserRouter>
  </MainState>,
  document.getElementById("root")
)