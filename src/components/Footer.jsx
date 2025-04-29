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

function Footer() {
  return (
    <>
   
   <div className="bg-[#C2C8D54D] py-[4%] gap-9 flex justify-center ">
         <div className="flex justify-center flex-col w-[22%] gap-5">
             <p className="text-[0.9rem] inline-block  font-medium text-[#788593]">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam</p>
          <div className="flex gap-1">
            <Linkedin className="bg-[#2E429E] p-2  rounded-sm" fill="#FFFFFF" size={32} color="#FFFFFF" />
            <Facebook className="bg-[#2E429E] p-2 rounded-sm" fill="#FFFFFF"  size={32} color="#FFFFFF" />
            <Instagram className="bg-[#2E429E] p-2 rounded-sm"   size={32} color="#FFFFFF" />
            <Twitter className="bg-[#2E429E] p-2 rounded-sm" fill="#FFFFFF"  size={32} color="#FFFFFF" />
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-[#212121] text-[1.35rem] font-medium">Quick Links</p>
          <img className="w-[1.9rem]" src="/border-bar.png" alt="" />

          <div className=" flex flex-col gap-[0.4rem]">
            <div className="flex items-center gap-3">
              <img className=" h-[0.3rem]" src="/blue-circle.png" alt="" />
              <p className="text-[0.9rem] text-[#788593] font-normal">About Us</p>
            </div>
            <div className="flex items-center gap-3">
              <img className=" h-[0.3rem]" src="/blue-circle.png" alt="" />
              <p className="text-[0.9rem] text-[#788593] font-normal">Blog & Articles</p>
            </div>
            <div className="flex items-center gap-3">
              <img className=" h-[0.3rem]" src="/blue-circle.png" alt="" />
              <p className="text-[0.9rem] text-[#788593] font-normal">Terms and Conditions</p>
            </div>
            <div className="flex items-center gap-3">
              <img className=" h-[0.3rem]" src="/blue-circle.png" alt="" />
              <p className="text-[0.9rem] text-[#788593] font-normal">Privacy Policy</p>
            </div>
            <div className="flex items-center gap-3">
              <img className=" h-[0.3rem]" src="/blue-circle.png" alt="" />
              <p className="text-[0.9rem] text-[#788593] font-normal">Contact Us</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <p className="text-[#212121] text-[1.35rem] font-medium">Newsletter</p>
          <img className="w-[1.9rem]" src="/border-bar.png" alt="" />
          <input className="bg-[#FFFFFF] text-[#788593] outline-none p-[0.7rem] " type="text" placeholder="Enter e-mail addess" />
          <button className="text-[#FFFFFF] font-medium text-[0.9rem] bg-[#2E429E] p-[0.7rem] ">SUBSCRIBE</button>
          <p className="text-[0.9rem] text-[#788593] font-normal">We never span you!</p>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <p className="text-[#212121] text-[1.35rem] font-medium">Contact</p>
          <img className="w-[1.9rem]" src="/border-bar.png" alt="" />

          <div className="flex gap-3 items-center">
          <MapPin size={20} color="#d3cfcf" />
          <p className="text-[0.9rem] w-[90%] text-[#788593] font-normal">121 King St, Melbourne den 3000,Australia</p>
          </div>
          <div className="flex gap-3 items-center">
          <Mail size={20} color="#d3cfcf" />
          <p className="text-[0.9rem]  text-[#788593] font-normal">info@example.com</p>
          </div>
          <div className="flex gap-3 items-center">
          <Phone size={20} color="#d3cfcf" />
          <p className="text-[0.9rem] text-[#788593] font-normal">+123-596-000</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer