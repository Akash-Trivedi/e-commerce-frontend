/**
 * author: akash trivedi
 * date-created: 19-march-2022
 * functionality: render the publisher's profile
 * caller-function: ecommerce-frontend\src\publisher\routes\PublisherPrivateRoutes.js
 */
import React from 'react'
import { useContext } from 'react'
import {
  Grid, TextField, Avatar
} from '@mui/material'
import { grey } from '@mui/material/colors'
import ApplicationContext from '../../main/context/ApplicationContext'


export default function Profile() {
  const stateObject = useContext(ApplicationContext)
  const avatarSize = 250;
  let formData = stateObject.appData.allInfo;
  console.log(formData);

  let address = `${formData.address}, ${formData.pincode}, ${formData.city}, ${formData.state}`
  return (
    <Grid container spacing={2}>
      <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: avatarSize, height: avatarSize, bgcolor: grey[500], alignContent: 'center' }}>A</Avatar>
        </div>
      </Grid>

      {/* right side */}
      <Grid item xs={5}>
        <Grid container spacing={2}>

          {/* first row */}
          <Grid item xs={6} className='capitalize'>
            <TextField variant='standard' size='small' disabled label='first name' type='text' value={formData.firstName} margin='normal' fullWidth />
          </Grid>
          <Grid item xs={6} className='capitalize'>
            <TextField variant='standard' size='small' disabled label='last name' type='text' value={formData.lastName} margin='normal' fullWidth />
          </Grid>
          {/* second row  */}
          <Grid item xs={12} className='capitalize'>
            <TextField variant='standard' size='small' disabled label='email' type='text' value={formData.email} margin='normal' fullWidth />
          </Grid>

          {/* third row */}
          <Grid item xs={6} className='capitalize'>
            <TextField variant='standard' size='small' disabled label='dob' type='text' value={formData.dob} margin='normal' fullWidth />
          </Grid>
          <Grid item xs={6} className='capitalize'>
            <TextField variant='standard' size='small' disabled label='contact' type='text' value={formData.username} margin='normal' fullWidth />
          </Grid>

          {/* fourth row */}
          <Grid item xs={12}>
            <TextField variant='standard' size='small' disabled label='address' type='text' value={address} multiline maxRows={4} margin='normal' fullWidth className='capitalize' />
          </Grid>

          {/* fifth row */}
          <Grid item xs={12} className='capitalize'>
            <TextField variant='standard' size='small' disabled label='registration' type='text' value={formData.address} multiline maxRows={4} margin='normal' fullWidth />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
