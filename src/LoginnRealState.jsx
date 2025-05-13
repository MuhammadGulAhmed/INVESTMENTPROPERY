import React from 'react'
import RealState from '../src/assets/realstate1.png'
import { 
  
  Facebook, 
  Instagram, 
  Twitter, 

} from 'lucide-react';

function LoginnRealState() {
  return (
    <>
    <div className='bg-[#3C57A6] w-screen h-screen flex items-center justify-center'>
      <div className='bg-[#FFFFFF]  px-7 pb-7 flex flex-col items-center justify-center rounded-[6px]'>
        <div>
          <img src={RealState} alt="" />
        </div>
        <div>
         <h1 className='text-[#5D7186] pb-2 text-[1.12rem] font-bold'>Sign In</h1>
        </div>
        <div>
          <p className='text-[#5D7186] pb-4 text-[0.867rem] font-normal'>Enter your email address and password to access admin panel.</p>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='text-[#5D7186] text-[0.865rem] font-medium pb-2' htmlFor="">Email</label>
          <input className='border-[#EEF2F7] text-[#5D7186] font-normal text-[0.865rem] w-100 py-2 rounded-[5px] pl-4 pr-2 border bg-[#EEF2F780]' type="text" placeholder='Enter your email' />
        </div>
        <div className='flex flex-col pb-4'>
          <label className='text-[#5D7186] text-[0.865rem] font-medium pb-2' htmlFor="">Password</label>
          <input className='border-[#EEF2F7] text-[#5D7186] font-normal text-[0.865rem] w-100 py-2 rounded-[5px] pl-4 pr-2 border bg-[#EEF2F780]' type="text" placeholder='Enter your password' />
        </div>
        <div className='flex gap-2 self-start pb-4 '>
          <input className='border-[#0000002D] border' type="checkbox" />
          <p className='text-[#5D7186] font-medium text-[0.856rem]'>Remember me</p>
        </div>
        <div className='relative'>
          <button className='bg-[#2E429E] text-[#FFFFFF] font-medium text-[0.865rem] pb-3 w-100 p-2 rounded-[6px]'>Sign In</button>
        </div>

        <div className='relative py-4 flex flex-col items-center justify-center'>
          <h1 className='text-[#5D7186] z-100 font-semibold text-[0.865rem] bg-[#FFFFFF]'>OR sign with</h1>
          <hr className='w-100 absolute z-1 text-[#EAEDF1] top-6.5'/>
        </div>
     
       <div className='flex gap-5 items-center justify-center '>
          <div className='h-[50px] w-[50px] border-[1px] border-[#EEF2F7] flex items-center justify-center rounded-[4px]'> <Instagram className="  rounded-sm"   size={38} color="#323A46" /></div>
          <div className='h-[60px] self-center w-[55px] flex items-center justify-center border-[1px] border-[#EEF2F7] rounded-[4px] '> <Instagram className=" rounded-sm"   size={38} color="#323A46" /></div>
          <div className='h-[50px] w-[50px] border-[1px] flex items-center justify-center border-[#EEF2F7] rounded-[4px]'> <Instagram className="  rounded-sm"   size={38} color="#323A46" /></div>
       </div>

      </div>
    </div>
    </>
  )
}

export default LoginnRealState