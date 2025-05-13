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
  CircleUserRound,
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
    { id: 5, name: "Assets", path: "/assets" },
  ];

  const textoverlay = [
    {
      id: 5,
      heading: "Property",
      paragraph1: "The Best Properties Place",
      paragraph2: "Let’s find the perfect place for Investment",
    },
  ];

  const isAboutPage = page === "aboutus";

  return (
    <div className="pb-51 overflow-hidden w-full flex items-center justify-center flex-col gap-7 bg-cover bg-center bg-[url(/main-bg.png)]">
      {/* Header Top Bar */}
      <div className="h-6 gap-40 flex ">
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
        <div className="w-335 border-t border-[#FFFFFF1A]"></div>
      {/* Navigation Bar */}
      <div className="flex  justify-center items-center h-20 bg-[#0E2E50]">
        <ul className=" flex w-270 pl-70 gap-5 text-[1rem] text-[#FFFFFF] font-medium">
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
                  className={`pb-6.5 px-2.5 cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "border-b-2 border-[#50FFE4]"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="pr-40">
            <div className="userprofile h-10 bg-[#2E429E] cursor-pointer rounded-2xl flex items-center justify-center">
              <div className="bg-[#273886] px-3 py-2.5 rounded-l-2xl">
                <CircleUserRound className="cursor-pointer" size={20} color="#FFFFFF" />
              </div>
              <div className="px-3  text-[#FFFFFF] font-medium text-[0.8rem]">
                <p className="w-18">User Profile</p>
              </div>
            </div>
        </div>
      </div>

      {/* Image Section */}
     
      {/* Text Overlay Section */}
      <div
        className={`place-items-center cursor-pointer text-center ${
          isAboutPage ? "relative top-1/2 -translate-y-3/2" : ""
        }`}
      >
        <Textoverlap textoverlay={textoverlay} />
      </div>

      {/* Search Filter */}
      {!isAboutPage && (
        <div className="mt-5">
          <SearchFilter />
        </div>
      )}
    </div>
  );
}

export default HomeFilter;
