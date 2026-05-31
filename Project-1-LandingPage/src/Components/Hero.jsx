import React from 'react'

const Hero = () => {
  return (
    <div>
      <main className="flex ">
        <div className="flex flex-col justify-center gap-3 w-1/2 ">
            <h1 className="text-9xl font-bold w-3/4 p-5 ml-50 ">YOUR FEET DESERVE THE BEST</h1>
            <h3 className="w-3/5 ml-50 mb-10">YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</h3>
            <div className="flex justify-center gap-10">
                <button className="bg-red-600 text-white text-3xl  w-45">Shop Now</button>
                <button className="border text-3xl p-1 w-45">Category</button>
            </div>
            <h3 className="ml-50 mt-7">Also Available On</h3>
            <div className="flex ml-50 gap-5 mt-5 ">
                <img className="w-10" src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-inventory-management-system-zap-inventory-1.png" alt="" />
                <img className="w-10" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png" alt="" />
            </div>
        </div>
        <div className="">
            <img className=" -scale-x-100" src="/src/assets/Shoe.png" alt="Shoe" />
        </div>
      </main>
    </div>
  )
}

export default Hero
