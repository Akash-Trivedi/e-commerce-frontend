/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render the single product preview on the homepage from the data recieved.
 * caller function: src/main/components/Main.js
 */

import React from 'react'

export default function ProductPreview(props) {
    return (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full" onClick={/*call the product page*/}>
            <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.category}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{props.title}</h2>
                <p class="mt-1">{props.price}</p>
            </div>
        </div>
    )
}
