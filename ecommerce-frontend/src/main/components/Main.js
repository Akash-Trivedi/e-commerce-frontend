/**
 * author: akash trivedi
 * date-created: 16-feb-2022
 * usage: render all the product preview on the homepage
 * caller function: ecommerce-frontend/src/App.js
 */

import React from "react";
import ProductPreview from "./ProductPreview";

export default function Main(props) {
    const product = props.product;
    
    const productArray = product.map((product) => {
        <ProductPreview product={product} />
    });

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {
                        productArray
                    }
                </div>
            </div>
        </section>
    );
}
