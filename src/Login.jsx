import React from 'react'
import { Link } from 'react-router-dom';
import "./App.css"
import SocialLogin from './components/SocialLogin'
import InputField from './components/InputField'
import Textoverlap from './components/Textoverlap';
import Button from './components/Includes/Button';

function Login() {
    const textoverlay=[{
        id:10, heading:"Properties" , paragraph1:"LATEST LISTINGS" ,  paragraph2:"Featured Property"
         
           }]
  return (
   <>
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden '>
      
        <div className='bg-[#F1F4FF]    flex items-center justify-center    h-[20vh] md:h-screen  '>
        <Textoverlap textoverlay={textoverlay}/>
        </div>

        <div className='overflow-auto  max-h-[calc(100vh-0px)] h-[80vh] md:h-screen flex flex-col justify-center items-center   '>

        <div className='  flex flex-col  w-[85%] '>             {/* login grid part */}
         

         <SocialLogin page="Login" instructions="Follow the instructions to make it easier to register and you will be able to explore inside."/>


         <InputField type="emial" placeholder="Ladushing691@gmail.com" label="Email Address"/>
         <InputField type="password" placeholder=". . . . . . ." label="Password"/>
        
          
           <Link to="/home">
           <div>
             <Button name="Login"/>

             <p className='flex items-center justify-center w-full text-[#11175D]  mt-5'>Do you have account? <Link to="/Signup"><span className='text-[1rem] font-bold'>Sign up</span></Link></p>
            </div>
           </Link> 
          
           
        </div>

        </div>

       

    </div>
   </>
  )
}

export default Login