/**
 * author: akash trivedi
 * date created: 15-feb-2022
 * usage: render the top navigation bar for each page.
 * caller function: 
 */

import React from 'react';


export default function Header(props) {
    let loggedIn = true;
    // check if the user has logged in and then do the conditional rendering
    return (
        <header className="text-gray-200 body-font">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li>
                                <span className="material-icons-outlined">
                                    shopping_cart
                                </span>
                            </li>
                            <li>
                                <form className="d-flex container-fluid">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </li>
                            <li>
                                here goes the cart icon
                            </li>
                            <li>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>

                                {
                                    // loggedIn === true ? {'signup/login'} : {'show the profile icon'}
                                }
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}
