/**
 * author: akash trivedi
 * date-created: 9-march-2022
 * functionality: test script to check the working of jwt
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react'

export default function TokenTest() {
  function sendJwt(event) {
    let output = document.getElementById("token");
    let url = "localhost:3000/token";
    fetch(url,
      {
        headers: {
        }
      }
    ).then(res => console.log(res))
      .catch(console.log("error encountered"))
  }
  return (
    <div>
      <button onClick={sendJwt}>Click me to see the JWT</button>
      <p id="token"></p>
    </div>
  )
}
