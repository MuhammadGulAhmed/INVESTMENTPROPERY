import React from 'react'

function Textoverlap({textoverlay}) {
    if (!Array.isArray(textoverlay)) {
        return <p>Invalid data</p>; // or return null
      }
  return (
    
    textoverlay.map((Object) => {
        const isHighlighted = Object.id === 1;
        const isHighlighted2 = Object.id === 2;
        const isHighlighted3 = Object.id === 3;
        const isHighlighted5 = Object.id === 5;
        
        
        return (
          <div className="relative mb-10">
            {/* Background Text */}
            <h1 className={`absolute top-1/2 left-1/2 -translate-x-1/2 text-nowrap -translate-y-1/2 text-[5rem] md:text-[8rem] 
                          font-bold z-0 
                           pointer-events-none select-none ${ isHighlighted5? " text-[#FFFFFF]/17 font-[Inter]" : " text-[#0E2E50]/10  "} `}>
              {Object.heading}
            </h1>
      
            {/* Label */}
            <p className={`text-[#2E429E] text-[15px]    md:text-base  mb-1 z-10 relative  ${ isHighlighted5? "text-white font-[Mulish] font-medium" : "uppercase font-extrabold  font-[Ubuntu]"} ||   ${isHighlighted2 ? 'left-3' : ''} || ${isHighlighted ? 'text-center -top-3 ' : ''} || ${isHighlighted3 ? 'text-center' : ''}`}>
              {Object.paragraph1}
            </p>
      
            {/* Main Heading */}
            <h2 className={`text-2xl md:text-4xl font-extrabold z-10 relative  ${ isHighlighted5? " text-white font-[Ubuntu] top-10" : "  "} ${isHighlighted2 ? 'left-1' : ''} || ${isHighlighted ? 'text-black' : 'text-[#0E2E50]'} || ${isHighlighted3 ? 'text-center' : ''}`}>
                    {Object.paragraph2}
            </h2>


             
          </div>
        )
      })
    )
      
}

export default Textoverlap