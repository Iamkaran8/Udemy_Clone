import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';

import logo from '../Assets/logo-udemy.svg';
import globe_white from '../Assets/globe-white.png';
import cart from '../Assets/cart-icon.svg';
import globe from '../Assets/globe.svg';
import logo_2 from '../Assets/logo-udemy-inverted.svg';
import '../Styles/Routing.css'
import CourseDetails from './CourseDetails';


const Routing = () => {


    return (

        <BrowserRouter>
             <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-box ">
                <div className="container">
                    <Link className="navbar-brand logo " to='/'><img  className='pb-2' src={logo} alt='logo' /></Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item my-2">
                            <form className="d-flex justify-content-center ">
                                <input className="form-control me-2 my-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn  SignIn-btn search-btn my-2" type="submit">Search</button>
                            </form>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-center my-2" aria-current="page" to=''>Teach on Udemy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-center my-2" aria-current="page" to=''>Udemy Business</Link>

                            </li>
                            <li className="nav-item my-2">
                                <Link className="nav-link text-center" href="#" role="button" >
                                    <img className='cart-icon ' src={cart} alt='cart-icon' />
                                </Link>
                            </li>
                            <li className="nav-item text-center">
                                <Link className="btn LogIn-btn my-2" to='' >Log in</Link>

                            </li>
                            <li className="nav-item text-center">

                                <Link className="btn SignIn-btn my-2" to=''>Sign up</Link>
                            </li>
                            <li className="nav-item text-center my-2">
                                <Link className="btn LogIn-btn" to='' >
                                    <img className='globe' src={globe} alt='cart-icon' />
                                </Link>

                            </li>

                        </ul>

                    </div>

                </div>
            </nav> 

            <Routes>
                <Route exact path='/' element={<Home />} ></Route>
                <Route exact path='/:id' element={<CourseDetails/>}  ></Route>
                <Route exact path='*' element={<NotFound />} ></Route>
            </Routes>
            <footer className='footer'>
                <div className='row p-5' >
                    <div className='col-md-3 p-2'>
                       <a href='#'>  <h6>Udemy Business</h6></a>
                       <a href='#'> <h6>Teach on Udemy</h6></a>
                       <a href='#'> <h6>Get The App</h6></a>
                       <a href='#'> <h6>About Us</h6></a>
                       <a href='#'> <h6>Contact Us</h6></a>
                    </div>
                    <div className='col-md-3 p-2'>
                       <a href='#'>  <h6>Careers</h6></a>
                       <a href='#'> <h6>Blogs</h6></a>
                       <a href='#'> <h6>Help and Support</h6></a>
                       <a href='#'> <h6>Affiliate</h6></a>
                       <a href='#'> <h6>Investors</h6></a>
                    </div>
                    <div className='col-md-3 p-2'>
                       <a href='#'>  <h6>Terms</h6></a>
                       <a href='#'> <h6>Privacy policy</h6></a>
                       <a href='#'> <h6>Cookies</h6></a>
                       <a href='#'> <h6>Site map</h6></a>
                       <a href='#'> <h6>Accessibility statement</h6></a>
                    </div>
                    <div className='col-md-3 text-end Eng-btn-row p-2'>
                    <button className='btn Eng-btn'><img src={globe_white} alt="globe"/>English</button>
                    </div>
                </div>
                <div className='row footer-row-two  px-5 align-items-center'>
                    <div className='col'><img src={logo_2} alt='Logo'/></div>
                    <div className='col text-end '><h2 className=''>© 2024 Udemy, Inc.</h2></div>
                </div>
            </footer>

        </BrowserRouter>
    )

}

export default Routing;