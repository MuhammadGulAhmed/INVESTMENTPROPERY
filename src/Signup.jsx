import React from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin'
import InputField from './components/InputField'
import Button from './components/Button'

function Signup() {
  return (
    <>
     <div className='grid gap-10 md:grid-cols-2 min-h-screen '>
       
         <div className='bg-[#F1F4FF]  flex items-center justify-center  '>
             <img src="/listing-property.png" alt="" />
         </div>
 
         <div className='  flex flex-col ml-6.5 w-[85%] my-8'>             {/* login grid part */}
          
 
          <SocialLogin page="Sign Up" instructions="Follow the instructions to make it easier to register and you will be 
               able to explore inside."/>
 
 
          <InputField type="text" placeholder="Muhammad Gul Ahmed" label="Enter Name"/>
          <InputField type="email" placeholder="Ladushing691@gmail.com" label="Email Addres"/>
          <InputField type="Password" placeholder=". . . . . . . ." label="Password"/>
         
           
             <div>
             <Link to="/CreateAccount"><Button buttonname="Sign up"/></Link>
             </div>
           
            
         </div>
 
     </div>
    </>
   )
}

export default Signup