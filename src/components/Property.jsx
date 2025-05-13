import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';


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
       
      </div>
    </div>
  );
}

export default AdminDashboard;
