import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin';
import Home from './home';
import Button from './components/Includes/Button';
import Textoverlap from './components/Textoverlap';

function OtpVerification() {

  const textoverlay=[{
    id:10, heading:"Properties" , paragraph1:"LATEST LISTINGS" ,  paragraph2:"Featured Property"
     
       }]

  const [otp, setOtp] = useState(new Array(4).fill(""));

  function handleChange(e, index) {
    if (isNaN(e.target.value)) return;

    const value = e.target.value;

    setOtp(otp.map((data, indx) => (indx === index ? value : data)));

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    } else if (!value && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  }


  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>

        <div className='bg-[#F1F4FF] flex items-center justify-center  h-[20vh] md:h-screen'>
        <Textoverlap textoverlay={textoverlay}/>
        </div>

        <div className='overflow-auto  max-h-[calc(100vh-0px)] h-[80vh] md:h-screen flex flex-col  items-center '>

        <div className='flex flex-col  w-[85%]  justify-center items-center  '>
          <SocialLogin
            page='Email Verification'
            instructions='We have sent an OTP to sherjeelahmed1017@gmail.com.Please enter it below to verify your account.'
          />

          <div className='flex gap-3 items-center justify-center my-9'>
            {otp.map((data, i) => (
              <input
                key={i}
                className='focus:outline-none h-16 w-[15%] sm:w-[12%] text-center border border-[#D0D0D0] focus:ring-2 focus:ring-[#1A1F3F] rounded-2xl text-2xl mt-3 font-semibold text-[#1A1F3F] placeholder-[#1A1F3F] md:h-24'
                type='text'
                placeholder='__'
                value={data}
                maxLength={1}
                onChange={(e) => handleChange(e, i)}
                aria-label={`OTP digit ${i + 1}`}
              />
            ))}
          </div>

          <div className='w-full'>
            <Link to='/Home'><Button name='Verify' /></Link>
            <div className='flex flex-row justify-center gap-2'>

              <span className='flex items-center justify-center text-[#11175D] transition-colors duration-200  cursor-pointer hover:text-black'> Didn't receive the OTP?</span>
              <span className='cursor-pointer text-[1rem] font-bold transition-colors duration-200 hover:text-[#3f3977] '>Resend OTP</span>
            </div>
            
          </div>
        </div>


          </div>
     
      </div>
    </>
  );
}

export default OtpVerification;
