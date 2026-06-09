import Background from "./Components/Background"
import Forground from "./Components/Forground"

const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <div className="fixed w-full h-full top-0 left-0 z-[3] ">
        <Forground/>
      </div>
    </div>
  )
}

export default App
