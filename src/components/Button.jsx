import React from 'react'

function Button({buttonname}) {
  return (
    <>
       <button className='focus:outline-none flex items-center justify-center w-full  py-5 border rounded-2xl bg-[#1A1F3F] mt-3 font-semibold  text-[#FFFFFF]'>{buttonname}</button>
    </>
  )
}

export default Button