import React, { useState } from 'react';
import HomeFilter from './HomeFilter';
import { Wallet, ChartNoAxesColumn, ChevronDown } from 'lucide-react';
import ChartComponent from './ChartComponent';
import PropertCard from "./PropertyCard"
import Footer from './Footer';

function VerticalToggleTabs({ active, setActive }) {
  const options = ['Investment', 'Total Loss'];

  return (
    <div className="flex flex-col items-end mb-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setActive(option)}
          className={`flex justify-between items-center w-40 px-4 py-2 rounded-md text-sm font-medium
            ${active === option ? 'bg-gray-100 text-gray-700' : 'bg-gray-50 text-gray-400'}
            hover:bg-gray-200 transition-all`}
        >
          {option}
          {active === option && <ChevronDown size={16} />}
        </button>
      ))}
    </div>
  );
}

function Assets1() {
  const [activeTab, setActiveTab] = useState('Investment');

  return (
    <>
      <HomeFilter />
      <div className="px-[5%] py-[5%] flex flex-col gap-12  ">
        <div className="grid grid-cols-[40%_auto] gap-10 ">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-9.5 ">
            <h1 className="text-[40px] font-medium text-[#323236]">My Wallet</h1>

            {/* Currency Box */}
            <div className="flex flex-row p-5 gap-10 items-center bg-[#2E429E] border border-[#E4E9F2] rounded-[10px] transition-all duration-300 hover:scale-105 hover:bg-[#1e3185]">
              <Wallet size="60px" color="#A6B2F0" />
              <div>
                <h2 className="text-[20px] font-medium text-[#E6EAFF]">Currency</h2>
                <h1 className="text-[32px] font-medium text-white">AED 20,321</h1>
              </div>
            </div>

            {/* Shares Box */}
            <div className="flex flex-row p-5 gap-10 items-center bg-[#2E429E] border border-[#E4E9F2] rounded-[10px] transition-all duration-300 hover:scale-105 hover:bg-[#1e3185]" >
              <ChartNoAxesColumn size="60px" color="#A6B2F0" />
              <div>
                <h2 className="text-[20px] font-medium text-[#E6EAFF]">Shares</h2>
                <h1 className="text-[32px] font-medium text-white">AED 15,500</h1>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            <VerticalToggleTabs active={activeTab} setActive={setActiveTab} />
            <ChartComponent activeTab={activeTab} />
          </div>
        </div>

        <div className='flex flex-col gap-5'>

            <h1 className='text-[24px] font-medium font-[Poppins]'>Recent Investment</h1>
            <div className='flex flex-row  justify-between'>

                    <PropertCard/>
                    <PropertCard/>
            </div>

        </div>




      </div>
      <Footer/>
    </>
  );
}

export default Assets1;
