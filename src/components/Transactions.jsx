import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import StatCard from './StatCard';
import SalesChart from './SalesChart';
import TransactionsTable from './TransactionsTable';


function Transactions() {
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

        {/* code for transactions on the right */}
         <TransactionsTable/>
        
      </div>
    </div>
  );
}

export default Transactions;
