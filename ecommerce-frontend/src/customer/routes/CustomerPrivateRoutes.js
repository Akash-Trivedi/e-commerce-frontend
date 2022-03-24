/**
 * author: akash trivedi
 * date-created: 20-march-2022
 * functionality: 
 * caller-function: 
 */

import { Routes, Route } from 'react-router-dom'
import Profile from '../../utility/components/Profile'
import Dashboard from '../components/Dashboard'
import UpdateProfile from '../../utility/components/UpdateProfile'
import Feedbacks from '../components/Feedbacks'


export default function CustomerPrivateRoutes() {
  localStorage.getItem('user')
  return (
    <Routes>
      <Route path='/customer/dashboard' element={<Dashboard />}>
        <Route path='profile' element={<Profile />} />
        <Route path='feedbacks' element={<Feedbacks />} />
        <Route path='order-history' element={<Profile />} />
        <Route path='update-profile' element={<UpdateProfile link={'http://localhost:8000/api/customer/publisher-update-profile/'} />} />
      </Route>
      
    </Routes>
  )
}