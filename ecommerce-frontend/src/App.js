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

function App() {
  const title = "E-Commerce Wesbite";
  const data = "data";

  return (
    <>
      <Header title={title} />,
      <Main data={data} />
      <Footer />
    </>
  );
}

export default App;
