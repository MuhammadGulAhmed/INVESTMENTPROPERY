import { ArrowUp , ArrowDown } from 'lucide-react';

export default function StatCard({icon, heading , number , percentage , day}) {
  const data = [3,2.5, 4, 2.8, 2.9,4,2.6,]; // example bar values
const check= heading=="Customers"
  return (
    <div className="w-[371px] h-[173px] p-4 shadow rounded-md flex justify-between items-center">
      {/* Left icon + text */}
      <div className="flex flex-col justify-start  gap-4">
        {/* Icon box */}
        <div className="bg-blue-50 p-3 rounded-md flex items-center justify-center w-[56px] h-[56px]">
          {/* Placeholder for building icon */}
            <span class="material-symbols-outlined text-[#2E429E] " style={{fontSize:"45px"}}>
             {icon}
          </span>
          
        </div>

        {/* Text and stats */}
        <div>
          <p className="text-gray-500 text-sm">{heading}</p>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-800">{number}</h2>
            <span className={`  text-xs px-2  font-[12px]  font-[Figtree] font-medium py-0.5 rounded flex items-center gap-1 ${check? "bg-[#FBE1E1] text-[#E96767]" : "bg-green-100 text-green-600"}`}>
              {check?<ArrowDown className="w-3 h-3 stroke-[3]" /> : <ArrowUp className="w-3 h-3 stroke-[3]" />} {percentage}
            </span>
          </div>

        </div>

      </div>

<div>

 <div className="flex items-end gap-2 h-20">
        {data.map((value, i) => (
          <div
            key={i}
            className={`w-2 rounded-full ${
              i === Number(day)  ? 'bg-blue-700' : 'bg-[#eef2f7]'
            }`}
            style={{ height: `${value}rem` }}
          ></div>
        ))}
      </div>

      {/* Days */}
      <div className="top-1 right-0.5 relative flex gap-2 font-[Figtree] text-xs text-[#8486A7]">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

</div>
      {/* Bar chart */}
     
    </div>
  );
}
