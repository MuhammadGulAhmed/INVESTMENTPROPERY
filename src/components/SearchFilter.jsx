import React from 'react'
import {   
  Search 
} from 'lucide-react';

function SearchFilter() {
  return (
    
      <div className="flex items-center justify-center">
          <input className="bg-[#FFFFFF] text-[#878C9F] h-[3.7rem] w-[18%] pl-2   outline-0 rounded-l-[0.3rem]" type="text" placeholder="Enter Keyword here ..." />
          <select className="bg-[#FFFFFF] text-[#878C9F] h-[3.7rem]  pl-2 w-[12%] border border-[#D8EDE8]  focus:outline-none appearance-none outine-0" name="select type" placeholder="select type" id="">
            <option value="Rent">Rent</option>
            <option value="Plot">Plot</option>
            <option value="Appartment">Appartment</option>
            <option value="Mansion">Mansion</option>
          </select>
          <select className="bg-[#FFFFFF] text-[#878C9F] h-[3.7rem]  pl-2 w-[15%]   outline-none" name="select location" placeholder="select location" id="">
            <option value="rwp">rwp</option>
            <option value="bwp">bwp</option>
            <option value="isl">isl</option>
            <option value="pes">pes</option>
            <option value="kci">kci</option>
          </select>
 
          
          <button className="bg-[#2E429E] cursor-pointer flex items-center justify-center gap-2 text-[#FFFFFF] font-extrabold h-[3.7rem] w-[10%] rounded-r-[0.3rem]"><a href="">Search</a>
          <Search size={16} strokeWidth={3} color="#FFFFFF" />
          </button>
          
        </div>
    
  )
}

export default SearchFilter