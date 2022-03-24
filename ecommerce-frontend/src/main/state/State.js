import MainContext from "../context/mainContext";
import React from "react";

function MainState(props) {
  const [dataDictionary, updateDataDictionary] = React.useState({
    tags: [],
    products: [],
    cart: [],
    userLoggedIn: false,
    user: null
  });

  function setProducts(jsonArray) {
    updateDataDictionary((prev) => { return { ...prev, products: jsonArray } });
  }

  function setTags(jsonArray) { updateDataDictionary((prev) => { return { ...prev, tags: jsonArray } }); }

  React.useEffect(() => {
    async function getProducts(pincode) {
      let response = await fetch(`http://localhost:8000/api/product/list-all/${pincode}/`, {
        method: "GET",
        "Content-Type": "application/json"
      });
      response = await response.json();
      return response;
    }
    async function getTags() {
      let response = await fetch(`http://localhost:8000/api/product/tags/list-all/`,
        {
          method: "GET",
          "Content-Type": "application/json"
        });
      response = response.json();
      return response;
    }
    let tags = getTags()
    tags.then(res => setTags(res))
    tags.catch(
      (error) => {
        console.log("error encountered in tags was: ", error);
      })
    let products = getProducts(208012)
    products.then(res => setProducts(res))
    products.catch(
      (error) => {
        console.log("error encountered in products was: ", error);
      })
  }, []);

  return (
    <MainContext.Provider value={dataDictionary}>
      {props.children}
    </MainContext.Provider>
  )
}

export default MainState;