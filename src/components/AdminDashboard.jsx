import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import StatCard from './StatCard';
import SalesChart from './SalesChart';


function AdminDashboard() {
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Top full-width bar */}
      <div className='w-full'>  

 <TopBar />

      </div>
     

      {/* Bottom: Sidebar + Content */}
      < div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content on the right */}
        <div className="flex flex-col p-4">
          {/* Stat cards */}
          <div className="flex flex-wrap gap-4 mt-4">
            <StatCard icon="apartment" heading="No. of Properties"   number="2,854"  percentage="7.34%"  day="4"/>
            <StatCard icon="groups" heading="Regi. Agents"   number="705"  percentage="76.89%"  day="4"/>
            <StatCard icon="person" heading="Customers"   number="9,431"  percentage="45.00%"  day="4"/>
            <StatCard icon="local_atm" heading="Revenue"   number="$78.3M"  percentage="8.76%"  day="4"/>
            
            
          </div>

          {/* Chart */}
          <div className="mt-6 flex flex-row">

            <div className='flex-1'>
                 <SalesChart />
            </div>

            <div className='flex flex-col'>

                <div className='bg-[#2E429E] font-[Figtree] flex flex-row p-3'>

                    <div className='flex flex-col'>
                        <h1 className=' font-bold text-[24px] text-white '>$117,000.43</h1>
                        <p className='text-[#FFFFFF80] font-normal'>My Balance</p>

                        <div className='flex flex-row'>

                            <div></div>
                            <div></div>
                        </div>


                    </div>

                    <div>

                    </div>


                </div>



            </div>
           
          </div>

          {/* Additional widgets if needed */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
