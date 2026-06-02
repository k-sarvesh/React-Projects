import React, { useState } from 'react'



const EmailForm = () => {
const [Name, setName] = useState("");
const [Email, setEmail] = useState("");
const [Message, setMessage] = useState("");


  return (
    <div className='space-y-6 tarnsition duration-300 ease-in-out' >

      <fieldset className='border border-gray-500 p-3 rounded'>
        <legend className='px-2 font-semibold '>Name</legend>
        <input value={Name} onChange={(e) =>{
            setName(e.target.value);
        }} type="text" className='w-full outline-none' />
      </fieldset>

      <fieldset  className='border border-gray-500 p-3 rounded'>
        <legend className='px-2 font-semibold '>Email</legend>
        <input value={Email} onChange={(e) =>{
            setEmail(e.target.value);
        }} type="email" className='w-full outline-none' />
      </fieldset>

      <fieldset className='border border-gray-500 p-3 rounded'>
        <legend className='px-2 font-semibold '>Message</legend>
        <textarea value={Message} onChange={(e) =>{
            setMessage(e.target.value);
        }} className='w-full outline-none' rows={5}></textarea>
      </fieldset>

        <button onClick={()=>{
            setName("");
            setEmail("");
            setMessage("");
        }} className='bg-black text-white px-5 py-2 rounded-md active:scale-98 hover:bg-gray-500 transition duration-300 ease-in-out'>Submit</button>
    </div>
  )
}

export default EmailForm
