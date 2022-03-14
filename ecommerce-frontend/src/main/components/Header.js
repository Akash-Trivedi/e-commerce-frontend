/**
 * author: akash trivedi
 * date created: 15-feb-2022
 * usage: render the top navigation bar for each page.
 * caller function: ecommerce-frontend/src/App.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartRounded } from '@material-ui/icons'

// this component is the header of the webpage, which is also the navigation bar for the page
function Header(props) {
  let loggedIn = true;
  // check if the user has logged in and then do the conditional rendering
  return (
    <header className="text-gray-200 body-font">
      <nav className="navbar navbar-expand-lg navbar-light bg-gray-200">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/">V2L</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li>
                                <span className="material-icons-outlined">
                                    shopping_cart
                                </span>
                            </li> */}
              <li className=''>
                <form className="d-flex container-fluid">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-default" type="submit">Search</button>
                </form>
              </li>
              <li>
              </li>
            </ul>
            <Link to='customer/signin' className='text-black'>Sign-in /</Link>
            <Link to='customer/register' className='text-black'> Sign-up </Link>
            <Link to='customer/shopping-cart' className='text-black'>
              <ShoppingCartRounded />
            </Link>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header;