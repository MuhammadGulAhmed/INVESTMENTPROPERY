import React from 'react'
import HomeFilter from './components/HomeFilter'
import villa from '../src/assets/villa.jpg'
import imgs from '../src/assets/imgs.png'
import { 
  Instagram, 
} from 'lucide-react';

function PropertyDetail() {
  return (
    <>
      <div className=''>

        <HomeFilter/>

        <div className='forsale px-15 pt-20 pb-15 flex items-center justify-center flex-col '>
            <div className=' pb-10 flex flex-col '>
              <p className=' py-3 text-center block w-[13vw] bg-[#8EDA53] rounded-xl text-[1.25rem] text-[#FFFFFF]'>For Sale</p>
              <div className='flex justify-between gap-100'>
                <div className='w-2/3'>
                  <h1 className='text-[#100E2C] pt-2 text-5xl font-semibold'>Amazing modern apartment</h1>
                  <p className='text-[1.25rem] text-[#000000CC] font-normal'>43 W. Wellington Road Fairhope, AL 36532</p>
                </div>
                <div>
                  <h1 className='text-[#100E2C] pt-2 text-5xl font-semibold'>190,000
                    <span className='text-[1.25rem] relative -top-2 left-2'>AED</span>
                  </h1>
                  <p className='text-[1.25rem] pl-30 text-[#000000CC] font-normal'>1200/sq.ft</p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-10'>
              <div>
                <img className='w-4xl h-[81%] bg-cover bg-no-repeat bg-center   rounded-2xl' src={villa} alt="" />
              </div>
              <div className='imgs  flex-col flex  '> 
                <div className='bg-cover flex flex-col justify-center items-center rounded-xl mb-4 w-100 h-64 bg-no-repeat bg-center bg-[url(/Imgs.png)]'>
                  <Instagram className="cursor-pointer" size={22} color="#FFFFFF" />
                  <h1 className='text-2xl py-1 font-bold text-[#FFFFFF]'>Show all</h1>
                  <p className='text-[1rem] font-normal text-[#FFFFFF]'>12 photos</p>
                </div>
                <div className=' flex flex-col justify-center items-center border-1 w-100 h-64 rounded-xl border-dashed  '>
                  <p className='text-[1rem] pb-2 font-normal text-[#000000]'>Upload Photo/Video</p>
                  <Instagram className="cursor-pointer" size={22} color="#000000" />
                  <p className='text-[1rem] py-2 font-normal text-[#000000]'>Drag and Drop here</p>
                  <p className='text-[1rem] pb-2 font-normal text-[#000000]'>or</p>
                  <button className='text-[1rem] font-normal text-center px-8 rounded-[0.3rem] py-2 text-[#FFFFFF] bg-[#2E429E]'>Select File</button>


                </div>
              </div>
            </div>

            <div className='description flex  gap-16 pt-10'>
               <div className='discriptioninfo '>
               <div>
                <p className='text-[1.75rem] font-semibold pb-2 text-[#100E2C]'>Description</p>
               </div>
                <div>
                  <p className='text-[1rem] pb-3 w-3xl space-x-1 leading-6 font-normal text-[#000000]'> 
                    Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper.

                  </p>
                  <p className='text-[1rem] w-3xl space-x-1 leading-6 font-normal text-[#000000]'>
                  Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.
                  </p>
                </div>

              <div>
                <p className='text-[1.75rem] font-semibold py-4 text-[#100E2C]'>Property details</p>
              </div>
              <div className='listofdetails flex gap-10'>
                <div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-70'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px] gap-65 '>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>Yes</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px] gap-80 '>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Yes</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px] gap-65 '>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>Yes</p></div>
                  </div>
                </div>
                <div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-65'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>100 sq.ft</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-81'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-81'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-76'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>3rd</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-72.5'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2020</p></div>
                  </div>
                </div>
               </div>
            </div>

              <div className='contactagentbox flex flex-col bg-[#100E2C] p-10 rounded-2xl'>
                <div className='font-bold text-[1.75rem] pb-5 text-[#FFFFFF]'><p>Contact agent</p></div>
                <div className='flex gap-3.5'>
                  <div className='w-15 h-15 rounded-full bg-amber-50'></div>
                  <div>
                    <p className='text-[#FFFFFF] text-[1rem] font-medium'>Emilia Buck</p>
                    <p className='text-[#FFFFFFCC] text-[0.875rem] font-normal'>(437) 402-2459</p>
                    <p className='text-[#FFFFFFCC] text-[0.875rem] font-normal'>rsmartin@optonline.net</p>
                  </div>
                </div>
                <div className='input py-5'>
                  <input className='bg-[#FFFFFF] border-none outline-none text-[1rem] font-normal text-[#00000099] rounded-[6px] pl-4 w-80 py-2.5' type="text" placeholder='Your name' />
                </div>
                <div>
                 <input className='bg-[#FFFFFF] border-none outline-none text-[1rem] font-normal text-[#00000099] rounded-[6px] pl-4 w-80 py-2.5' type="text" placeholder='Your mail' />
                </div>
                <div className='py-5'>
                 <input className='bg-[#FFFFFF] border-none outline-none text-[1rem] font-normal text-[#00000099] rounded-[6px] pl-4 w-80 py-2.5' type="text" placeholder='Your phone' />
                </div>
                <div>
                 <textarea className='bg-[#FFFFFF] border-none outline-none text-[1rem] font-normal text-[#00000099] rounded-[6px] pl-4 w-80 h-30 py-2.5' type="text" placeholder='Your message' name="" id=""></textarea>
                </div>
                <div className='pt-5'>
                 <button className='text-[1.25rem] font-medium text-center w-43 rounded-[0.375rem] py-2 text-[#FFFFFF] bg-[#0057FF]'>Send message</button>
                </div>
              </div>
          </div>

          <div>puujnn</div>


        </div>

        <div>puujnnjnjnjn</div>
      </div>
    </>
  )
}

export default PropertyDetail