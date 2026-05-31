import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-5 px-20 ">
        <div>
            <img className="h-20 w-35 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTVMpBQPksCaov0mEWu-iqaIfZAP8fejDKQ&s" alt="Nike Logo" />
        </div>
        <div className="flex gap-10 text-lg font-weight: 400 ">
            <a className="relative text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full    " href="#">Menu</a>
            <a className="relative text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full    " href="#">Location</a>
            <a className="relative text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full    " href="#">About</a>
            <a className="relative text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full  " href="#">Contact</a>
            

        </div>
        <div>
            <button className="bg-red-600 text-white font-bold p-2 h-10 w-20" >Login</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
