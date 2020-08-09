import React, { useState } from "react";
import axios from "axios";



const Register = (props) => {

    const [company, setCompany] = useState({
        name: '',
        image: '',
        capacity: '',
        distance: '',
        masks: '',
        home: '',
        elder: ''
    })

    const handleChange = e => {
        setCompany(
          {
            ...company,
            [e.target.name]: e.target.value,

          }
        )
      }


      const onSubmit = e =>{
        e.preventDefault()
        console.log(company)
        axios
        .post('http://localhost:5000/company', company)
        .then(res => {
            console.log(res, "GOT EM")
            props.history.push('/')
        })
        .catch(err => alert("Submission did not go through."))
    }



    console.log(props, "props")
    return (
            <div class="h-screen">
                <div class="flex mt-8 justify-center font-bold">
                    <h1>Register Your Company</h1>
                </div>

                <form class="flex-col ml-10 mr-10 h-64 mt-4" onSubmit={onSubmit}>
                    <div class="flex-wrap h-20 w-full justify-center items-center">
                        <label class="w-full">Company Name </label>
                        <input class="w-full border-2 p-1 border-gray-300 mt-2" type='text' name='name' placeholder='Company name' onChange={handleChange} value={company.name} required />
                    </div>
                    <div class="flex-wrap h-20 w-full justify-center items-center">
                        <label class="w-full">Company Logo </label>
                        <input class="w-full border-2 p-1 border-gray-300 mt-2" type='text' name='image' placeholder='https://i.imgur.com/j2QcJAu.jpeg' onChange={handleChange} value={company.image} />
                    </div>
                    <div class="flex-col h-20 w-full justify-center items-center mt-4">
                        <label class="flex justify-center sw-full">Capacity Restrictions</label>
                            <select class="w-32 border-2 mt-4" value={company.capacity} onChange={handleChange}>
                                <option>Choose One</option>
                                <option value="true" >✅</option>
                                <option value="false">🚫</option>

                             </select>                                       
                    </div>
                    <div class="flex-col h-20 w-full justify-center items-center mt-4">
                        <label class="flex justify-center sw-full">Social Distancing</label>
                            <select class="w-32 border-2 mt-4" value={company.distance} onChange={handleChange}>
                                <option>Choose One</option>
                                <option value="true"> ✅</option>
                                <option value="false">🚫</option>
                             </select>                                       
                    </div>
                    <div class="flex-col h-20 w-full justify-center items-center mt-4">
                        <label class="flex justify-center sw-full">Masks required</label>
                            <select class="w-32 border-2 mt-4" value={company.masks} onChange={handleChange}>
                                <option>Choose One</option>
                                <option value="true">✅</option>
                                <option value="false">🚫</option>

                             </select>                                       
                    </div>
                    <div class="flex-col h-20 w-full justify-center items-center mt-4">
                        <label class="flex justify-center sw-full">Work from Home</label>
                            <select class="w-32 border-2 mt-4" value={company.home} onChange={handleChange}>
                                <option>Choose One</option>
                                <option value="true">✅</option>
                                <option value="false">🚫</option>

                             </select>                                       
                    </div>
                    <div class="flex-col h-20 w-full justify-center items-center mt-4">
                        <label class="flex justify-center sw-full">Elderly Hours</label>
                            <select class="w-32 border-2 mt-4" value={company.elder} onChange={handleChange}>
                                <option>Choose One</option>
                                <option value="true">✅</option>
                                <option value="false">🚫</option>

                             </select>                                       
                    </div>
                    <div class="mt-6 ">
                        <button type="submit" class="border-2 border-black p-2">Submit!</button>
                    </div>
                    
                

                </form>


            </div>
        
    );
  }
  
  export default Register;