import React from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin'
import InputField from './components/InputField'
import Button from './components/Includes/Button';
import Textoverlap from './components/Textoverlap';
function EmailVerification() {
    const textoverlay=[{
        id:10, heading:"Properties" , paragraph1:"LATEST LISTINGS" ,  paragraph2:"Featured Property"
         
           }]
  return (
    <>
     <div className='grid grid-cols-1 md:grid-cols-2 h-screen '>
       
         <div className='bg-[#F1F4FF]  flex flex-col items-center justify-center h-[20vh] md:h-screen '>
         <Textoverlap textoverlay={textoverlay}/>
         </div>

         <div className='overflow-auto  max-h-[calc(100vh-0px)] h-[80vh] md:h-screen flex flex-col items-center '>

         <div className='  flex flex-col  w-[85%] '>             {/* login grid part */}
          
 
          <SocialLogin page="Email Verification" instructions="Follow the instructions to make it easier to register and you will be 
               able to explore inside."/>
 
          <InputField type="email" placeholder="Ladushing691@gmail.com" label="Email Addres"/>
         
             <div>
              <Link to="/OtpVerification"><Button name="Send OTP"/></Link>
             </div>
           
            
         </div>
            </div>
 
      
 
     </div>
    </>
   )
}

export default EmailVerification