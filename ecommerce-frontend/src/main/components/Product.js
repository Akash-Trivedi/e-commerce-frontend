/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render the product chosen from the the home page/any other page
 * caller function: ecommerce-frontend/src/main/components/ProductPreview.js
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';


function Star(props) {
  return (
    <svg fill={props.fill} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  );
}
function StarArray(props) {
  /**
   * custom made 
   */
  let { length, truthValue } = props;
  let mapper = [];
  for (let index = 0; index < length; index++) {
    (index < truthValue ? mapper.push('currentColor') : mapper.push('none'));
  }
  return (
    mapper.map((value) => {
      return <Star fill={value} />
    })
  );
}

export default function Product(props) {

  let [product, setProduct] = React.useState({});
  let { productId } = useParams();
  const newPrice = product.price - (product.price * (product.discount / 100))
  React.useEffect(() => {
    async function getProduct(id) {
      let response = await fetch(`${props.rooturl}product/${id}/`,
        {
          method: "GET",
          "Content-Type": "application/json"
        });
      response = response.json();
      return response;
    }
    let product = getProduct(productId)
      .then(res => setProduct(res))
      .catch(
        (error) => {
          console.log("error encountered in tags was: ", error);
        })
  }, []);

  return (
    <div>
      {<Header />}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-12 py-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 capitalize">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.companyName}
              </h1>
              <h2 className="text-gray-900 font-medium mb-1">{product.name}</h2>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {<StarArray length={5} truthValue={product.feedBackValue} />}
                  <span className="text-gray-600 ml-3">{product.totalFeedbacks} Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed"><strong>Description:</strong> {product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <i className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></i>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">{product.size}</div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-lime-700">&#8377;{newPrice}</span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

