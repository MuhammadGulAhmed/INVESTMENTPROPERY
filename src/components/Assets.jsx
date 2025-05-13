import React from 'react'
import HomeFilter from './HomeFilter'
import pool from "../assets/pool.png"
import pool2 from "../assets/pool2.png"
import house1 from "../assets/house1.png"
import { 
  Instagram, 
} from 'lucide-react';
import MyPropertyCard from './Includes/MyPropertyCard';
import Footer from './Footer'




function Assets() {
  return (
    <>
    
      <div className='flex flex-col items-center  justify-center'>
      <HomeFilter/>
        <div className='Myproperty flex gap-150 '>
          <div><h1 className='text-[2.5rem] font-medium text-[#323236]'>My Property</h1></div>
          <div>
            <select className="bg-[#F4F4F4] text-[#878C9F] h-[3.5rem]  pl-2 w-[11rem] border rounded-[6px] border-[#D8EDE8]  focus:outline-none appearance-none outine-0" name="property type" placeholder="property type" id="">
              <option value="Rent">luxury appartment</option>
              <option value="Plot">Plot</option>
              <option value="Appartment">luxury mension</option>
              <option value="Mansion">house</option>
            </select>
          </div>
        </div>

        <div className='flex gap-5 pt-10 pb-70'> 
         <MyPropertyCard name="Tungis Luxury" address="900 , Creside WI 54913" img={pool}/>
         <MyPropertyCard name="Luxury Penthouse" address="Sumner Street Los Angeles" img={pool2}/>
         <MyPropertyCard name="Luxury Appartment" address="223 , Creside Santa Maria" img={house1}/>
        </div> 

        <Footer/>
      </div>
    </>
  )
}

export default Assets