import React from 'react'
import PropertyCard from './PropertyCard';
import Textoverlap from './Textoverlap';
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

function ListingProperty() {
  const textoverlay=[{
   id:1, heading:"Speciality" , paragraph1:"What we Do" ,  paragraph2:"Our Main Speciality"
    
      }]
  return (
    <>
       <div className="flex flex-col bg-[#FFFFFF] items-center justify-center">
          <div className='py-13'>
            <Textoverlap textoverlay={textoverlay}/>
          </div>

          {/* CARDS PROPERTYYYYY LISTING */}

         <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-[2%]">

           <PropertyCard/>
           <PropertyCard/>
           <PropertyCard/>
           <PropertyCard/>
           <PropertyCard/>
           <PropertyCard/>
           <PropertyCard/>
           <PropertyCard/>
           <PropertyCard/>
           <PropertyCard/>

         </div>

         <button className="text-[#FFFFFF] font-medium text-[0.93rem] bg-[#2E429E] mt-[3%] mb-[5%] rounded-sm py-[1rem] px-[4rem]">Explore More</button>
    </div>

    </>
  )
}

export default ListingProperty