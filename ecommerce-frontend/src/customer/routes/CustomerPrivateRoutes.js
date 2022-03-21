import { Routes, Route } from "react-router-dom"
import CustomerLogin from '../components/Login'
import CustomerSignup from '../components/SignupForm'
import CustomerCheckout from '../components/CustomerShoppingCart'
import CustomerProfile from '../components/CustomerProfile'
import Dashboard from '../components/Dashboard'
import UpdateProfile from '../../utility/components/UpdateProfile'

export default function CustomerPrivateRoutes() {
  localStorage.getItem('user')
  let userLogedIn = false

  return (
    <Routes>
      <Route path='/customer/dashboard' element={<Dashboard />}>
        <Route path='profile' element={<CustomerProfile />} />
        <Route path='feedbacks' element={<CustomerProfile />} />
        <Route path='order-history' element={<CustomerProfile />} />
        <Route path='update-profile' element={<UpdateProfile link={'http://localhost:8000/api/customer/publisher-update-profile/'}/>} />
      </Route>
      <Route path='login' element={<CustomerLogin />} />
      <Route path='signup' element={<CustomerSignup />} />
    </Routes>
  )
}