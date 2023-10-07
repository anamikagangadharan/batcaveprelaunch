import { useState } from "framer-motion";
import React from "react";

const Roughform = () => {

    const [formData,setFormData]=useState({
        name:"",
        email:""
    })

    const handleChange=()=>{
        setFormData({
            ...formData,
            [name]:value
        })
    }
  return (
    <div>
      <form action="">
        <input type="text"
         name="name" 
         id=""
         onChange={handleChange}
         value={formData.name}
        placeholder="name" />



        <input type="email"
         name="" id=""
          placeholder="email" 
          onChange={handleChange}
          value={formData.email} />
        
      </form>
    </div>
  );
};

export default Roughform;
