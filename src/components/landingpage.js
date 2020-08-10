import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Truck from '../images/truck.jpg'
import Here from '../images/here.png'
import {Link} from 'react-router-dom'

const Landing= (props) => {
    // console.log(props, "props")



AOS.init()
    return (
        
      <div class="mt-6 mr-4 ml-4 h-full lg:mr-64 lg:ml-64">
        <div class="flex justify-center h-full w-full">
            <div class=" m-0 w-full b lg:mr-56 lg:ml-56"> 
                <img src={Truck} alt="city-skyline" class="h-full w-full border-2 border-black rounded-full "/>
            </div>
        </div>

        <div class="flex-col lg:flex border-black h-auto">
            <div class="flex-col w-full justify-center mt-8 ">
                <h1 class="text-xl mb-2 lg:mb-8 md:text-3xl lg:text-3xl font-serif h-8 ">Safer Enviroments, Safer People</h1>
                <h2 class="flex justify-center ml-2 mr-2 text-sm mt-2 md:mt-8 md:text-xl lg:text-xl  ">The Coronavirus has affected everyone and everything since its arrival. Many governments, organizations and companies are doing the absolute best that they can do to contain the viurs and prevent it from taking many more countless lives. Unfortunately many are not trying to help and some are even trying to profit off of this crisis. Since we are at the start of a new decade we have an obligation to our future if we want it to get any better. Find and search for what comapnies you would like to support based on their COVID-19 guidelines and restrictions. </h2>
            </div>
            
            <div class="flex w-full justify-center mt-20 ">
                <Link to = "/companies" >
                    <img class="h-full w-full opacity-75 hover:opacity-100" alt="company-list" src={Here}></img></Link>

            </div>

        </div>
        
      </div>
    );
  }
  
  export default Landing;
  