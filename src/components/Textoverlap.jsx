import React from 'react'

function Textoverlap({textoverlay}) {
    if (!Array.isArray(textoverlay)) {
        return <p>Invalid data</p>; // or return null
      }
  return (
    
    textoverlay.map((Object) => {
        const isHighlighted = Object.id === 1;
        
        return (
          <div className="relative mb-10">
            {/* Background Text */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           text-[5rem] md:text-[8rem] text-[#0E2E50]/10 font-bold z-0 
                           pointer-events-none select-none">
              {Object.heading}
            </h1>
      
            {/* Label */}
            <p className={`text-[#2E429E] text-[15px] font-[Ubuntu] font-extrabold md:text-base uppercase mb-1 z-10 relative ${isHighlighted ? 'text-center -top-3' : ''}`}>
              {Object.paragraph1}
            </p>
      
            {/* Main Heading */}
            <h2 className={`text-2xl md:text-4xl font-extrabold z-10 relative ${isHighlighted ? 'text-black' : 'text-[#0E2E50]'}`}>
                    {Object.paragraph2}
            </h2>


             
          </div>
        )
      })
    )
      
}

export default Textoverlap