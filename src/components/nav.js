import React from 'react';
import logo from '../images/logo.svg'

function Nav() {
    return (
      <div className="App">
        <nav class="flex h-22">
            <div class="flex justify-start items-center h-22 mt-3 w-20 md:w-1/4 text-2xl font-black font-serif underline cursor-default  ">
                <img class="h-20 mr-6 w-20" src={logo} alt="logo" ></img>
            </div> 
            <div  class="flex justify-center items-center mt-3 w-56 md:w-3/4 ">
                <a href="/">
                    <h1 class="hover:text-blue-600 underline text-2xl md:text-4xl lg:text-5xl font-bold cursor-default  font-serif ">Covid Comprimise</h1>
                </a>
            </div>
            <div class="flex justify-end items-center mt-3 mr-4 w-1/4">
                <a href="/" class="flex border-solid border-4 h-16 md:w-full lg:w-40 items-center justify-center text-sm border-black text-black font-serif bg-logoblue hover:bg-blue-600">Register Company</a>
            </div>
        </nav>


        <div class="flex items-center justify-center h-15 mt-6 font-serif italic mr-10 ml-10 "> 
            <h1 class="text-base border-b-2 border-black">Choose which companies you will support by their COVID-19 guidelines</h1>
        </div>
      </div>
    );
  }
  
  export default Nav;
  
