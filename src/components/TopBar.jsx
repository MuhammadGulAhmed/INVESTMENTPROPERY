import { Search } from "lucide-react";
import NotificationIcon from './Notificationsicon';
import image from "../assets/LOGO.png"
export default function TopBar() {
     const notifications = [
        { id: 1, message: 'New message received', read: false },
        { id: 2, message: 'Meeting reminder', read: true },
        { id: 3, message: 'Task completed', read: false },
    ];

  return (
    <div className="h-[80px] grid grid-cols-[256px_auto] w-full bg-white items-center shadow">

        <div className="flex w-20 justify-center items-center h-3.5   left-1/2 relative -translate-x-1/2  z-20  ">

             <img className="w-20 shadow" src={image} alt="" />
            
        </div>
     
      <div className="flex justify-between ">
         <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
    <input
      type="text"
      placeholder="Search..."
      className="pl-9 h-10 font-[Figtree] text-[14px] bg-[#E8EDF1] py-1 rounded-md text-sm w-full border border-gray-300 focus:border-blue-900 focus:outline-none transition duration-200"

    />
  </div>
        <div className="flex flex-row items-center gap-3">
                <div className="self-center flex items-center">
                    <NotificationIcon notifications={notifications} />
                </div>
                  
                    <img
                    src="https://i.pravatar.cc/40?img=3"
                    alt="user"
                    className="w-8 h-8 rounded-full"
                    />
        </div>
      
      </div>
    </div>
  );
}
