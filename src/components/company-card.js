import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Card = (props) => {
    console.log(props, "props")
AOS.init()
    return (
        
      <div 
      data-aos="flip-down"
      data-aos-duration="3000"
      class="flex-wrap w-auto h-auto mr-10 ml-10 mt-6 border-b-2 border-logoblue lg:w-1/4 lg:border-4 lg:rounded-lg md:text-xl lg:bg-gray-200 ">
          <div class="flex w-full h-12 items-center justify-center mt-4  ">
              <img alt="logo" class="h-16 w-2/4 lg:w-40 mt-6" src = {props.image} />     
          </div>
          <div class="flex w-full h-16 lg:h-32 mb-4 mt-4 justify-center items-center mt-3">
              <h1 class="w-2/4 text-2xl italic underline md:text-3xl text-logodark ">{props.name}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif text-logodark " >
            <h1 class ="w-1/2 lg:w-56">Capacity Limit:</h1>
            <h1 class ="">{props.capacity ? "✅" : "🚫"}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif text-logodark ">
              <h1 class ="w-1/2 lg:w-56">Social Distancing:</h1>
              <h1>{props.distance ? "✅" : "🚫"}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif text-logodark">
              <h1 class ="w-1/2 lg:w-56">Masks Required:</h1>
              <h1>{props.masks ? "✅" : "🚫"}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif text-logodark">
              <h1 class ="w-1/2 lg:w-56">Work from Home:</h1>
              <h1>{props.home ? "✅" : "🚫"}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif mb-8 text-logodark">
              <h1 class ="w-1/2 lg:w-56">Elderly Hours:</h1>
              <h1>{props.elder ? "✅" : "🚫"}</h1> 
          </div>
        
      </div>
    );
  }
  
  export default Card;
  
