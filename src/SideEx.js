import React, { useState } from 'react'

const SideEx = () => {
    const [first,setFirst]=useState('')
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");

  return (

    
    <div>
      <label htmlFor="location"> 
        {first} {last} ({email})
        </label><br/>
         <input id='first' type='text' onChange={(e)=>setFirst(e.target.value)}/><br/>
         <input id='last' type='text' onChange={(e)=>setLast(e.target.value)}/><br/>
         <input id='email' type='email' onChange={(e)=>setEmail(e.target.value)}/><br/>
                
    </div>
  )
}

export default SideEx
