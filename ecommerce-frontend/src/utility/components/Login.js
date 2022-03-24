/**
 * author: akash trivedi
 * date-created: 10-march-2022
 * functionality: render the login page for the given user to login
 * caller-function: ecommerce-frontend\src\App.js
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid, Button, TextField, Box, FormControlLabel, Checkbox
} from '@mui/material';

/**
 * generalized login page, can be used for both publisher and customer
 */
function login(data) {
  async function loginInside(data) {
    let response = await fetch('http://127.0.0.1:8000/api/publisher/login/', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    return response
  }
  let r = loginInside(data)
  return r
}


function refresh(data) {
  async function refreshIndside(data) {
    let response = await fetch('http://127.0.0.1:8000/api/token/', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    return response
  }
  let a = refreshIndside(data)
  return a
}


export default function Login(props) {
  let [formData, updateFormData] = React.useState({
    username: '', password: ''
  });

  function handleChange(event) {
    updateFormData(prev => {
      return {
        ...prev, [event.target.name]: event.target.value
      }
    })
  }

  function userLogin(event) {
    event.preventDefault();
    console.log(formData);
    if (localStorage.getItem('access') === null || localStorage.getItem('access') === undefined) {
      let newtoken = refresh(formData)// returns promise
      newtoken.then(r => {
        console.log('refresh token setted');
        localStorage.setItem('access', r.access);
        localStorage.setItem('refresh', r.refresh);
      })
      newtoken.then(
        r => {
          let res = login(formData)
          res.then(res => {
            console.log(res)
          })
          res.catch(error => console.log(`error was : ${error}`))
        }
      )
    } else {
      let res = login(formData)
      res.then(res => {
        console.log(res);
      })
      res.catch(error => console.log(`error was : ${error}`))
    }
  }


  function showContent(event) {
    let inputPassword = document.getElementById("password");
    inputPassword.type.localeCompare('password') === 0 ? inputPassword.type = 'text' : inputPassword.type = 'password'
  }

  return (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={userLogin} className="w-1/2">
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>

          <Grid item xs={7}>
            <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
              <h1 className='capitalize text-2xl font-semibold'>{props.variables.heading} Login</h1>
            </Box>
          </Grid>

          <Grid item xs={7}>
            <TextField label='contact' onChange={handleChange} type='text' value={formData.contact} name='username' fullWidth />
          </Grid>

          <Grid item xs={7}>
            <TextField label='password' onChange={handleChange} type='password' value={formData.password} name='password' fullWidth id='password' />
          </Grid>

          <Grid item xs={7}>
            <FormControlLabel id="showPassword" control={<Checkbox />} onChange={showContent} label="show password" />
          </Grid>

          <Grid item xs={7}>
            <Box display='flex' justifyContent='center'>
              <Button variant='contained' type='submit'>Login</Button>
            </Box>
          </Grid>

          <Grid item xs={7}>
            <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
              Don't have an account?
              {
                props.variables.type.localeCompare('customer') === 0 ? <NavLink to='/customer-signup'> Login! </NavLink> : <NavLink to='/publisher-signup'> Signup! </NavLink>
              }
            </Box>
          </Grid>

        </Grid >
      </form >
    </Box >
  );
}