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
        <div className="flex-1 p-4">
          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <StatCard/>
            <StatCard/>
            <StatCard/>
            
          </div>

          {/* Chart */}
          <div className="mt-6">
            <SalesChart />
          </div>

          {/* Additional widgets if needed */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
