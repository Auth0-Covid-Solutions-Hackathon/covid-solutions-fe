import React from 'react';
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'


function Nav() {
    return (
      <div className="App">
        <nav class="flex h-22">
            <div class="flex justify-start items-center h-22 mt-3 w-20 md:w-1/4 text-2xl font-black font-serif underline cursor-default  ">
                <img class="h-20 mr-6 w-20" src={logo} alt="logo" ></img>
            </div> 
            <div  class="flex justify-center items-center mt-3 w-56 md:w-3/4 ">
                <a href="/">
                    <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold cursor-default  font-serif ">Covid Comprimise</h1>
                </a>
            </div>
            <div class="flex justify-end items-center mt-3 mr-4 w-1/4">
                <Link to="/register" class="flex border-solid border-4 border-logodark text-logodark h-16 md:w-full lg:w-40 items-center justify-center text-sm border-black text-black font-serif bg-logoblue hover:text-white hover:bg-blue-600">Register Company</Link>
            </div>
        </nav>

      </div>
    );
  }
  
  export default Nav;
  
