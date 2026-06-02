import React, { useState } from 'react'

const Call = () => {
    const [call, setCall] = useState("");
  return (
    <div className='transition duration-300 ease-in-out '>
      <fieldset className='border border-gray-500 p-3 rounded'>
        <legend className='px-2 font-semibold '>Enter your Phone Number</legend>
        <input value={call} onChange={(e) => setCall(e.target.value)} type="number" className='w-full outline-none' />
      </fieldset>
      <button className='bg-black text-white px-5 py-2 rounded-md active:scale-98 hover:bg-gray-500 transition duration-300 ease-in-out'>Call</button>
    </div>
  )
}

export default Call
