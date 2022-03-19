/**
 * author: akash trivedi
 * date-created: 17-march-2022
 * functionality: renders new product form
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react'

export default function NewProduct() {
  let stocks = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  let discounts = [0, 5, 10, 12, 15, 17, 20, 22, 25, 33]
  let [product, updateProduct] = React.useState(
    {
      name: 'headphones-5',
      companyName: 'JBL',
      description: 'wireless headphones',
      stock: '10',
      price: '1750',
      size: '-',
      color: 'mint',
      discount: '10',
      edition: 'basic',
    }
  )
  function registerProduct(event) {
    /**
     * 
     */
    event.preventDefault();
    async function updateProduct(data) {
      let response = await fetch(`http://localhost:8000/api/publisher/product/add/`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      response = await response.json();
      return response;
    }
    // parsing the data of post request to another data type is not important of the data insertion is handled by some other technology like ORM.
    let response = updateProduct(product)
      .then((response) => console.log(response))
      .catch((error) => console.error("error is: " + error));
  }

  function handleChange(event) {
    updateProduct((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <div className="container my-8 block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <h3 className="text-2xl text-center mb-6">Register new Product !</h3>

      <form onSubmit={registerProduct}>
        <div className="form-group mb-6">
          <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='name' aria-describedby="emailHelp123" placeholder="Product Name" value={product.name} />
        </div>
        <div className="form-group mb-6">
          <input onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='companyName'
            aria-describedby="emailHelp124" placeholder="Company Name" value={product.companyName} />
        </div>
        <div className="form-group mb-6">
          <textarea id="" cols="30" rows="2" onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='description'
            placeholder="Description" value={product.description} ></textarea>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="form-group mb-2">
            <input type="number" min='50' className='form-control' placeholder='Price' onChange={handleChange} name="price" />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="stock">Stock:</label>
            <select name="stock" id="stock" onChange={handleChange} className='px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>
              {
                stocks.map(value => {
                  return <option value={value}>{value}</option>
                })
              }
            </select>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="discount">Discount:</label>
            <select name="discount" id="discount" onChange={handleChange} className='px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>
              {
                discounts.map(value => {
                  return <option value={value}>{value}</option>
                })
              }
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="form-group mb-2">
            <input type="text" min='50' className='form-control' placeholder='Color' onChange={handleChange} name="color" />
          </div>
          <div className="form-group mb-2">
            <input type="text" min='50' className='form-control' placeholder='Edition' onChange={handleChange} name="edition" />
          </div>
          <div className="form-group mb-2">
            <input type="text" min='50' className='form-control' placeholder='Size' onChange={handleChange} name="size" />
          </div>
        </div>
        <button className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium
          text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add</button>
      </form>
    </div>
  )
}
