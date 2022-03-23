/**
 * author: akash trivedi
 * date-created: 6-march-2022
 * functionality: render the login page for the publishers to login
 * caller-function: ecommerce-frontend\src\App.js
 */

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button, TextField, FormControlLabel, Checkbox
} from '@mui/material'


const APIROOTURL = 'http://127.0.0.1:8000/ecommerce/'

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
  let navigate = useNavigate()
  let formData = { username: null, password: null }

  function updateFormData(event) {
    formData = {
      ...formData, [event.target.name]: event.target.value
    }
  }

  function publisherLogin(event) {
    event.preventDefault();

    if (localStorage.getItem('access') === null) {
      let newtoken = refresh(formData)// returns promise
      newtoken.then(r => {
        localStorage.setItem('access', r.access)
        localStorage.setItem('refresh', r.refresh)
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
      navigate('/publisher-dashboard/')
      })
      res.catch(error => console.log(`error was : ${error}`))
    }
  }


  function showContent(event) {
    let inputPassword = document.getElementById("password");
    inputPassword.type.localeCompare('password') === 0 ? inputPassword.type = 'text' : inputPassword.type = 'password'
  }

  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-4 px-4 rounded-x1">
        <h1 className="font-medium text-2xl mt-1 text-center">Publishers Login here</h1>
        {/* login form */}
        <form onSubmit={publisherLogin} className="mt-6 text-center">
          <div className="my-5 text-sm">
            <TextField name='username' id="contact" label="+91" type="text" onChange={updateFormData} value={formData.username} required />
          </div>
          <div className="my-3 text-sm">
            <TextField name='password' id="password" label="password" type="password" onChange={updateFormData} value={formData.password} required />
          </div>
          <Link to='/'>Forget Password?</Link>

          {/* show password */}
          <div className="my-3 text-sm">
            <FormControlLabel id="showPassword" control={<Checkbox />} onChange={showContent} label="show password" />
          </div>
          <Button id="signup" type='submit' variant='contained' color='primary'>login</Button>
        </form>

        <p className="mt-12 text-xs text-center font-light text-gray-800">
          Don't have an account?
          <Link to="register"> Create One </Link>
        </p>
      </div>
    </div>
  )
}