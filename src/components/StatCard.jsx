import { ArrowUpRight } from 'lucide-react';

export default function StatCard() {
  const data = [3, 4, 2.5, 2.8, 2.9, 2.6, 2]; // example bar values

  return (
    <div className="w-[371px] h-[173px] p-4 border  rounded-md flex justify-between items-center">
      {/* Left icon + text */}
      <div className="flex flex-col justify-start  gap-4">
        {/* Icon box */}
        <div className="bg-blue-50 p-3 rounded-md flex items-center justify-center w-[56px] h-[56px]">
          {/* Placeholder for building icon */}
            <span class="material-symbols-outlined text-[#2E429E] " style={{fontSize:"45px"}}>
             apartment
          </span>
          
        </div>

        {/* Text and stats */}
        <div>
          <p className="text-gray-500 text-sm">No. of Properties</p>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-800">2,854</h2>
            <span className="text-green-600 bg-green-100 text-xs px-2 py-0.5 rounded flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> 7.34%
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
              i === 4 ? 'bg-blue-700' : 'bg-[#eef2f7]'
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
