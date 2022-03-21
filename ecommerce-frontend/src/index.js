import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TokenTest from "./TokenTest"
import Dashboard from "./publisher/components/Dashboard"
import DashboardMain from './publisher/components/DashboardMain'
import UpdateProfile from './publisher/components/UpdateProfile'
import PublisherPrivateRoutes from './publisher/routes/PublisherPrivateRoutes'
import CustomerPrivateRoutes from './customer/routes/CustomerPrivateRoutes'
import Product from './main/components/Product'
import AddressSelection from './utility/components/AddressSelection'
import NotFound from './utility/components/NotFound'
import NewShop from "./publisher/components/NewShop"
import NewProduct from "./publisher/components/NewProduct"
import Register from './publisher/components/Signup';
import Login from './publisher/components/Login';
import Checkout from './customer/components/CustomerShoppingCart'
import CustomerSignup from './customer/components/SignupForm'
import CustomerLogin from './customer/components/Login'

const websiteTitle = 'Vocal to Local'
const APIROOTURL = 'http://localhost:8000/api/'

let componentMap = {
  "dashboardMain": () => { DashboardMain() },
  "updateProfile": () => { UpdateProfile() },
}
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
      <Route path='customer-login' element={<CustomerLogin />} />
      <Route path='customer-signup' element={<CustomerSignup />} />
      <Route path='cart' element={<Checkout />} />
      <Route path='publisher-signup' element={<Register />} />
      <Route path='publisher-login' element={<Login />} />
      <Route path="select-delivery-location" element={<AddressSelection />} />
      <Route path="newshop" element={<NewShop />} />
      <Route path="newproduct" element={<NewProduct />} />
      <Route path='/' element={<App title={websiteTitle} rooturl={APIROOTURL} />}>

      </Route>
      <Route path='product'>
        <Route path=":productId" element={<Product rooturl={APIROOTURL} />} />
      </Route>
      <Route path='token' element={<TokenTest />} />
      <Route path='update-profile' element={<UpdateProfile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)