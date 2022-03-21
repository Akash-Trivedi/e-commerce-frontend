/**
 * author: akash trivedi
 * date-created: 19-march-2022
 * functionality: render the publisher's profile
 * caller-function: ecommerce-frontend\src\publisher\routes\PublisherPrivateRoutes.js
 */
import React from 'react'
import { useLocation } from 'react-router-dom';


export default function Profile() {
  const location = useLocation();
  const data = location.state.publisherInfo;
  return (
    <div>Profile</div>
  )
}
