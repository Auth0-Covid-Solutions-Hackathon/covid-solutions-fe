import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Card from './company-card.js'

function CompanyGrid(){
    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [distance, setDistance] = useState("");
    const [masks, setMasks] = useState("");
    const [home, setHome] = useState("");
    const [comments, setComments] = useState("");
    
        
    useEffect(() => {
        Axios
        .get('http://localhost:5000/company')
        .then(res => {
            console.log(res.data, "Success")
            setName(res.data.name)
            setCapacity(res.data.capacity)
            setDistance(res.data.distance)
            setMasks(res.data.masks)
            setHome(res.data.home)
            setComments(res.data.comments)
        })
        .catch(error =>{
            console.log(error, "error")
        })
    }, [])
    
        return(
            <div>
                <Card
                key={name} 
                capacity={capacity}
                distance={distance}
                masks={masks}
                home={home}
                comments={comments}
                />
  
            </div>
        );
    }

    export default CompanyGrid
    
