import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircleGauge, ArrowLeftRight, Building2 } from 'lucide-react';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: CircleGauge, path: '/dashboard' },
    { key: 'transactions', label: 'Transactions', icon: ArrowLeftRight, path: '/Transactions' },
    { key: 'property', label: 'Property', icon: Building2, path: '/property' },
  ];

  return (
    <div className="w-64 bg-blue-900 flex flex-col items-center border-r text-white min-h-screen p-4 z-10">
      {menuItems.map(({ key, label, icon: Icon, path }) => {
        const isActive = location.pathname === path;

        return (
          <Link
            to={path}
            key={key}
            className={`flex rounded-[8px] p-4 w-full mb-3 cursor-pointer transition-all duration-300 ease-in-out gap-3 items-center ${
              isActive ? 'bg-white shadow-md' : 'hover:bg-blue-800'
            }`}
          >
            <div className="flex px-5">
              <Icon
                color={isActive ? '#2E429E' : '#ffffff'}
                size="18px"
                className="stroke-[3] transition-all duration-300 ease-in-out"
              />
            </div>
            <div>
              <h1
                className={`font-[Poppins] font-medium text-[14px] text-start transition-all duration-300 ease-in-out ${
                  isActive ? 'text-[#2E429E]' : 'text-white'
                }`}
              >
                {label}
              </h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
