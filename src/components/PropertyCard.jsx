import React from 'react'
import { 
  MapPin, 
  BedDouble, 
  ShowerHead, 
  Scan 
} from 'lucide-react';
import { Link } from 'react-router-dom';

function PropertyCard() {
  return (
    <Link to="/PropertyDetail">
      <div className="group relative flex gap-4 p-[2%] shadow-[0px_4px_18px_0px_#C2C8D54D] hover:scale-105
                      transition-all duration-300 overflow-hidden
                      text-[#212121] hover:text-white
                      before:content-[''] before:absolute before:inset-0 
                      before:bg-gradient-to-r before:from-[#2E429E] before:to-[#1e3185] 
                      before:transform before:scale-x-0 hover:before:scale-x-100 
                      before:origin-left before:transition-transform before:duration-500 
                      before:z-0 rounded-lg">

        {/* Image */}
        <img className="w-[35%] h-[94%] mt-[1%] rounded-[0.4rem] relative z-10" src="/kitchen.png" alt="" />

        {/* Content */}
        <div className="flex flex-col gap-1.5 relative z-10">
          <h1 className="font-medium text-[1.2rem] transition-colors duration-300">Northwest Office Space</h1>
          
          <div className="flex items-center gap-2">
            <MapPin size={16} color="#BFC7D7" />
            <p className="text-[#929292] text-[0.84rem]">New Jersey</p>
          </div>

          {/* Features */}
          <div className="flex gap-4 mt-[2%]">
            <div className="flex items-center gap-2">
              <BedDouble size={16} color="#BFC7D7" />
              <p className="text-[#788593] font-medium text-[0.84rem]">Beds 3</p>
            </div>
            <div className="flex items-center gap-2">
              <ShowerHead size={16} color="#BFC7D7" />
              <p className="text-[#788593] font-medium text-[0.84rem]">Baths 3</p>
            </div>
            <div className="flex items-center gap-2">
              <Scan size={16} color="#BFC7D7" />
              <p className="text-[#788593] font-medium text-[0.84rem]">1500 sqft</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-2 mt-[3%] border-t border-[#E1E1E1]">
            <div className="flex items-center gap-2">
              <img src="/women-img.png" alt="" />
              <p className="text-[#70778B] text-[0.84rem] font-medium">By Daziy Millar</p>
            </div>
            <p className="text-[#2E429E] font-bold text-[1.07rem] group-hover:text-white transition-colors duration-300">AED 450,000</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard;
