import React from 'react'


const score = (
  { setIsSelected, setSelectedNumber, totalScore }
) => {

  
  return (
    <div className="p-15 flex justify-between items-center">
      <div>
        <h1 className="text-8xl font-bold">{totalScore}</h1>
        <h2 className="text-2xl font-semibold">Total Score</h2>
      </div>
      <div>
        <div className="flex gap-5 mb-5">
          <button onClick={(n)=>{
            setSelectedNumber(n.target.textContent);
            setIsSelected(true);
          }} className="border border-black text-black text-2xl px-8 py-6 rounded-md hover:bg-black hover:bg-black hover:text-white active:scale-105 transition-all duration-200" >1</button>
          <button onClick={(n)=>{
            setSelectedNumber(n.target.textContent);
            setIsSelected(true);    
          }} className="border border-black text-black text-2xl px-8 py-6 rounded-md hover:bg-black hover:bg-black hover:text-white active:scale-105 transition-all duration-200" >2</button>
          <button onClick={(n)=>{
            setSelectedNumber(n.target.textContent);
            setIsSelected(true);
          }} className="border border-black text-black text-2xl px-8 py-6 rounded-md hover:bg-black hover:bg-black hover:text-white active:scale-105 transition-all duration-200" >3</button>
          <button onClick={(n)=>{
            setSelectedNumber(n.target.textContent);
            setIsSelected(true);
          }} className="border border-black text-black text-2xl px-8 py-6 rounded-md hover:bg-black hover:bg-black hover:text-white active:scale-105 transition-all duration-200" >4</button>
          <button onClick={(n)=>{
            setSelectedNumber(n.target.textContent);
            setIsSelected(true);
          }} className="border border-black text-black text-2xl px-8 py-6 rounded-md hover:bg-black hover:bg-black hover:text-white active:scale-105 transition-all duration-200" >5</button>
          <button onClick={(n)=>{
            setSelectedNumber(n.target.textContent);
            setIsSelected(true);
          }} className="border border-black text-black text-2xl px-8 py-6 rounded-md hover:bg-black hover:bg-black hover:text-white active:scale-105 transition-all duration-200" >6</button>
        </div>
        <h1 className="text-2xl text-right font-semibold">Select Number</h1>
      </div>
    </div>
  )
}

export default score
