import React from 'react'

function Button({name}) {
    const check = name== "SUBSCRIBE"
  return (
    <>
     <button className={`cursor-pointer transition-colors duration-300 ease-in-out  bg-[#2E429E] hover:bg-[#000000] text-white text-[15px]  px-6 py-3 rounded ${check? 'font-bold text-[14px]' : 'font-medium'} `}>
            {name}
     </button>
    
    </>
  )
}

export default Button