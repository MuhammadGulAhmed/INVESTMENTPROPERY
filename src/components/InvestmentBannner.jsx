import React from 'react';

const InvestmentBanner = ({ heading, heading2, paragrapgh, buttonname }) => {
  return (
    <div className="flex justify-center items-center py-10  lg:mb-[-5rem] xl:mb-[-18%] ">
      <div className="relative bg-[#0D2A52] text-white px-10 py-8 w-[1120px] rounded shadow-lg">
        {/* Background large text */}
        <h1 className="absolute text-[80px] text-[#ffffff1a] font-bold -bottom-2 left-9 select-none pointer-events-none">
          {heading}
        </h1>

        <div className="flex justify-between items-center relative z-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">{heading2}</h2>
            <p className="text-sm">{paragrapgh}</p>
          </div>
          <button className="cursor-pointer transition-colors duration-300 ease-in-out bg-[#2E429E] hover:bg-[#000000] text-white text-sm px-6 py-3 rounded">
            {buttonname}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentBanner;
