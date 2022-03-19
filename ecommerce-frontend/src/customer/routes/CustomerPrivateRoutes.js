import { Routes, Route } from "react-router-dom";
import CustomerLogin from '../components/Login';
import CustomerSignup from '../components/SignupForm';
import CustomerCheckout from '../components/CustomerShoppingCart';
import CustomerProfile from '../components/CustomerProfile';


export default function CustomerPrivateRoutes() {
  localStorage.getItem('user');
  let userLogedIn = false;

  return (
    <Routes>
      <Route path='customer'>
        <Route path='profile' element={<CustomerProfile />} />
        <Route path='login' element={<CustomerLogin />} />
        <Route path='signup' element={<CustomerSignup />} />
      </Route>
    </Routes>
  )
}