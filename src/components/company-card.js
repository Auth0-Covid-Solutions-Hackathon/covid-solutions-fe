import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Card = (props) => {
    console.log(props, "props")
AOS.init()
    return (
        
      <div 
      data-aos="flip-down"
      data-aos-duration="1500"
      class="flex-wrap w-auto h-1/4 mr-10 ml-10 mt-6 border-b-2 border-logoblue lg:border-4 lg:rounded-lg lg:w-1/4 md:text-xl  ">
          <div class="flex w-full h-32 items-center justify-center mt-4 lg:h-32 ">
              <img alt="logo" class="h-32 w-2/4 lg:w-40 lg:h-full mt-6 lg:max-w-2xl  " src = {props.image} />     
          </div>
          <div class="flex w-full h-16 lg:h-3 mb-4 mt-4 justify-center items-end mt-3 lg:h-12 lg:mb-8 ">
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
  
