import React from 'react'
import BlogCard from './BlogCard';
import { MoveRight } from 'lucide-react';
import Textoverlap from './Textoverlap';
import InvestmentBanner from './InvestmenBannner';
import Button from './Includes/Button.jsx';

function BlogPage() {
  const textoverlay=[{
id:2, heading:"Blogs" , paragraph1:"• What's New Trending" ,  paragraph2:"Latest Blog & Posts"

  }]

  const textoverlay2=[{
    id:4, heading:"Dream home" , paragraph1:"We can help you realize your dream of a new home" ,  paragraph2:"Looking for a dream investment?"
    
      }]
const investmentbanner=[{id:1, heading:"Dream home", heading2:"Looking for a dream Investment?", paragrapgh:"We can help you realize your dream of a new home", buttonname:"Explore Our Properties"}]

  return (
    <>

        <div className="flex flex-col items-center bg-[#F1F4FF] px-[12%] py-[5%]">
  <div className="w-full max-w-[1200px]">
    
    {/* Blog Header Row */}
    <div className="flex justify-between w-full  items-center mb-6">
      <Textoverlap textoverlay={textoverlay} />
     <Button name="See All Blogs"/>
    </div>
          

      {/*CARDs */}
              <div className="flex gap-4 items-center p-[2%] justify-center">
                
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
                
              </div>
              <div>
                
              </div>
              {investmentbanner.map(()=>(
                    <InvestmentBanner
                    key={investmentbanner.key}
                    heading={investmentbanner.heading}
                    heading2={investmentbanner.heading2}
                    paragrapgh={investmentbanner.paragrapgh}
                    buttonname={investmentbanner.buttonname}
                    
                    />

              ))}
             

             </div>

     <div className="flex flex-col bg-[#F1F4FF] px-[12%] py-[5%]">
      <div className=''>
      <div className="flex w-[73vw]  items-center  justify-around ">
       <div> <img src="/blog.png" alt="" /></div>
        <div><button className="text-[#FFFFFF] font-medium text-[0.93rem] bg-[#2E429E] rounded-sm py-[1rem] px-[4.2rem]">See All Blogs</button></div>
      </div>

      {/*CARDs */}
      <div className="flex gap-4 items-center p-[2%] justify-center">
        
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
        
      </div>
      </div>
      <div className="bg-[#0E2E50] xl:flex w-[100%] mt-[6%] mb-[-15%] text-center  m-auto items-center justify-center">
        <img src="/dream-investment.png" alt="" />
        <button className="text-[#FFFFFF] font-medium text-nowrap text-[0.93rem] bg-[#2E429E] rounded-sm py-[1.3rem] px-[5rem] ">See All Blogs</button>
      </div>

    </div>
    </>
  )
}

export default BlogPage