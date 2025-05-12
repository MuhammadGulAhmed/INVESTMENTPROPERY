import React from 'react'

function Sidebar() {
  return (
             <div className="w-64 bg-blue-900  border-r text-white min-h-screen   p-4 z-10">
      <div className="text-xl font-bold mb-6">🏠 Dashboard</div>
      <ul>
        <li className="mb-4 hover:text-gray-300">Dashboard</li>
        <li className="mb-4 hover:text-gray-300">Transactions</li>
        <li className="mb-4 hover:text-gray-300">Property</li>
      </ul>
    </div>
  )
}

export default Sidebar