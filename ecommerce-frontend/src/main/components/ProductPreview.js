/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render the single product preview on the homepage from the data recieved.
 * caller function: src/main/components/Main.js
 */

import React from 'react';
import { NavLink } from 'react-router-dom';


export default function ProductPreview(props) {
  const product = props.product
  const newPrice = product.price - (product.price * (product.discount / 100))
  return (
    <div className="p-2 grid">
      <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-750 cursor-pointer">
        <NavLink to={`/product/${product.productId}/`} key={product.productId}>
          <div>
            <img alt="ecommerce" className="object-cover object-center w-full h-full" src="https://dummyimage.com/420x260" />
          </div>
          <div className="py-2 px-4 bg-white">
            <h3 className="text-md font-semibold capitalize text-gray-900">{product.companyName} {product.name + product.description}</h3>
          </div>
          <div className="py-2 px-4 bg-white">

            <h3 className="text-sm font-semibold text-black"><i>price: &nbsp;
              <strike className='text-red-700'>&#8377;{product.price}.00 &nbsp;</strike></i>
              <i className='text-lime-600'>&#8377;{newPrice}.00</i></h3>
          </div>
        </NavLink>
      </div>
    </div >
  );
}
