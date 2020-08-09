import React from 'react';

const Card = (props) => {
    console.log(props, "props")
    return (
      <div class="flex-wrap  h-auto mr-10 ml-10 mt-6 border-b-2 border-black lg:border-none md:mr-48 md:text-xl md:ml-48 lg:mb-16 ">
          <div class="flex w-full h-12 items-center justify-center mt-4 ">
              <img alt="logo" class="h-16 w-2/4 lg:w-64" src = {props.image} />     
          </div>
          <div class="flex w-full h-12 justify-center items-center mt-3">
              <h1 class="w-2/4 text-2xl italic underline md:text-3xl ">{props.name}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif " >
            <h1 class ="w-1/2 lg:w-56">Capacity Limit:</h1>
            <h1 class ="">{props.capacity ? "✅" : "🚫"}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif">
              <h1 class ="w-1/2 lg:w-56">Social Distancing:</h1>
              <h1>{props.distance ? "✅" : "🚫"}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif">
              <h1 class ="w-1/2 lg:w-56">Masks Required:</h1>
              <h1>{props.masks ? "✅" : "🚫"}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif">
              <h1 class ="w-1/2 lg:w-56">Work from Home:</h1>
              <h1>{props.home ? "✅" : "🚫"}</h1> 
          </div>
          <div class="flex w-full h-12 items-center justify-center font-serif mb-8">
              <h1 class ="w-1/2 lg:w-56">Elderly Hours:</h1>
              <h1>{props.elder ? "✅" : "🚫"}</h1> 
          </div>
        
      </div>
    );
  }
  
  export default Card;
  
