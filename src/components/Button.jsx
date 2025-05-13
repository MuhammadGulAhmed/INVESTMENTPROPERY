import React from 'react'

function Button({buttonname}) {
  const check= buttonname=="SUBSCRIBE"
  return (
    <>
       <button className={`focus:outline-none flex items-center text-[15px] font- justify-center w-full  py-5 border rounded-2xl bg-[#1A1F3F] mt-3 font-medium  text-[#FFFFFF] $check? "font-" }`}>{buttonname}</button>
    </>
  )
}

export default Button