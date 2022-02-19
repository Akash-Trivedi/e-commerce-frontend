/**
 * author: akash trivedi
 * date-created: 15-feb-2022
 * usage: render all the components of the webpage
 * caller function: ecommerce-frontend/src/index.js
 */

import "./App.css";
import Header from "./main/components/Header";
import Main from "./main/components/Main";
import Footer from "./main/components/Footer";
import Register from "./publisher/components/Register"
import UpdateProfile from "./publisher/components/UpdateProfile"
import Product from "./main/components/Product";

function App() {
  const title = "E-Commerce Wesbite";
  const products = [
    {
      'id': 1,
      'name': 'TV Monitor',
      'company': 'LG',
      'price': 24500
    }, {
      'id': 2,
      'name': 'TV Monitor',
      'company': 'LG',
      'price': 24500
    },
  ];

  const tags = [
    { 'tagId': 1, 'tagName': 'Sports' },
    { 'tagId': 2, 'tagName': 'Electronics' },
    { 'tagId': 3, 'tagName': 'Cokking' },
    { 'tagId': 4, 'tagName': 'Clothing' },
  ];
  return (
    <>
      <Header title={title} />
      <Register />
      <Main products={products} tags={tags} />
      <Product tag={tags} />
      <Footer tags={tags} />
    </>
  );
}


export default App;
