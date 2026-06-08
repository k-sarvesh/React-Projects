import React from 'react'
import Score from '../Components/score'
import Hero from '../Components/Hero'
import { useState } from 'react'

const Play = () => {

  const totalScoreFromStorage = localStorage.getItem('totalScore');

  const [isSelected, setIsSelected] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [totalScore, setTotalScore] = useState(totalScoreFromStorage ? parseInt(totalScoreFromStorage) : 0);

  return (
    <div className="p-3 scroll-smooth">
      <Score isSelected={isSelected} setIsSelected={setIsSelected} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} totalScore={totalScore} setTotalScore={setTotalScore}/>
      <Hero isSelected={isSelected} setIsSelected={setIsSelected} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} totalScore={totalScore} setTotalScore={setTotalScore}/>


    </div>
  )
}

export default Play
