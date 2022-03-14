/**
 * author: akash trivedi
 * date-created: 13-march-2022
 * functionality: custom address selection for dilevery
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react'

function AddressSelection() {

  function printFinalForm() {
    /**
     * prints the contents of the form data
     */
  }

  function getLocation(event) {
    /**
     * 
     */
    event.preventDefault();
    let pincode = 208012;
    async function getLocationDetails(pincode) {
      let response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`, {
        mode: 'no-cors',
        headers: {
          'Accept':'text/html,application/xhtml+xml',
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Length': '2000',
          'Content-Type': 'application/json'
        }
      });
      return response;
    }
    getLocationDetails(pincode)
      .then(res => console.log(res))
      .catch(error => console.log("Error ocured: " + error));
  }
  return (
    <div className='container my-8'>
      <form onSubmit={getLocation} method="get">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button type='submit'>Click me to get location</button>
      </form>
    </div>
  )
}

export default AddressSelection;