/**
 * author: akash trivedi
 * date-created: 17-march-2022
 * functionality: render the new shop component
 * caller-function: ecommerce-frontend\src\publisher\components\Shops.js
 */
import React from 'react';

export default function NewShop(props) {
  // let userData=props.data;
  /**
   * this will fill the form with initial values, obatined after the login
   */

  let [shopData, updateShop] = React.useState({
    name: '',
    pincode: '',
    address: '',
  });

  function registerShop(event) {
    /**
     * 
     */
    event.preventDefault();
    async function updateDetails(data) {
      let response = await fetch(`http://127.0.0.1:8000/api/publisher/shop/add/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      response = await response.json();
      return response;
    }
    let status = updateDetails(shopData)
      .then((status) => console.log(status))
      .catch((error) => console.error("error is: " + error));
  }

  function handleChange(event) {
    updateShop((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    });
  }
  return (
    <div className="container my-8 block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <form onSubmit={registerShop}>
        <div className="form-group mb-6">
          <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='name' aria-describedby="emailHelp123" placeholder="Shop Name" value={shopData.name} />
        </div>
        <div className="form-group mb-6">
          <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='pincode'
            aria-describedby="emailHelp124" placeholder="Area Pincode" value={shopData.pincode} />
        </div>
        <div className="form-group mb-6">
          <textarea id="" cols="30" rows="2" onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='address'
            placeholder="Shop Address" value={shopData.address} ></textarea>
        </div>
        <button type='submit' className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium
           text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add</button>
      </form>
    </div>
  );
}
