/**
 * author: akash trivedi
 * date-created: 10-march-2022
 * functionality: render the login page for the given user to login
 * caller-function: ecommerce-frontend\src\App.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Button, TextField, Box
} from '@mui/material';


const APIROOTURL = 'http://127.0.0.1:8000/ecommerce/';

/**
 * generalized login page, can be used for both publisher and customer
 */

export default function Login(props) {
  let formData = { contact: "", password: "" };

  function updateFormData(event) {
    formData = {
      ...formData, [event.target.id]: event.target.value
    }
  }
  function publisherLogin(event) {
    event.preventDefault();
    let response = fetch(`${APIROOTURL}`)
  }

  function showContent(event) {
    /**
     * every call updates the input type: text/password
     * sets the type of primary input to both inputs
     */
    var inputPassword = document.getElementById("password");
    (inputPassword.type === 'password' ? inputPassword.type = 'text' : inputPassword.type = 'password')
  }

  return (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={publisherLogin} className="mt-6">
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <h1>Customer Login</h1>
          <Grid item xs={12}>
            <TextField label='shop name' onChange={updateFormData} type='text' value={1} name='name' fullWidth />
          </Grid>
          <div className="my-5 text-sm">
            <label htmlFor="contact" className="block text-black">Contact</label>
            <input type="text" autoFocus id="contact" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="+91" onChange={updateFormData} />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">Password</label>
            <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" onChange={updateFormData} />
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
            </div>

          </div>
          {/* show password */}
          <div className="my-5 text-sm">
            <input type="checkbox" onClick={showContent} id="showPassword" />
            <label htmlFor="showPassword" className="mt-1 text-xs text-gray-900">show password</label>
          </div>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>

          <p className="mt-12 text-xs text-center font-light text-gray-800">
            Don't have an account?
            <Link to="publisher/registration"> Create One </Link>
          </p>
        </Grid >
      </form >
    </Box >
  );
}