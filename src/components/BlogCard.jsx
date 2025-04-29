import React from 'react'
import { MoveRight } from 'lucide-react';

function BlogCard() {
  return (
    <>
       <div className="bg-[#FFFFFF] flex flex-col pl-[2.5%] py-[2%] rounded-lg ">{/*card start */}
         <img className="w-[90%]" src="/relation-img.png" alt="" />
         <img className=" w-[23%] mt-[-2rem] " src="/datee.png" alt="" />
          <div className="flex gap-5 items-center mt-[4%]">
            <img src="/grey-circle.png" alt="" />
            <p className="text-[#788593] text-[1rem] font-normal ">Real-estate</p>
            <img src="/grey-circle.png" alt="" />
            <p className="text-[#788593] text-[1rem] font-normal ">1 Min</p>
          </div>
          <p className=" font-bold leading-[1.6rem] w-[70%] text-[1.4rem] mt-[2%] text-[#212121] ">Develop Relationships With Human Resource</p>
            <div className="flex gap-3 mt-[3%] items-center">
              <p className="text-[#788593] font-normal text-[0.9rem]">Read More </p>
              <MoveRight size={16} color="#2E429E" />
            </div>
        </div> {/*card end */}
    </>
  )
}

export default BlogCard