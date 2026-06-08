import React from 'react'

const Intro = ({ start }) => {
    
  return (
    <div className="w-full h-screen flex flex items-center justify-center gap-5">
      <img src="/src/assets/dice.png" alt="dice" className='w-200 h-180 '/>
      <div className="flex flex-col gap-5">
         <h1 className='text-6xl font-bold text-center'>Dice Game</h1>
      <button onClick={start} className='bg-black text-white w-1/2 px-4 py-2 rounded-md hover:bg-white hover:border border-black hover:text-black active:scale-105 transition-all duration-200'>Play</button>
      </div>
    </div>
  )
}

export default Intro
