import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Card from './company-card.js'


function CompanyGrid(){
    const [companies, setCompanies] = useState([])
    
        
    useEffect(() => {
        Axios
        .get('http://localhost:5000/company')
        // .then(res => res.json())
        .then(res => {
            console.log(res.data, "Success")
            setCompanies(res.data)
           

        })
        .catch(error =>{
            console.log(error, "error")
        })
    }, [])
    
        return(
            <div>
                <div class="flex items-center justify-center h-15 mt-6 font-serif italic mr-10 ml-10 "> 
                    <h1 class="text-base border-b-2 border-black">Choose which companies you will support by their COVID-19 guidelines</h1>
                 </div>

            <div 
            class="flex-wrap lg:flex justify-center">
                
                 

                {companies.map(company => (
                     <Card
                key={company.name} 
                name={company.name}
                image={company.image}
                capacity={company.capacity}
                distance={company.distance}
                masks={company.masks}
                home={company.home}
                elder={company.elder}
                />
                ))}
               
  
            </div>
            
            </div>
        );
    }

    export default CompanyGrid
    
