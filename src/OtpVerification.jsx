import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin';
import Button from './components/Button';
import Home from './home';

function OtpVerification() {
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
      <div className='grid gap-10 md:grid-cols-2 min-h-screen'>
        <div className='bg-[#F1F4FF] flex items-center justify-center'>
          <img src='/listing-property.png' alt='Trunext Logo' />
        </div>

        <div className='flex flex-col ml-6.5 w-[85%] my-8'>
          <SocialLogin
            page='Create Account'
            instructions='Follow the instructions to make it easier to register and you will be able to explore inside.'
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

          <div>
            <Link to='/Home'><Button buttonname='Verify' /></Link>
            <p className='flex items-center justify-center text-[#11175D] mt-5'>
              Didn't receive the OTP?
              <span className='text-[1rem] font-bold ml-1'>Resend OTP</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpVerification;
