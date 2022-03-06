/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render all the product preview on the homepage
 * caller function: ecommerce-frontend/src/App.js
 */

import React from "react";
import ProductPreview from "./ProductPreview";
import TagMenu from "./TagMenu";



// this component is the block between header and the footer.
function Main(props) {

  const productList = props.productList;
  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center space-x-1 space-y-2">
          {
            props.tagList.map((tag) => {
              return <TagMenu tag={tag} key={tag.tagId} />
            })
          }
        </div>
        <div className="flex flex-wrap -m-4">
          {
            productList.map((product) => {
              return < ProductPreview product={product} key={product.id} />
            })
          }
        </div>
      </div>

      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item"><a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#">1</a></li>
            <li className="page-item active"><a
              className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
              href="#">2 <span className="visually-hidden">(current)</span></a></li>
            <li className="page-item"><a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#">3</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Main;