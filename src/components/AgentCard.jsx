import React from "react";
import { PhoneCall } from "lucide-react";

const AgentCard = ({ name, agency, phone, listings, image }) => {
  return (
    <div className="w-[250px] rounded-xl   bg-white p-8 ">
      <div className="relative ">
        <img
          src={image}
          alt={name}
          className="w-[237px] h-[240px] rounded-bl-4xl rounded-full   object-cover"
        />
        <span className="absolute bottom-2 left-2.5 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-[8px]">●</span> {listings} Listing
        </span>
      </div>
      <h3 className="text-[20px] text-left font-bold font-Ubuntu text-[#212121] mt-4">{name}</h3>
      <p className="text-[15px] text-left text-[#788593] text-Roboto font-medium ">{agency}</p>
      <div className="flex flex-row content-center  gap-2 text-sm text-gray-700 mt-2">
       <PhoneCall size={16} className=" m-0 relative top-1 text-blue-600" />
      
        <p className="text-[15px] text-[#788593] font-normal font-Roboto ">Call: {phone}</p>
      </div>
    </div>
  );
};

export default AgentCard;
