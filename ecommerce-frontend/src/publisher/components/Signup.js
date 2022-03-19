/**
 * author: akash trivedi
 * date-created: 18-feb-2022
 * functionality: render the registration form
 */

import React from 'react'
import {
  Link, NavLink, useNavigate
} from 'react-router-dom'
import CreatePassword from './CreatePassword'
import ReactLoading from 'react-loading'
import { SpeakerNotesOffSharp } from '@material-ui/icons';

export default function Signup() {
  const navigate = useNavigate();
  console.log("register called")
  /**
   * render the registration form
   */
  let [formData, updateForm] = React.useState({
    otpSent: false,
    otp: null,
    userData: {
      username: null, password: null
    }
  })
  let [otpValid, renderPasswordForm] = React.useState(false)

  function checkContactLength(event) {
    /**
     * apply regex for the input
     */
    let contactRegex = '^[6-9]{1}[0-9]{9}'

    if (event.target.value.length === 10) {
      document.getElementById("send-otp").disabled = false
      formData.userData.username = event.target.value
      document.getElementById("send-otp").addEventListener("click", sendOtp)
    } else if (event.target.value.length > 10) {
      document.getElementById("send-otp").removeEventListener("click", sendOtp)
      document.getElementById("send-otp").disabled = true
    }
  }

  function sendOtp(event) {
    /**
     * call the otp service and then update the state of the application
     */

    async function getOtp(contactNumber) {
      /**
       * send the request for the otp, to specified contact number
       * response contains either otp or user already exists
       */
      let response = await fetch(`http://127.0.0.1:8000/api/otp/${contactNumber}/`)
      response = await response.json()
      return response
    }

    let response = getOtp(formData.userData.username)
    response.then(response => {
      updateForm(prev => {
        if (response.status === 200) {
          return { ...prev, otp: response.otpFromServer, otpSent: true }
        }
      })
    })
    response.catch(err => console.log(err))

  }

  function confirmOtp(event) {
    let userOtp = document.getElementById("otp-input-box").value
    console.log(userOtp, '', formData.otp)
    if ((userOtp).localeCompare(String(formData.otp)) == 0) {
      document.getElementById("otp-input-box").disabled = true
      renderPasswordForm(true)
    } else {
      alert("wrong otp, please try again")
    }
  }

  function checkOtpLength(event) {
    /**
     * 
     */
    let otp = '^[1-9]{1}[0-9]{5}'
    let otpLenght = event.target.value.length
    if (otpLenght === 6) {
      document.getElementById("confirm-otp").disabled = false
      document.getElementById("confirm-otp").addEventListener("click", confirmOtp)
    } else if (otpLenght > 6) {
      document.getElementById("confirm-otp").disabled = true
      document.getElementById("confirm-otp").removeEventListener("click", confirmOtp)
    }
  }

  return (
    <div className="flex justify-center px-6 my-4">
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        <div className="w-full lg:w-6/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="text-2xl text-center">Register yourself as Publisher !</h3>

          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" method='POST'>
            {/* contact number */}
            <div className="mb-4 md:flex md:justify-center">
              <div className="mb-2 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm text-center font-bold text-gray-700" htmlFor="firstName">
                  Contact Number
                </label>
                <input
                  className="w-full mb-3 px-3 py-2 text-center text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="contact"
                  type="text"
                  name='contact'
                  placeholder="+91"
                  required
                  onChange={checkContactLength}
                />
                {
                  formData.otpSent === false ?
                    (<button id="send-otp" type='button' disabled
                      className="w-full mb-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">send otp</button>)
                    :
                    (<div>
                      <label className="block mb-2 text-sm text-center font-bold text-gray-700" htmlFor="firstName">
                        OTP(one time password)
                      </label>
                      <input
                        className="w-full text-center mb-3 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="otp-input-box"
                        type="text"
                        name='contact'
                        placeholder="enter opt here"
                        required
                        onChange={checkOtpLength}
                      />
                      <button id="confirm-otp" type='button' disabled
                        className="w-full mb-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">confirm OTP</button>
                    </div>
                    )
                }
                {
                  otpValid === true ? <CreatePassword data={formData.userData} /> : <div></div>
                }
                <hr className="mb-6 border-t" />
                <div className="text-center text-sm">
                  Already have an account?
                  <NavLink to='/publisher-login/' className="text-blue-600 hover:text-gray-800">Login</NavLink>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}