/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render all the product preview on the homepage
 * caller function: ecommerce-frontend/src/App.js
 */

import React, { useContext } from 'react';
import ProductPreview from './ProductPreview';
import ApplicationContext from '../context/ApplicationContext';

export default function Homepage() {
  const stateObject = useContext(ApplicationContext)
  let [currentPage, setCurrentPage] = React.useState(0)
  console.log('main component rendered');
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-2'>
        <div className='flex flex-wrap'>
          {
            stateObject.appData.products.length === 0 ? true : (stateObject.appData.products.map((product) => {
              return < ProductPreview product={product} key={product.id} />
            }))
          }
        </div>
      </div>
    </section>
  );
}