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
import {
  TextField, Button
} from '@mui/material';

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
    async function getOtp(contactNumber) {
      let response = await fetch(`http://127.0.0.1:8000/api/otp/${contactNumber}/`)
      response = await response.json()
      return response
    }

    let response = getOtp(formData.userData.username)
    response.then(response => {
      console.log(response);
      if (response.status === 409) {
        alert('user already exists')
      } else {
        updateForm(prev => {
          if (response.status === 200) {
            return { ...prev, otp: response.otpFromServer, otpSent: true }
          }
        })
      }
    })
    response.catch(err => console.log(err))

  }

  function confirmOtp() {
    let userOtp = document.getElementById('otp').value
    if ((userOtp).localeCompare(String(formData.otp)) == 0) {
      renderPasswordForm(true)
    } else {
      alert("wrong otp, please try again")
    }
  }

  function checkOtpLength(event) {
    let otp = '^[1-9]{1}[0-9]{5}'
    let otpLenght = document.getElementById('otp').value.length
    if (otpLenght !== 6) {
      alert('Invalid Otp')
    } else{
      confirmOtp()
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
                  <TextField name='contact' label="Contact" type="text" onChange={checkContactLength} />
                  <br />
                  <br />
                  {
                    formData.otpSent === false ?
                      (<Button id="send-otp" variant='contained' color='primary'>send otp</Button>)
                      :
                      (<div>
                        <TextField id='otp' label="otp" type="text" />
                        <br /> <br />
                        <Button id="confirm-otp" variant='contained' color='primary' onClick={checkOtpLength}>confirm otp</Button>
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
