/**
 * author: akash trivedi
 * date-created: 18-feb-2022
 * functionality: render the registration form
 */

import React from 'react';

function Register() {
  /**
   * render the registration form
   */

  let data = { 'contact': '', 'password': '' }
  let style = {display: "none",color: "red"};

  function checkPassword(event) {
    /**
     * called when the second input box for the password is active, to check if the characters are same in both the input box or not
     * should be active if-only-if the first input password is not empty
     */

    var a = document.getElementById('password-match');

    if (event.target.value !== data['password']) {
      a.style.display = 'inline-block';
    } else {
      a.style.display = 'none';
    }
  }

  function updateData(event) {
    /**
     * updates the defualt value for the data object that was first initialized at the time of load the component with the new values.
     */

    data[event.target.name] = event.target.value;
  }

  function showContent(event) {
    /**
     * every call updates the input type: text/password
     * sets the type of primary input to both inputs
     */


    var inputBox1 = document.getElementById("password1");
    (inputBox1.type === 'password' ? inputBox1.type = 'text' : inputBox1.type = 'password')
    document.getElementById("password2").type = inputBox1.type;

  }
  return (
    <div className="flex justify-center px-6 my-12">
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center">Register yourself as Publisher !</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" method='POST' action='localhost:8000/publisher/register'>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                  Contact
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="contact"
                  type="text"
                  name='contact'
                  placeholder="+91"
                  required
                  onChange={updateData}
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password1"
                  type="password"
                  placeholder="******************"
                  required
                  name='password'
                  onChange={updateData}
                />

              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password2"
                  type="password"
                  placeholder="******************"
                  required
                  name='password2'
                  onChange={checkPassword}
                />
              </div>

            </div>
            <p id='password-match' className="mb-2 text-sm font-bold text-gray-700" style={style}>passwords does not match</p>
            <p>
              <input type="checkbox" onClick={showContent} id="showPassword" />
              <label htmlFor="showPassword" className='text-sm font-bold'>show password</label>
            </p>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Register Account
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="./index.html"
              >
                Already have an account? Login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;