/**
 * author: akash trivedi
 * date-created: 21-march-2022
 * functionality: render the page for updating the details of the customer
 * caller-function: ecommerce-frontend\src\main\components\Header.js
 */
import React from 'react'
import {
  Button, TextField, Grid, Avatar, Box
} from '@mui/material'
import {
  UploadFile
} from '@mui/icons-material'
import { grey } from '@mui/material/colors'

export default function UpdateProfile(props) {
  const avatarSize = 250;
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
    if (event.target.name.localeCompare('pincode') === 0 && event.target.value.length >= 6) {
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
    <div className='container p-8'>
      <Grid container spacing={2}>
        <Grid xs={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: avatarSize, height: avatarSize, bgcolor: grey[500], alignContent: 'center' }}>A</Avatar>
          </div>
          <br />
          <div>
            <Button variant="contained" startIcon={<UploadFile />}>upload</Button>
          </div>
        </Grid>
        <Grid xs={5} sx={{ justifyContent: 'center', display: 'flex' }}>
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
              <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <Button variant='contained' color='primary'>Update</Button>
              </Box>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
