import React from 'react';

const Card = (props) => {
    return (
      <div class="flex-wrap border-solid border-2 h-auto mr-10 ml-10 mt-2">
          <div class="flex w-full h-10 justify-center">
              <h1>{props.name}</h1>      
          </div>
          <div class="flex w-full h-10 items-center justify-start">
            <h1>Capacity Limit:</h1>
            <h1>{props.capacity}</h1> 
          </div>
          <div class="flex w-full h-10 items-center justify-start">
              <h1>Social Distancing:</h1>
              <h1>{props.distance}</h1> 
          </div>
          <div class="flex w-full h-10 items-center justify-start">
              <h1>Masks Required:</h1>
              <h1>{props.masks}</h1> 
          </div>
          <div class="flex w-full h-10 items-center justify-start">
              <h1>Work from Home:</h1>
              <h1>{props.home}</h1> 
          </div>
          <div class="flex w-full h-10 items-center justify-start">
              <h1>Slogan:</h1>
              <h1>{props.comments}</h1> 
          </div>
        
      </div>
    );
  }
  
  export default Card;
  
