import React from 'react'
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Search, 
  BedDouble, 
  ShowerHead, 
  Scan, 
  MoveRight, 
  Mail 
} from 'lucide-react';
import PropertyDetail from '../PropertyDetail';
import { Link } from 'react-router-dom'


function PropertyCard() {
  return (
    <>
       <Link to={"/PropertyDetail"}>
       <div className="flex gap-4 p-[2%] gap- shadow-[0px_4px_18px_0px_#C2C8D54D] hover:scale-[1.01]
                          transition-transform duration-300">
                <img className="w-[35%] h-[94%] mt-[1%] rounded-[0.4rem]" src="/kitchen.png" alt="" />
                <div className="flex flex-col gap-1.5">
                  <h1 className="text-[#212121] font-medium text-[1.2rem]">Northwest Office Space</h1>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} color="#BFC7D7"/>
                    <p className="text-[#929292] text-[0.84rem]">New Jersey</p>
                  </div>
                  

                  <div className="flex gap-4 mt-[2%] ">
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} color="#BFC7D7" />
                      <p className="text-[#788593] font-medium  text-[0.84rem]">Beds 3</p>
                      </div>
                    <div className="flex items-center gap-2">
                    <ShowerHead size={16} color="#BFC7D7" />
                      <p className="text-[#788593] font-medium  text-[0.84rem]">Baths 3</p>
                      </div>
                    <div className="flex items-center gap-2">
                    <Scan size={16} color="#BFC7D7" />
                      <p className="text-[#788593] font-medium  text-[0.84rem]">1500 sqft</p>
                      </div>
                  </div>
                  <div className="flex justify-between  items-center pt-2 mt-[3%] border-t-1 border-[#E1E1E1]">
                    <div className="flex items-center gap-2">
                      <img src="/women-img.png" alt="" />
                      <p className="text-[#70778B] text-[0.84rem] font-medium">By Daziy Millar</p>
                    </div>

                    <p className="text-[#2E429E] font-bold text-[1.07rem]">AED 450,000</p>

                  </div>
             </div>
           </div>
       </Link>        {/* Card ends here */}
    </>
  )
}

export default PropertyCard