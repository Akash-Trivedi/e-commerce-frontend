/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render the single product preview on the homepage from the data recieved.
 * caller function: src/main/components/Main.js
 */

import React from 'react'

export default function ProductPreview(props) {
    const product = props.product;
    function clicked() {

    }
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" onClick={clicked}>
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.company}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <p className="mt-1"><i>price: {product.price}</i></p>
            </div>
        </div>
    );

}
