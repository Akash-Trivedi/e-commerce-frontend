/**
 * author: akash trivedi
 * date-created: 6-march-2022
 * functionality: render the page for password creation
 * caller-function: ecommerce-frontend\src\publisher\components\Register.js
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TextField, Button, FormGroup, FormControlLabel, Checkbox
} from '@mui/material'


export default function CreatePassword(props) {
  let navigate = useNavigate()
  let userFinalData = props.data;
  let data = { "password1": "", "password2": "" };
  let style = { display: "none", color: "red" };

  function signUp(event) {
    console.log("signup called");

    async function sendUserData(data) {

      console.log("waiting for fetch to complete");
      try {
        let response = await fetch('http://127.0.0.1:8000/api/publisher/signup/', {
          method: "POST",
          type: "cors",
          body: JSON.stringify(userFinalData),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        });
        response = await response.json();
        console.log("fetch completed");
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    let token = sendUserData(userFinalData);
    token.then(token => {
      console.log(token)
    })
    token.catch(err => console.log(err))
  }

  function showContent(event) {
    var inputBox1 = document.getElementById("password1");
    (inputBox1.type === 'password' ? inputBox1.type = 'text' : inputBox1.type = 'password')
    document.getElementById("password2").type = inputBox1.type;
  }

  function isPasswordEqual(event) {
    let a = document.getElementById('password-match');

    if (document.getElementById("password2").value.length !== 0) {
      if (data.password1.localeCompare(data.password2) == 0) {
        document.getElementById("confirm-otp").disabled = false;
        document.getElementById("signup").addEventListener("click", signUp);
        a.style.display = 'none';
      } else {
        a.style.display = 'inline-block';
      }
    } else {
      a.style.display = 'none';
    }
  }

  function updateData(event) {
    userFinalData.password = event.target.value;
    data[event.target.id] = event.target.value;
    isPasswordEqual(event);
  }

  return (
    <div>
      {/* 2 box password password with show password*/}
      <br /> <br />
      <TextField name='password1' id='password1' label="password" type="password" onChange={updateData} />
      <br /> <br />
      <TextField name='password2' id='password2' label="confirm password" type="password" onChange={updateData} />
      <br /> <br />
      <span id='password-match' className="mb-2 text-sm font-bold text-gray-700" style={style}>passwords does not match</span>
      <br /> <br />
      <FormControlLabel id="showPassword" control={<Checkbox defaultChecked />} onChange={showContent} label="show password" />
      <br /> <br />
      <Button id="signup" type='button' variant='contained' color='primary'>signup</Button>
      <br /> <br />
    </div>
  )
}