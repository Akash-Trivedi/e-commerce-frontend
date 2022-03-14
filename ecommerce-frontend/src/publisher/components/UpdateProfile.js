/**
 * author: akash trivedi
 * date-created: 10-march-2022
 * functionality: render the page for updating the details of the publisher
 * caller-function: ecommerce-frontend\src\main\components\Header.js
 */
import React from 'react';

function UpdateProfile(props) {
  // let userData=props.data;
  /**
   * this will fill the form with initial values, obatined after the login
   */
  
  let [formData, updateForm] = React.useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "dob": "",
    "address": "",
    "pincode": ""
  });

  function updateProfile(event) {
    /**
     * 
     */
    event.preventDefault();
    async function updateDetails(data) {
      let response = await fetch(`http://localhost:8000/api/publisher/publisher-update-profile/`)
      response = await response.json();
      return response;
    }
    let status = updateDetails(formData)
      .then((status) => console.log(status))
      .catch((error) => console.error("error is: " + error));
  }

  function handleChange(event) {
    updateForm((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    });
  }
  return (
    <div className="container my-8 block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <form onSubmit={updateProfile}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='firstName' aria-describedby="emailHelp123" placeholder="First name" value={formData.firstName} />
          </div>
          <div className="form-group mb-6">
            <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='lastName'
              aria-describedby="emailHelp124" placeholder="Last name" value={formData.lastName} />
          </div>
        </div>
        <div className="form-group mb-6">
          <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='address'
            placeholder="Email address" value={formData.address} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='dob' aria-describedby="emailHelp123" placeholder="Date of birth" value={formData.dob} />
          </div>
          <div className="form-group mb-6">
            <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='pincode'
              aria-describedby="emailHelp124" placeholder="Pincode" value={formData.pincode} />
          </div>
        </div>
        <div className="form-group mb-6">
          <textarea id="" cols="30" rows="2" onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='address'
            placeholder="Address" value={formData.email} ></textarea>
        </div>
        <button className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium
          text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
