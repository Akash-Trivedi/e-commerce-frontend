import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublisherPrivateRoutes from './publisher/routes/PublisherPrivateRoutes'
import CustomerPrivateRoutes from './customer/routes/CustomerPrivateRoutes'
import Product from './main/components/Product'
import AddressSelection from './utility/components/AddressSelection'
import NotFound from './utility/components/NotFound'
import NewShop from "./publisher/components/NewShop"
import NewProduct from "./publisher/components/NewProduct"
import Checkout from './customer/components/CustomerShoppingCart'

const websiteTitle = 'Vocal to Local'
const APIROOTURL = 'http://localhost:8000/api/'

let userContext = React.createContext({
  userType: null,
  userLoggedIn: null,
  userData: null
})

ReactDOM.render(

  <BrowserRouter>
    <PublisherPrivateRoutes />
    <CustomerPrivateRoutes />
    <Routes>
      <Route path='cart' element={<Checkout />} />
      <Route path="select-delivery-location" element={<AddressSelection />} />
      <Route path="newshop" element={<NewShop />} />
      <Route path="newproduct" element={<NewProduct />} />
      <Route path='/' element={<App title={websiteTitle} rooturl={APIROOTURL} />}>

      </Route>
      <Route path='product'>
        <Route path=":productId" element={<Product rooturl={APIROOTURL} />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)