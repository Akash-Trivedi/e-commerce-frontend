/**
 * author: akash trivedi
 * date-created: 21-march-2022
 * functionality: render the page for updating the details of the customer
 * caller-function: ecommerce-frontend\src\main\components\Header.js
 */
import React from 'react'
import {
  Button, TextField
} from '@mui/material'


function UpdateProfile(props) {
  const link = props.link
  let [formData, updateForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    address: '',
    pincode: '',
    city: '',
    state: ''
  })

  function updateProfile(event) {
    event.preventDefault()
    async function updateDetails(data) {
      let response = await fetch(`http://localhost:8000/api/product/tag/list-all/`)
      response = await response.json()
      return response
    }
    let status = updateDetails(formData)
      .catch((error) => console.error('error is: ' + error))
  }

  function getLocation(pincode) {

    async function getLocationInside(pincode) {
      let response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      })
      response = await response.json()
      return response
    }

    let location = getLocationInside(pincode)
    location.then(l => {
      if (l[0].PostOffice !== null) {
        l = {
          city: l[0].PostOffice[0].Division,
          state: l[0].PostOffice[0].State
        }
      } else {
        l = {
          city: 'invalid',
          state: 'invalid'
        }
      }
      updateForm((prevData) => {
        return {
          ...prevData,
          pincode: pincode,
          ...l
        }
      })
    })
    location.catch(err => {
      console.log('some error')
    })
  }
  function handleChange(event) {
    if (event.target.name === 'pincode' && event.target.value.length >= 6) {
      getLocation(event.target.value)
    } else {
      updateForm((prevData) => {
        return {
          ...prevData,
          [event.target.name]: event.target.value
        }
      })
    }
  }
  return (
    <div className='container my-8 block p-6 rounded-lg shadow-lg bg-white max-w-md '>
      <form onSubmit={updateProfile} className='capitalize'>
        <div className='grid grid-cols-2 gap-4'>
          <TextField label='first name' onChange={handleChange} type='text' value={formData.firstName} name='firstName' margin='normal' />
          <TextField label='last name' onChange={handleChange} type='text' value={formData.lastName} name='lastName' margin='normal' />
        </div>
        <div>
          <TextField label='email' onChange={handleChange} type='text' value={formData.email} name='email' margin='normal' fullWidth />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <TextField label='dob' onChange={handleChange} type='text' value={formData.dob} name='dob' margin='normal' />
          <TextField label='pincode' onChange={handleChange} type='text' value={formData.pincode} name='pincode' margin='normal' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <TextField label='city' type='text' value={formData.city} name='city' margin='normal' aria-readonly />
          <TextField label='state' type='text' value={formData.state} name='city' margin='normal' aria-readonly />
        </div>
        <div>
          <TextField label='address' onChange={handleChange} type='text' value={formData.address} name='address' multiline maxRows={4} margin='normal' fullWidth />
        </div>
        <div>
          <Button variant='contained' color='primary'>Update</Button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProfile
