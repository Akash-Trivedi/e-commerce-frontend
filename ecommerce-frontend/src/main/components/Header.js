/**
 * author: akash trivedi
 * date created: 15-feb-2022
 * usage: render the top navigation bar for each page.
 * caller function: ecommerce-frontend/src/App.js
 */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartRounded } from '@material-ui/icons'

// this component is the header of the webpage, which is also the navigation bar for the page
function Header(props) {
  let loggedIn = true;
  // check if the user has logged in and then do the conditional rendering
  return (
    <header className="text-white body-font">
      <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">V2L</NavLink>
          <NavLink className="navbar-brand text-white" to="/">Home</NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="inline-flex container-fluid px-24">
              <input className="form-control px-5" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-default text-white" type="submit">Search</button>
            </form>
          </div>
          <NavLink to='/customer-login' className='py-2 px-2 lg:px-2 xl:px-2 inline-flex items-center justify-center text-center text-white text-base hover:bg-opacity-90 font-normal'>Sign-in</NavLink>
          <NavLink to='/customer-signup' className='py-1 px-2 lg:px-2 xl:px-2 inline-flex items-center justify-center text-center text-white text-base bg-success hover:bg-opacity-90 font-normal rounded-lg'> Sign-up </NavLink>
          <NavLink to='/cart' className='py-1 px-2 lg:px-2 xl:px-2 inline-flex items-center justify-center text-center text-white text-base hover:bg-opacity-90 font-normal rounded-lg'>
            <ShoppingCartRounded />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header;