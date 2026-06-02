import React, { useState } from 'react'
import EmailForm from './EmailForm'
import Call from './Call'

const Hero = () => {

    const [showMailForm, setShowMailForm] = useState(false);
    const [showCallForm, setShowCallForm] = useState(false)
  return (
    <div>
        <main className='flex gap-20 justify-center p-3'>
            <div id="left-main">
                <div id="Contact-buttons" className='flex justify-center gap-10 mb-10 mt-20 mr-20'>
                    <button className='flex items-center gap-2 border border-black text-black px-20 py-2 rounded-md active:scale-98 hover:bg-gray-500 transition duration-300 ease-in-out'>
                        <img src="/src/assets/help.png" alt="Support Chat" width="40" height="20"/>
                        Via Support Chat
                    </button>
                    <button onClick={()=>{
                        setShowMailForm(false);
                        setShowCallForm(true);
                        
                    }} className='flex items-center gap-2 border border-black text-black px-20 py-2 rounded-md active:scale-98 hover:bg-gray-500 transition duration-300 ease-in-out'>
                        <img src="/src/assets/phone-call.png" alt="Call" width="40" height="20"/>
                        Via Call
                    </button>
                </div>
                <div className='flex justify-center gap-10 mt-10 mr-20'>
                    <button onClick={() =>{
                        setShowCallForm(false);
                        setShowMailForm(true);
                    }} className='flex items-center gap-2 border border-black text-black px-65 py-2 rounded-md active:scale-98 hover:bg-gray-500 transition duration-300 ease-in-out'>
                    <img src="/src/assets/mail.png" alt="Email" width="40" height="20"/>
                    Via Email
                </button>
                </div>
                {showMailForm && <EmailForm/>}
                {showCallForm && <Call/>}
            </div>
            <div id="right-main" >
                <img src="/src/assets/contactus.jpg" alt="" width="600" height="400"/>
            </div>
        </main>
    </div>
  )
}

export default Hero
