/**
 * author: akash trivedi
 * date-created: 6-march-2022
 * functionality: render the login page for the publishers to login
 * caller-function: ecommerce-frontend\src\App.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Register from './Signup';
import {
  Button, TextField, FormControlLabel, Checkbox, Container
} from '@mui/material'


const APIROOTURL = 'http://127.0.0.1:8000/ecommerce/';

export default function Login(props) {
  /**
   * setup the login by choosing the database, tokens and render
   */
  let localToken = localStorage.getItem('access')
  let formData = { contactId: null, password: null };
  console.log("publisher login");
  function updateFormData(event) {
    /**
     * assign value of the event.target.id to formData, for easy post request
     */
    formData = {
      ...formData, [event.target.name]: event.target.value
    }
  }
  function publisherLogin(event) {
    /**
     * login to publisher account, if true then move to dashboard else appropriate message
     */

    event.preventDefault();
    async function login(data) {
      let response = await fetch('http://127.0.0.1:8000/api/publisher/login/', {
        mode: 'cors',
        body: JSON.stringify(formData),
        method: 'POST',
        headers: {
          "Authentication": localToken === null ? localToken : 'JWT ' + localToken,
          'Content-Type': 'application/json'
        }
      });
      response = await response.json();
      return response;
    }
    let res = login(formData);
    res.then(res => console.log(res));
    res.catch(error => console.log(`error was : ${error}`));
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
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-4 px-4 rounded-x1">
        <h1 className="font-medium text-2xl mt-1 text-center">Publishers Login here</h1>
        {/* login form */}
        <form onSubmit={publisherLogin} className="mt-6 text-center">
          <div className="my-5 text-sm">
            <TextField name='contactId' id="contact" label="+91" type="text" onChange={updateFormData} value={formData.contactId} required />
          </div>
          <div className="my-3 text-sm">
            <TextField name='password' id="password" label="password" type="password" onChange={updateFormData} value={formData.contactId} required />
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
  );
}