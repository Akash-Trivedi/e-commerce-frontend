/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render the product chosen from the the home page/any other page
 * caller function: ecommerce-frontend/src/main/components/ProductPreview.js
 */

import React from 'react';
import { useParams } from 'react-router-dom';


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
    product.then(res => setProduct(res))
    product.catch(
      (error) => {
        console.log("error encountered in tags was: ", error);
      })
    //   no-lone-blocks
  }, []);

  return (
    <div>
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

{/* <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
        <div class="flex mb-4">
          <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Color</span>
          <span class="ml-auto text-gray-900">Blue</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Size</span>
          <span class="ml-auto text-gray-900">Medium</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">4</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
    </div>
  </div>
</section> */}