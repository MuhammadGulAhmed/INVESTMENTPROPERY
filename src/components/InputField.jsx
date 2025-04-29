import React from 'react'

const InputField = ({type, placeholder, label}) => {
  return (
    <>
    <div className='relative mt-10 mb-5'>
           <div className=' ml-5 px-8 absolute top-[-0.6rem]   bg-[#FFFFFF] '><p className='text-[0.8rem] text-[#585D8E]'>{label}</p></div>
           <input className='focus:outline-none  w-full pl-7 py-5 border rounded-[0.7rem] border-[#B8B9CE]' type={type} placeholder={placeholder} />
         </div>
   </>
  )
}

export default InputField