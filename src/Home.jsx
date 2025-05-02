import React, { useState } from "react";
import HomeFilter from "./components/HomeFilter";
import ListingProperty from "./components/ListingProperty";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";
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
import Textoverlap from "./components/Textoverlap";

const textoverlay=[{
  id:1, heading:"Speciality" , paragraph1:"What we Do" ,  paragraph2:"Our Main Speciality"
   
     }]

function Home() {
  
  return (
    <>
    
       <HomeFilter/>

          {/*   Speciality  */}


    <div className="bg-[#F1F4FF] p-[3%] pb-[7%] flex flex-col items-center gap-12 justify-center">
         <div className="mt-5">
          <Textoverlap textoverlay={textoverlay}/>
         </div>

         <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img src="/newhouse.png" alt="" />
            <h3 className="text-[1.34rem] text-[#212121] font-medium">Buy a New Home</h3>
            <p className="text-[#788593] max-w-[60%] text-center text-[1rem]">when an unknown printer took galley and scrambled itmakepe spear survived not five centuries</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/sellhouse.png" alt="" />
            <h3 className="text-[1.34rem] text-[#212121] font-medium">Sell a Home</h3>
            <p className="text-[#788593] max-w-[60%] text-center text-[1rem]">when an unknown printer took galley and scrambled itmakepe spear survived not five centuries</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/investhouse.png" alt="" />
            <h3 className="text-[1.34rem] text-[#212121] font-medium">Invest in Propety</h3>
            <p className="text-[#788593] max-w-[60%] text-center text-[1rem]">when an unknown printer took galley and scrambled itmakepe spear survived not five centuries</p>
          </div>
         </div>
    </div>

    {/*help people find the property section */}

    <div className="bg-[#2E429E] flex items-center py-[5%] px-[10%] ">

      <div className="flex  flex-col">
        <img className="w-2" src="/tiny-circle.png" alt="" />
        <h1 className="text-4xl mt-5 text-[#FFFFFF] font-bold">Helping People to Find</h1>
        <h1 className="text-4xl my-[1%] text-[#FFFFFF] font-bold">The</h1>
        <h1 className="text-4xl text-[#FFFFFF] font-bold">Right Property</h1>
        <p className="w-[90%] leading-6 mt-[3%] text-[0.932rem] text-[#FFFFFF] font-normal">Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist follower Over 39,000 people work for us in more.</p>

       <div className="items-center">
       <div className="flex gap-5 my-[5%] items-center ">
          <img className="w-[15%] h-[15%]" src="/home-img.png" alt="" />
          <div className="flex flex-col">
            <h3 className="text-[1.4rem] text-[#FFFFFF] font-medium">The Perfect Residency</h3>
            <p className="text-[1rem] leading-5 text-[#FFFFFF] font-normal w-[60%]">Lorem ipsum dolorsit amet consectetur eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div className="flex gap-5 items-center ">
          <img className="w-[15%] h-[15%]" src="/trust-img.png" alt="" />
          <div className="flex flex-col">
            <h3 className="text-[1.4rem] text-[#FFFFFF] font-medium">Trusted By Thousands</h3>
            <p className="text-[1rem] leading-5 text-[#FFFFFF] font-normal w-[60%]">Lorem ipsum dolorsit amet consectetur eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div className="flex gap-5 mt-[5%] items-center ">
          <img className="w-[15%] h-[15%]" src="/payment-img.png" alt="" />
          <div className="flex flex-col">
            <h3 className="text-[1.4rem] text-[#FFFFFF] font-medium">Total Payment Transparency</h3>
            <p className="text-[1rem] leading-5 text-[#FFFFFF] font-normal w-[60%]">Lorem ipsum dolorsit amet consectetur eiusmod tempor incididunt.</p>
          </div>
        </div>
       </div>
      </div>

      
      <img className="w-[55%]" src="/Section-img.png" alt="" />

    </div>


     {/* listing property areaaaaaa */}
     
       <ListingProperty/>


     {/*  blog page */}

           <BlogPage/>   
      
      {/* the empty white space */}
      <div className="bg-amber-50 h-48">
      </div>

      {/* footer */}

      <Footer/>
 </>
  )
}

export default Home