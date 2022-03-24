/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render all the product preview on the homepage
 * caller function: ecommerce-frontend/src/App.js
 */

import React, { useContext } from "react";
import ProductPreview from "./ProductPreview";
import mainContext from "../context/mainContext";

function Main() {
  const products = useContext(mainContext)
  let [currentPage, setCurrentPage] = React.useState({})
  console.log('main component rendered');
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2">
        <div className="flex flex-wrap">
          {
            products.products.map((product) => {
              return < ProductPreview product={product} key={product.id} />
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Main;