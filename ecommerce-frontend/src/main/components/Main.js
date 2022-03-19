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
  let [currentPage, setCurrentPage] = React.useState({})
  const productList = props.productList;
  return (
    <section className="text-gray-600 body-font">
      <div className="px-2 py-2 mx-auto">
        <div className="flex flex-wrap justify-center space-x-1 space-y-2">
          {
            props.tagList.map((tag) => {
              return <TagMenu tag={tag} key={tag.tagId} />
            })
          }
        </div>
      </div>

      <div className="container px-2">
        <div className="flex flex-wrap">
          {
            productList.map((product) => {
              return < ProductPreview product={product} key={product.id} />
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Main;