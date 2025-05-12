import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  Mail,
  CircleUserRound
} from "lucide-react";

import SearchFilter from "./SearchFilter";
import Textoverlap from "./Textoverlap";

function HomeFilter({ page }) {
  const location = useLocation();

  const navItems = [
    { id: 1, name: "Home", path: "/Home" },
    { id: 2, name: "Property Listing", path: "/propertylisting" },
    { id: 3, name: "About Us", path: "/aboutus" },
    { id: 4, name: "Contact Us", path: "/contactus" },
    { id: 5, name: "Assets", path: "/assets" }
  ];

  const textoverlay = [
    {
      id: 5,
      heading: "Property",
      paragraph1: "The Best Properties Place",
      paragraph2: "Let’s find the perfect place for Investment"
    }
  ];

  const textoverlay2 = [
    {
      id: 5,
      heading: "t",
      paragraph1: "",
      paragraph2: "Property Wallet"
    }
  ];

  const isAboutPage = page === "aboutus" ;

  return (
    <div className="h-screen flex flex-col gap-7 bg-cover bg-center bg-[url(/main-bg.png)]">
      {/* Header Top Bar */}
      <div className="h-[2rem] flex justify-evenly items-center border-b border-[#FFFFFF1A]">
        <div className="flex gap-7">
          <div className="flex gap-2 items-center text-[0.875rem] text-[#BFC7D7]">
            <Phone size={16} strokeWidth={1} color="#BFC7D7" />
            <p>(+123) 596 000</p>
          </div>
          <div className="flex gap-2 text-[0.875rem] items-center text-[#BFC7D7]">
            <MapPin size={16} color="#BFC7D7" />
            <p>121 King St, Melbourne den 3000, Australia</p>
          </div>
        </div>
        <div className="flex gap-2 items-center text-[0.875rem] text-[#BFC7D7]">
          <p>Follow Us On:</p>
          <Facebook className="cursor-pointer" size={16} color="#BFC7D7" />
          <Instagram className="cursor-pointer" size={16} color="#BFC7D7" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-around items-center h-20 bg-[#0E2E50]">
        <ul className="ml-[12%] flex gap-10 text-[1rem] text-[#FFFFFF] font-medium">
          {navItems.map((item) => {
            const isActive =
              item.path === "/Home"
                ? location.pathname === "/Home" ||
                  location.pathname.startsWith("/PropertyDetail")
                : location.pathname === item.path;

            return (
              <li key={item.id}>

               <Link
  to={item.path}
  className={`group relative pb-6.5 px-2.5 cursor-pointer transition-all duration-200 text-white hover:text-[#50FFE4]`}
>
  <span
    className={`relative z-10 ${
      isActive ? "text-white" : ""
    }`}
  >
    {item.name} 
  </span>

  <span
    className={`absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
      isActive ? "bg-[#50FFE4] scale-x-100" : "bg-[#50FFE4]"
    }`}
  />
</Link>

              </li>
            );
          })}
        </ul>
        <img className="w-[10%]" src="/user-profile.png" alt="User" />
      </div>

    
     
      {/* Text Overlay */}
      <div
        className={`place-items-center cursor-pointer text-center ${
          isAboutPage
            ? "relative top-1/2 -translate-y-3/2"
            : location.pathname === "/contactus"
            ? "mt-6"
            : ""
        }`}
      >
       {location.pathname==="/assets"? <Textoverlap textoverlay={textoverlay2}/> : <Textoverlap textoverlay={textoverlay} />}
      </div>

      {/* Search Filter */}
      {(location.pathname == "/contactus" || location.pathname == "/aboutus" || location.pathname == "/assets") ? "" :  <div className="mt-5">
          <SearchFilter />
        </div> 
       
      }
    </div>
  );
}

export default HomeFilter;
