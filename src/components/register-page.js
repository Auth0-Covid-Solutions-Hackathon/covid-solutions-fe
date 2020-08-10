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
        console.log(e.target.name, "name")
        console.log(e.target.value, "TARGET")
        setCompany(
          {
            ...company,
            [e.target.name]: e.target.value,
            
          }
        )
      }

      


      
      const onSubmit = e =>{
        e.preventDefault()
        console.log(company, "COMPAny")
        axios
        .post('https://covid-comprimise.herokuapp.com/company', company)
        .then(res => {
            console.log(res, "GOT EM")
            props.history.push('/companies')
        })
        .catch(err => alert("Submission did not go through."))
    }



    console.log(props, "props")
    return (
            <div class="h-screen md:h-full">
                <div class="flex mt-8 justify-center font-bold">
                    <h1 class="text-md lg:text-3xl">Register Your Company</h1>
                </div>

                <form class="flex-col lg:flex-wrap ml-10 mr-10 h-64 mt-4" onSubmit={onSubmit}>
                    <div class="flex-wrap h-20 w-full justify-center items-center">
                        <label class="w-full text-xl">Company Name </label>
                        <input class="w-full lg:w-64 md:w-64 border-2 p-1 border-gray-300 mt-2" type='text' name='name' placeholder='Company name' onChange={handleChange} value={company.name} required />
                    </div>
                    <div class="flex-wrap h-20 w-full justify-center items-center mb-4">
                        <label class="w-full text-xl">Company Logo </label>
                        <input class="w-full lg:w-64 md:w-64 border-2 p-1 border-gray-300 mt-2" type='text' name='image' placeholder='https://i.imgur.com/j2QcJAu.jpeg' onChange={handleChange} value={company.image} />
                    </div>
                    
                    <div class=" flex-row lg:flex lg:h-56 lg:pl-64 lg:pr-64 md:flex md:h-56  md:pl-20 md:pr-20 justify-center">   
                        <div class="flex-auto lg:flex w-auto lg:w-1/4 md:flex md:w-full md:p-1  justify-center">

                            <div class="flex-col h-20 w-full justify-center items-center mt-2 lg:mt-6">
                                <label class="flex justify-center sw-full text-md lg:text-xl">Capacity Restrictions</label>
                                
                                <div className="radio" class="flex-wrap">
                                    <label>
                                        <input class=" w-12 mt-2" type="radio" value="true" name="capacity" onChange={handleChange}/>
                                            ✅
                                    </label>
                                </div>

                                <div>
                                    <label class="w-1/2">
                                        <input class="w-12 mt-2" type="radio" value="false" name="capacity" onChange={handleChange} />
                                        🚫
                                    </label>
                                
                                </div>                                                        
                            </div>

                            <div class="flex-col h-20 w-full justify-center items-center mt-2 lg:mt-6">
                                <label class="flex justify-center sw-full text-md lg:text-xl">Social Distancing</label>
                                
                                <div className="radio">
                                    <label>
                                        <input class=" w-12 mt-2" type="radio" value="true" name="distance" onChange={handleChange} />
                                            ✅
                                    </label>
                                </div>

                                <div>
                                    <label class="w-1/2">
                                        <input class="w-12 mt-2" type="radio" value="false" name="distance" onChange={handleChange} />
                                        🚫
                                    </label>
                                
                                </div>                                                        
                            </div>
                            <div class="flex-col h-20 w-full justify-center items-center mt-2 lg:mt-6">
                                <label class="flex justify-center sw-full text-md lg:text-xl">Mask Restrictions</label>
                                
                                <div className="radio">
                                    <label>
                                        <input class=" w-12 mt-2" type="radio" value="true" name="masks" onChange={handleChange}/>
                                            ✅
                                    </label>
                                </div>

                                <div>
                                    <label class="w-1/2">
                                        <input class="w-12 mt-2" type="radio" value="false" name="masks" onChange={handleChange} />
                                        🚫
                                    </label>
                                
                                </div>                                                        
                            </div>

                            <div class="flex-col h-20 w-full justify-center items-center mt-2 lg:mt-6">
                                <label class="flex justify-center sw-full text-md lg:text-xl">Work from Home</label>
                                
                                <div className="radio">
                                    <label>
                                        <input class=" w-12 mt-2" type="radio" value="true" name="home" onChange={handleChange} />
                                            ✅
                                    </label>
                                </div>

                                <div>
                                    <label class="w-1/2">
                                        <input class="w-12 mt-2" type="radio" value="false" name="home" onChange={handleChange} />
                                        🚫
                                    </label>
                                
                                </div>                                                        
                            </div>
                            <div class="flex-col h-20 w-full justify-center items-center mt-2 md:mt-6 lg:mt-6">
                                <label class="flex justify-center sw-full text-md mb-0 md:mb-2 lg:text-xl">Elder Hours</label>
                                
                                <div className="radio">
                                    <label>
                                        <input class=" w-12 mt-2" type="radio" value="true" name="elder" onChange={handleChange} />
                                            ✅
                                    </label>
                                </div>

                                <div>
                                    <label class="w-1/2">
                                        <input class="w-12 mt-2" type="radio" value="false" name="elder" onChange={handleChange} />
                                        🚫
                                    </label>
                                
                                </div>
                        </div>
                    </div>                                                        
                    </div>


                    <div class="mt-12 ml-2 lg:mt-20">
                        <button type="submit" class="border-2 border-black p-2">Submit!</button>
                    </div>
                    
                

                </form>


            </div>
        
    );
  }
  
  export default Register;