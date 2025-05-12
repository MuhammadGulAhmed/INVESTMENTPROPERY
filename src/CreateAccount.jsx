import React from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin'
import InputField from './components/InputField'
import Button from './components/Includes/Button';
import Textoverlap from './components/Textoverlap';

function CreateAccount() {
    const textoverlay=[{
        id:10, heading:"Properties" , paragraph1:"LATEST LISTINGS" ,  paragraph2:"Featured Property"
         
           }]
  return (
    <>
    <div className="grid grid-cols-1  md:grid-cols-2 h-screen  ">
  {/* Static left side */}
  <div className="bg-[#F1F4FF] flex items-center justify-center     h-[20vh] md:h-screen ">
    <Textoverlap textoverlay={textoverlay} />
  </div>

  {/* Scrollable right side */}
  <div className="h-[70vh] md:h-screen overflow-auto">
  <div className="min-h-full flex flex-col justify-center items-center ">
    <div className="flex flex-col w-[85%]">
      <SocialLogin
        page="Create Account"
        instructions="Follow the instructions to make it easier to register and you will be able to explore inside."
      />

      <InputField type="text" placeholder="Muhammad Gul Ahmed" label="Enter Name" />
      <InputField type="email" placeholder="Ladushing691@gmail.com" label="Email Address" />
      <InputField type="password" placeholder=". . . . . . . ." label="Password" />
      <InputField type="password" placeholder=". . . . . . . ." label="Confirm Password" />
      <InputField type="text" placeholder="320-9456-12" label="Referral Code (Optional)" />

      <div>
        <Link to="/EmailVerification"><Button name="Create Account" /></Link>
      </div>
    </div>
  </div>
</div>

  
</div>

    </>
   )
}

export default CreateAccount