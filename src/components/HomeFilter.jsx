import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
import SearchFilter from "./SearchFilter";


function HomeFilter() {

  const [active, setActive] = useState("Home");

  // Manually defined nav items
  const navItems = [
    { name: "Home", path: "/Home" },
    { name: "Property Listing", path: "/propertylisting" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Assets", path: "/assets" },NNN
  ];

  return (
    <>
          <div className='h-screen bg-cover bg-center bg-[url(/main-bg.png)]'>
      <div className='h-[3rem] flex justify-evenly items-center border-b border-[#FFFFFF1A] '>
         <div className='flex gap-7'>
            <div className='flex gap-2 items-center text-[0.875rem] text-[#BFC7D7]'>
            <Phone size={16} strokeWidth={1}  color='#BFC7D7' />
            <p>(+123) 596 000</p>
            </div>
            <div className='flex gap-2 text-[0.875rem] items-center text-[#BFC7D7]'>
            <MapPin size={16} color="#BFC7D7" />
            <p>121 King St, Melbourne den 3000, Australia</p>
            </div>
         </div>
         <div className='flex gap-2  items-center text-[0.875rem] text-[#BFC7D7]'>
          <p> Follow Us On:</p>
          <Facebook className="cursor-pointer" size={16} color="#BFC7D7" />
          <Instagram className="cursor-pointer" size={16} color="#BFC7D7" />
         </div>

      </div>

        <div className='flex justify-around items-center h-20 bg-[#0E2E50] mt-[5%]'>
       
        <ul className="ml-[12%] flex gap-10 text-[1rem] text-[#FFFFFF] font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`pb-6.5 px-2.5 cursor-pointer transition-all duration-200 ${
                    active === item.name ? "border-b-2 border-[#50FFE4]" : "border-b-2 border-transparent"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

                   <img className='w-[10%]' src="/user-profile.png" alt="" />
          </div>

         <div className="place-items-center cursor-pointer mt-2">
          <img src="/property-find.png" alt="" />
         </div>


         <SearchFilter/>

    </div>
    </>
  )
}

export default HomeFilter