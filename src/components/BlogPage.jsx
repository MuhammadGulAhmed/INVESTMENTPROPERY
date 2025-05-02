import React from 'react'
import BlogCard from './BlogCard';
import { MoveRight } from 'lucide-react';


function BlogPage() {
  return (
    <>
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