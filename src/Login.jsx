import React from 'react'
import { Link } from 'react-router-dom';
import "./App.css"
import SocialLogin from './components/SocialLogin'
import InputField from './components/InputField'
import Button from './components/Button'

function Login() {
  return (
   <>
    <div className='grid gap-10 md:grid-cols-2 min-h-screen '>
      
        <div className='bg-[#F1F4FF]  flex items-center justify-center  '>
            <img src="/listing-property.png" alt="" />
        </div>

        <div className='  flex flex-col ml-6.5 w-[85%] my-8'>             {/* login grid part */}
         

         <SocialLogin page="Login" instructions="Follow the instructions to make it easier to register and you will be able to explore inside."/>


         <InputField type="emial" placeholder="Ladushing691@gmail.com" label="Email Address"/>
         <InputField type="password" placeholder=". . . . . . ." label="Password"/>
        
          
            <div>
             <Button buttonname="Login"/>

             <p className='flex items-center justify-center w-full text-[#11175D]  mt-5'>Do you have account? <Link to="/Signup"><span className='text-[1rem] font-bold'>Sign up</span></Link></p>
            </div>
          
           
        </div>

    </div>
   </>
  )
}

export default Login