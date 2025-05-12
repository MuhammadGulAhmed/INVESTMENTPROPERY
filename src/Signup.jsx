import React from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin'
import InputField from './components/InputField'
import Textoverlap from './components/Textoverlap';
import Button from './components/Includes/Button';

function Signup() {
    const textoverlay=[{
        id:10, heading:"Properties" , paragraph1:"LATEST LISTINGS" ,  paragraph2:"Featured Property"
         
           }]
  return (
    <>
     <div className='grid grid-cols-1 md:grid-cols-2 h-screen '>
       
         <div className='bg-[#F1F4FF]  flex items-center justify-center   h-[20vh] md:h-screen  '>
         <Textoverlap textoverlay={textoverlay}/>
         </div>

         <div className='overflow-auto  max-h-[calc(100vh-0px)]  md: flex flex-col justify-center items-center   '>

         <div className='  flex flex-col w-[85%] '>             {/* login grid part */}
          
 
          <SocialLogin page="Sign Up" instructions="Follow the instructions to make it easier to register and you will be 
               able to explore inside."/>
 
 
          <InputField type="text" placeholder="Muhammad Gul Ahmed" label="Enter Name"/>
          <InputField type="email" placeholder="Ladushing691@gmail.com" label="Email Addres"/>
          <InputField type="Password" placeholder=". . . . . . . ." label="Password"/>
         
           
             <div>
             <Link to="/CreateAccount"><Button name="Sign up"/></Link>
             </div>
           
            
         </div>

            </div>
 
        
 
     </div>
    </>
   )
}

export default Signup