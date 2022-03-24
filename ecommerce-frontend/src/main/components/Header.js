/**
 * author: akash trivedi
 * date created: 15-feb-2022
 * usage: render the top navigation bar for each page.
 * caller function: ecommerce-frontend/src/App.js
 */

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartRounded } from '@material-ui/icons'
import mainContext from '../context/mainContext';
import {
  Button
} from '@mui/material';

function Header() {
  const a = useContext(mainContext)
  return (
    <header className='text-white body-font'>
      <nav className='navbar navbar-expand-lg navbar-light bg-black'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand text-white p-2' to='/homepage'>V2L</NavLink>
          <NavLink className='navbar-brand text-white' to='/homepage'>Home</NavLink>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <form className='inline-flex container-fluid px-24'>
              <input className='form-control px-5' type='search' placeholder='Search' aria-label='Search' />
              <Button type='submit' color='primary' variant='contained' sx={{ml: 1}}>Search</Button>
            </form>
          </div>
          {
            a.userLoggedIn !== true ?
              (<>
                <NavLink to='/customer-login' className='py-2 px-2 lg:px-2 xl:px-2 inline-flex items-center justify-center text-center text-white text-base hover:bg-opacity-90 font-normal'>Login</NavLink>
                <NavLink to='/customer-signup' className='py-1 px-2 lg:px-2 xl:px-2 inline-flex items-center justify-center text-center text-white text-base bg-primary hover:bg-opacity-90 font-normal rounded-lg'> Sign-up </NavLink>
              </>
              ) :
              (
                <></>
              )
          }
          <NavLink to='/cart' className='py-1 px-2 lg:px-2 xl:px-2 inline-flex items-center justify-center text-center text-white text-base hover:bg-opacity-90 font-normal rounded-lg'>
            <ShoppingCartRounded />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header;