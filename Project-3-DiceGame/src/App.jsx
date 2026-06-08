import React, { useState } from 'react'
import Intro from './Pages/Intro'
import Play from './Pages/play'

const App = () => {

  const [isGameStart, setIsGameStart] = useState(false);

  const startGame = () =>{
    setIsGameStart(prev => !prev);
  }

  return (
    <div className="font-poppins">

      {isGameStart ? <Play/> : <Intro start={startGame}/>}

    </div>
  )
}

export default App
