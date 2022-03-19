/**
 * author: akash trivedi
 * date-created: 6-march-2022
 * functionality: render the login page for the publishers to login
 * caller-function: ecommerce-frontend\src\App.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Register from './Signup';
const APIROOTURL = 'http://127.0.0.1:8000/ecommerce/';

function Login(props) {
  /**
   * setup the login by choosing the database, tokens and render
   */
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
        <h1 className="font-medium text-2xl mt-1 text-center">Publisher Login</h1>
        {/* login form */}
        <form onSubmit={publisherLogin} className="mt-6">
          <div className="my-5 text-sm">
            <label htmlFor="contact" className="block text-black">Contact</label>
            <input type="text" autoFocus name='contactId' id="contact" value={formData.contactId} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="+91" onChange={updateFormData} />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">Password</label>
            <input type="password" id="password" name='password' value={formData.password} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" onChange={updateFormData} />
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
            </div>

          </div>
          {/* show password */}
          <div className="my-5 text-sm">
            <input type="checkbox" onClick={showContent} id="showPassword" />
            <label htmlFor="showPassword" className="mt-1 text-xs text-gray-900">show password</label>
          </div>

          <button type='submit' className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
        </form>

        <p className="mt-12 text-xs text-center font-light text-gray-800">
          Don't have an account?
          <Link to="register"> Create One </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;