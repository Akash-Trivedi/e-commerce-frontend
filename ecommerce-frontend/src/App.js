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

const APIROOTURL = 'http://127.0.0.1:8000/ecommerce/';

function App(props) {
  /**
   * render homepage
   */
  const [dataDictionary, updateDataDictionary] = React.useState({
    "tags": [],
    "products": []
  });

  const WEBSITETITLE = props.title;

  function setTags(jsonArray) {
    /**
     * assign the jsonArray value to tags key of dataDictionary,
     * using its returned function. which will inturn re-render the component.
     */
    updateDataDictionary(
      (prev) => {
        console.log(`dataDictionary -> `, prev);
        return {
          ...prev,
          "tags": jsonArray
        }
      }
    );
  }
  /**
   * useEffect runs only when the component inside which it reside is rendered. The dependency array is optional and is recomended
   */

  React.useEffect(() => {
    fetch(
      `${APIROOTURL}product/tags-all`,
      {
        method: 'GET',
        headers: {
          "Access-Control-Allow-Origin": ["localhost:8000", "127.0.0.1:8000"],
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(res => setTags(res))
      .catch(
        (error) => {
          console.log("error encountered was: ", error);
          // dataDictionary.tags=[];
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
