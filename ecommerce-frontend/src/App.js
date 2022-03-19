/**
 * author: akash trivedi
 * date-created: 15-feb-2022
 * functionality: render all the components of the webpage, api calls to get the data
 * caller function: ecommerce-frontend/src/index.js
 */

import "./App.css";
import React from "react";

// custom components
import Header from "./main/components/Header";
import Main from "./main/components/Main";
import Footer from "./main/components/Footer";


function App(props) {
  /**
   * render homepage
   */
  const [dataDictionary, updateDataDictionary] = React.useState({
    "tags": [],
    "products": []
  });

  const WEBSITETITLE = props.title;

  function setProducts(jsonArray) {
    /**
     * assign the jsonArray value to products key of dataDictionary,
     * using its returned function. which will inturn re-render the component.
     */
    updateDataDictionary((prev) => {return {...prev,"products": jsonArray}});
  }

  function setTags(jsonArray) {
    /**
     * assign the jsonArray value to tags key of dataDictionary,
     * using its returned function. which will inturn re-render the component.
     */
    updateDataDictionary((prev) => {return {...prev,"tags": jsonArray}});
  }
  /**
   * useEffect runs only when the component inside which it reside is rendered. The dependency array is optional and is recomended
   */

  React.useEffect(() => {
    async function getProducts(pincode) {
      let response = await fetch(`${props.rooturl}product/list-all/${pincode}/`,
        {
          method: "GET",
          "Content-Type": "application/json"
        });
      response = response.json();
      return response;
    }
    async function getTags() {
      let response = await fetch(`${props.rooturl}product/tags/list-all/`,
        {
          method: "GET",
          "Content-Type": "application/json"
        });
      response = response.json();
      return response;
    }
    let tags = getTags()
      .then(res => setTags(res))
      .catch(
        (error) => {
          console.log("error encountered in tags was: ", error);
        })
    let products = getProducts(208012)
      .then(res => setProducts(res))
      .catch(
        (error) => {
          console.log("error encountered in products was: ", error);
        })
  }, []);

  return (
    <>
      <Header title={WEBSITETITLE} />
      <Main productList={dataDictionary.products} tagList={dataDictionary.tags} />
      <Footer tagList={dataDictionary.tags} />
    </>
  );
}
export default App;