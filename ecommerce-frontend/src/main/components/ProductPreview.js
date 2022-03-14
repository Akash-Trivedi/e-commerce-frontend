/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render the single product preview on the homepage from the data recieved.
 * caller function: src/main/components/Main.js
 */

import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductPreview(props) {
    const product = props.product;
    const link = product.company + '/' + product.name + '/';
    console.log(product);
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to={`/product/${product.productId}/`} key={product.productId}>
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.company}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                    <p className="mt-1"><i>price: {product.price}</i></p>
                </div>
            </Link>
        </div>
    );

}
