import React, { useState } from 'react'

const Hero = (
  { isSelected, selectedNumber,totalScore, setTotalScore }
) => {
  const [random, setRandom] = useState(1)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showRules, setShowRules] = useState(false)


  const getImage = () => {
    if(isSelected){
      setIsSpinning(true)
    setTimeout(() => {
      setRandom(Math.floor(Math.random() * 6) + 1)
      setIsSpinning(false)
    }, 500)
    if(isSelected){
      
      if(random === Number(selectedNumber)){
        setTotalScore(prev => prev + random);
      }
    }
    localStorage.setItem('totalScore', totalScore);
  }
  else{
    alert("Please select a number before rolling the dice.");
  }
}
  const resetScore= () =>{
    setTotalScore(0);
  }
  const isshowRules = () =>{
    setShowRules(prev => !prev);
  }
  
  let showSelectedNumberMessage = <h2 className="text-3xl text-black">Selected Number :{selectedNumber}</h2>

  let showRulesMessage = <div className='bg-gray-100 p-5 rounded-md mt-5'>
    <h1 className='text-2xl font-semibold mb-3'>Rules of the Game:</h1>
    <ul className='list-disc list-inside text-lg'>
      <li>Click on the dice to roll it.</li>
      <li>Select a number between 1 and 6 before rolling the dice.</li>
      <li>If the rolled number matches your selected number, you earn points equal to that number.</li>
      <li>You can reset your score at any time by clicking the "Reset Score" button.</li>
    </ul>
  </div>


  return (
    <div className="flex flex-col gap-5 mt-10 items-center">
      {showSelectedNumberMessage}
      <img onClick={getImage} src={`/src/assets/dice_${random}.png`} alt="dice" className={`w-50 h-50 cursor-pointer  hover:scale-110 ${isSpinning ? 'animate-[spin_0.5s_linear]' : ''}`}/>
      <h1 className='text-2xl font-semibold text-center'>Click on Dice to Roll</h1>
      <button className='border border-black text-black w-50 text-2xl p-2 rounded-md hover:bg-black hover:bg-black hover:text-white active:scale-105 transition-all duration-200' onClick={resetScore}>Reset Score</button>
      <button className='bg-black text-white w-50 p-2 rounded-md hover:bg-white hover:border border-black hover:text-black active:scale-105 transition-all duration-200 block mx-auto mt-5' onClick={isshowRules}>Show Rules</button>
      {showRules && showRulesMessage}
      
    </div>
  )
}

export default Hero
