import React from 'react'
import BlogCard from './BlogCard';
import { MoveRight } from 'lucide-react';
import Textoverlap from './Textoverlap';


function BlogPage() {
  const textoverlay=[{
id:2, heading:"Blogs" , paragraph1:"• What's New Trending" ,  paragraph2:"Latest Blog & Posts"

  }]

  return (
    <>
         <div className="flex flex-col items-center bg-[#F1F4FF] px-[12%] py-[5%]">
                    <div className='w-[100%]'>

                    <div className="flex items-center w-[100%]  justify-between  ">
                                
                          <Textoverlap textoverlay={textoverlay}/>

                        <button className="text-[#FFFFFF] font-medium text-[0.93rem] bg-[#2E429E] rounded-sm py-[1rem] px-[4.2rem]">See All Blogs</button>
            </div>

                   
          

      {/*CARDs */}
              <div className="flex gap-4 items-center p-[2%] justify-center">
                
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
                
              </div>


              <div className="bg-[#0E2E50] xl:flex  mt-[6%] mb-[-15%] text-center  m-auto items-center justify-center">
                    <img src="/dream-investment.png" alt="" />
                    <button className="text-[#FFFFFF] font-medium text-nowrap text-[0.93rem] bg-[#2E429E] rounded-sm py-[1.3rem] px-[5rem] ">See All Blogs</button>
             </div>

             </div>
    </div>
    </>
  )
}

export default BlogPage