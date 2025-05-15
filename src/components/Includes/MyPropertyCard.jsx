import React from 'react';
import { Instagram } from 'lucide-react';

function MyPropertyCard({ name, address, img, bedrooms, bathrooms, squareFoot, floor, forSale }) {
  // Split the address to check if it contains details
  const addressParts = address ? address.split(', ') : [];
  const displayAddress = address || "Address not provided";

  return (
    <>
      <div className='card flex flex-col'>  {/* card start */}
        <div className='relative'>
          <div><img src={img} alt="Property" /></div>
          <div className='flex absolute top-2 left-2 gap-54'>
            <div className=''> 
              <Instagram className="bg-[#F0934E] p-2 rounded-[8px]" size={45} color="#FFFFFF" />
            </div>
            <div>
              <p className='py-1.5 text-nowrap rounded-xl font-semibold text-[#FFFFFF] text-[0.82rem] px-5 bg-[#F0934E]'>
                {forSale ? "For Sale" : "For Rent"}
              </p>
            </div>
          </div>
        </div>

        <div className='pt-4 flex'>
          <div className=''> 
            <Instagram className="bg-[#EEF2F7] p-4 rounded-[8px]" size={65} color="#2E429E" />
          </div>
          <div className='flex flex-col pl-3 justify-center'>
            <h1 className='text-[1rem] pb-1 font-medium text-[#323A46]'>{name || "Property Name"}</h1>
            <h2 className='text-[#687D92] text-[0.875rem] font-normal'>{displayAddress}</h2>
          </div>
        </div>

        <div className='homeinfo pt-5 grid grid-cols-3 gap-x-7 w-[20.5rem] gap-y-2.5 '>
          <div className='flex gap-2 items-center justify-center border-[2px] py-1 rounded-[6px] border-[#EAEDF1]'>
            <Instagram className="rounded-[8px]" size={22} color="#687D92" />
            <p className='text-[0.75rem] text-[#687D92] font-semibold'>{bedrooms || "0"} Beds</p>
          </div>
          <div className='flex gap-2 items-center justify-center border-[2px] py-1 rounded-[6px] border-[#EAEDF1]'>
            <Instagram className="rounded-[8px]" size={22} color="#687D92" />
            <p className='text-[0.75rem] text-[#687D92] font-semibold'>{bathrooms || "0"} Baths</p>
          </div>
          <div className='flex gap-2 items-center justify-center border-[2px] py-1 rounded-[6px] border-[#EAEDF1]'>
            <Instagram className="rounded-[8px]" size={22} color="#687D92" />
            <p className='text-[0.75rem] text-[#687D92] font-semibold'>{squareFoot || "0"} Sq Ft</p>
          </div>
          <div className='flex gap-2 items-center justify-center border-[2px] py-1 rounded-[6px] border-[#EAEDF1]'>
            <Instagram className="rounded-[8px]" size={22} color="#687D92" />
            <p className='text-[0.75rem] text-[#687D92] font-semibold'>Floor {floor || "0"}</p>
          </div>
        </div>
      </div>   {/* card end */}
    </>
  );
}

export default MyPropertyCard;