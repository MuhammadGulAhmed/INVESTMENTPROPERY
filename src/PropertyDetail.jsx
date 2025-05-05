import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

import Slider from '@mui/material/Slider';

import HomeFilter from './components/HomeFilter'
import villa from '../src/assets/villa.jpg'
import imgs from '../src/assets/imgs.png'
import field from '../src/assets/field.png'
import room01 from '../src/assets/room01.png'
import room02 from '../src/assets/room02.png'
import room03 from '../src/assets/room03.png'
import garden1 from '../src/assets/garden1.png'
import plan from '../src/assets/plan.png'
import room04 from '../src/assets/room04.png'
import video01 from '../src/assets/Video.png'
import Footer from "./components/Footer";

import { 
  Instagram, 
} from 'lucide-react';

function PropertyDetail() {

  const [selected, setSelected] = useState("");

  return (
    <>
      <div className=''>

        <HomeFilter/>

        <div className='forsale px-15 pt-20 pb-15 flex items-center justify-center flex-col '>
            <div className=' pb-10 flex flex-col '>
              <p className=' py-2 text-center block w-[10rem] bg-[#8EDA53] rounded-xl text-[1.25rem] text-[#FFFFFF]'>For Sale</p>
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

            <div className='description flex  gap-13 pt-10'>
               <div className='discriptioninfo '>
                 <div>
                  <p className='text-[1.75rem] font-semibold pb-2 text-[#100E2C]'>Description</p>
                 </div>
                  <div>
                    <p className='text-[1rem] pb-3 w-3xl space-x-1 leading-6 font-normal text-[#000000]'> 
                      Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper.

                    </p>
                    <p className='text-[1rem] w-3xl leading-6 font-normal text-[#000000]'>
                    Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.
                    </p>
                  </div>

                <div>
                  <p className='text-[1.75rem] font-semibold py-4 text-[#100E2C]'>Property details</p>
                </div>
              <div className='listofdetails flex gap-8'>
                <div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-60'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px] gap-55 '>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>Yes</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px] gap-70 '>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Yes</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px] gap-55 '>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>Yes</p></div>
                  </div>
                </div>
                <div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-54'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>100 sq.ft</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-71'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-71'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>2</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-66'>
                    <div className='flex items-center gap-2'>
                      <Instagram className="cursor-pointer" size={22} color="#7A7474" />
                      <p className='text-[#7A7474] text-[1.25rem] font-medium'>Elevator</p>
                    </div>
                    <div className='text-[#000000] text-[1.25rem] font-medium'><p>3rd</p></div>
                  </div>
                  <div className='flex border-zinc-200 py-1.5 border-b-[1px]  gap-62.5'>
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

          <div className='whas-nearby flex gap-20 pt-10'>
            <div className='nearby detail'>
              <div>
                <h1 className='text-[1.75rem] mb-4 text-[#100E2C] font-semibold'>What's nearby</h1>
              </div>
                 <div className='mb-3'>
                    <div className='flex border-zinc-200 py-1 border-b-[1px] w-190'>
                      <div className='flex items-center gap-2'>
                        <Instagram className="cursor-pointer" size={22} color="#000000" />
                        <p className='text-[#000000] text-[1.25rem] font-medium'>Education</p>
                      </div>
                    </div>
                    <div className='flex  py-1.5 gap-130'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>Allen Academy</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                    <div className='flex  py-1.5 gap-125'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>St. Joseph School</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                    <div className='flex  py-1.5 gap-102'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>George Washington School</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                  </div>
                 <div className='mb-3'>
                    <div className='flex border-zinc-200 py-1 border-b-[1px] w-190'>
                      <div className='flex items-center gap-2'>
                        <Instagram className="cursor-pointer" size={22} color="#000000" />
                        <p className='text-[#000000] text-[1.25rem] font-medium'>Health & Medicine </p>
                      </div>
                    </div>
                    <div className='flex  py-1.5 gap-130'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>Allen Academy</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                    <div className='flex  py-1.5 gap-125'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>St. Joseph School</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                    <div className='flex  py-1.5 gap-102'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>George Washington School</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                  </div>
                 <div className='mb-3'>
                    <div className='flex border-zinc-200 py-1 border-b-[1px] w-190'>
                      <div className='flex items-center gap-2'>
                        <Instagram className="cursor-pointer" size={22} color="#000000" />
                        <p className='text-[#000000] text-[1.25rem] font-medium'>Food</p>
                      </div>
                    </div>
                    <div className='flex  py-1.5 gap-130'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>Allen Academy</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                    <div className='flex  py-1.5 gap-125'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>St. Joseph School</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                    <div className='flex  py-1.5 gap-102'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>George Washington School</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                  </div>
                 <div className='mb-3'>
                    <div className='flex border-zinc-200 py-1 border-b-[1px] w-190'>
                      <div className='flex items-center gap-2'>
                        <Instagram className="cursor-pointer" size={22} color="#000000" />
                        <p className='text-[#000000] text-[1.25rem] font-medium'>Culture</p>
                      </div>
                    </div>
                    <div className='flex  py-1.5 gap-130'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>Allen Academy</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                    <div className='flex  py-1.5 gap-125'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>St. Joseph School</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                    <div className='flex  py-1.5 gap-102'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#7A7474] text-[1.25rem] font-medium'>George Washington School</p>
                      </div>
                      <div className='text-[#000000] text-[1.25rem] font-medium'><p>0.0087 mile</p></div>
                    </div>
                  </div>
            </div>

            <div className='featuredlisting h-[45rem] flex flex-col shadow-xl p-10 rounded-2xl'>
                <div className='font-bold text-[1.75rem] pb-1 text-[#000000]'><p>Featured listings</p></div>
                <div className=''>
                    <p className='text-[#000000CC] text-[0.873rem] font-normal'>Leo morbi faucibus mattis pharetra tellus velit </p> 
                </div>
                
                <div className="about-property gap-3 py-2 flex items-center justify-center">
                  <div>
                    <img  src={field} alt="" />
                  </div>
                  <div>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>Division Road house</h1>
                    <h1 className='text-[0.75rem] text-[#7A7474] w-40 font-normal'>Division Road Pembroke Pines</h1>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>$250000</h1>
                  </div>
                </div>
                <div className="about-property gap-3 py-2 flex items-center justify-center">
                  <div>
                    <img src={room01} alt="" />
                  </div>
                  <div>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>North Road house </h1>
                    <h1 className='text-[0.75rem] text-[#7A7474] w-40 font-normal'>North Road Piscataway</h1>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>$222000</h1>
                  </div>
                </div>
                <div className="about-property gap-3 py-2 flex items-center justify-center">
                  <div>
                    <img src={room02} alt="" />
                  </div>
                  <div>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>Rockville Ave villa </h1>
                    <h1 className='text-[0.75rem] text-[#7A7474] w-40 font-normal'>Smoky Hollow St. Sulphur, LA 70663</h1>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>$212000</h1>
                  </div>
                </div>
                <div className="about-property gap-3 py-2 flex items-center justify-center">
                  <div>
                    <img src={room03} alt="" />
                  </div>
                  <div>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>Lees Creek house</h1>
                    <h1 className='text-[0.75rem] text-[#7A7474] w-40 font-normal'>Lees Creek St. Dayton</h1>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>$210000</h1>
                  </div>
                </div>
                <div className="about-property gap-3 py-2 flex items-center justify-center">
                  <div>
                    <img src={garden1} alt="" />
                  </div>
                  <div>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>Scotch Plains villa</h1>
                    <h1 className='text-[0.75rem] text-[#7A7474] w-40 font-normal'> Ohio Road Scotch Plains</h1>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>$114000</h1>
                  </div>
                </div>
              </div>
          </div>











          <div className='whas-nearby flex gap-10 pt-'>
            <div className='nearby detail pt-20'>
              
                 <div className='mb-3'>
                    <div className='flex gap-29 items-center w-200 bg-[#100E2C] rounded-xl'>
                      <div className='Apartment plan'>
                        <div className='py-20 pl-10'>
                          <h1 className='text-[1.75rem] pb-4 text-[#FFFFFF] font-semibold'>Apartment plan</h1>
                          <div>
                              <div className='flex gap-2 items-center'>
                                <Instagram className="cursor-pointer" size={22} color="#FFFFFF" />
                                <h1 className='text-[1.2rem] text-[#FFFFFF] font-semibold'>Fermentum ultricies in </h1>
                              </div>
                              <p className='text-[0.875rem] w-65 text-[#FFFFFF] font-normal'>Aliquam viverra malesuada dui consequat in cras</p>
                          </div>
                          <div className='py-4'>
                              <div className='flex gap-2 items-center'>
                                <Instagram className="cursor-pointer" size={22} color="#FFFFFF" />
                                <h1 className='text-[1.2rem] text-[#FFFFFF] font-semibold'>Dignissim ut rhoncus elit</h1>
                              </div>
                              <p className='text-[0.875rem] w-65 text-[#FFFFFF] font-normal'>Velit at netus pretium nibh bibendum sit posuere turpis </p>
                          </div>
                          <div>
                              <div className='flex gap-2 items-center'>
                                <Instagram className="cursor-pointer" size={22} color="#FFFFFF" />
                                <h1 className='text-[1.2rem] text-[#FFFFFF] font-semibold'>Dignissim ut rhoncus elit</h1>
                              </div>
                              <p className='text-[0.875rem] w-65 text-[#FFFFFF] font-normal'>Velit at netus pretium nibh bibendum sit posuere turpis </p>
                          </div>
                        </div>
                      </div>
                      <div><img className='w-88 h-88' src={plan} alt="" /></div>
                    </div>
                  </div>
                 
                 
                 
            </div>

            <div className='relatedproperty flex flex-col h-142 justify-center shadow-xl pt-0 px-5 pb-0 rounded-2xl'>
                <div className='font-bold text-[1.75rem] pb-1 text-[#000000]'><p>Related property</p></div>
                <div className=''>
                    <p className='text-[#000000CC] text-[0.873rem] font-normal'>Leo morbi faucibus mattis pharetra tellus velit  </p> 
                </div>
                
                <div className="about-property gap-3 py-2 items-center justify-center">
                  <div className='relative'>
                    <p className=' absolute top-3.5 left-2 py-2 text-center  block w-[10rem] bg-[#8EDA53] rounded-xl text-[1.25rem] text-[#FFFFFF]'>For Sale</p>
                    <img src={room04} alt="" />
                  </div>
                  <div>
                    <h1 className='text-[1rem] text-[#000000] w-40  font-semibold'>Luxury house in Las Vegas</h1>
                    <h1 className='text-[0.75rem] text-[#7A7474] w-40 font-normal'>7914 Lees Creek St. Dayton, LV 45420</h1>
                    <h1 className='text-[1rem] pb-2 border-b-[1px] border-zinc-100 text-[#000000]   font-semibold'>$250000</h1>
                  </div>
                </div>
                <div className='flex'>
                  <div className='rooms/washroom pr-7'>
                    <div className='flex gap-2 pb-1'>
                    <Instagram className="cursor-pointer" size={22} color="#000000" />
                    <p className='text-[#100E2C] text-[1rem] font-medium'>2</p>
                    </div>
                    <div>
                      <p className='text-[#100E2C] text-[0.875rem] font-medium'>Bedrooms</p>
                    </div>
                  </div>
                  <div className='rooms/washroom pr-7'>
                    <div className='flex gap-2 pb-1'>
                    <Instagram className="cursor-pointer" size={22} color="#000000" />
                    <p className='text-[#100E2C] text-[1rem] font-medium'>2</p>
                    </div>
                    <div>
                      <p className='text-[#100E2C] text-[0.875rem] font-medium'>Bedrooms</p>
                    </div>
                  </div>
                  <div className='rooms/washroom pr-7'>
                    <div className='flex gap-2 pb-1'>
                    <Instagram className="cursor-pointer" size={22} color="#000000" />
                    <p className='text-[#100E2C] text-[1rem] font-medium'>2</p>
                    </div>
                    <div>
                      <p className='text-[#100E2C] text-[0.875rem] font-medium'>Bedrooms</p>
                    </div>
                  </div>
                  <div className='rooms/washroom pr-7'>
                    <div className='flex gap-2'>
                    <Instagram className="cursor-pointer" size={22} color="#000000" />
                    <p className='text-[#100E2C] text-[1rem] font-medium'>2</p>
                    </div>
                    <div>
                      <p className='text-[#100E2C] text-[0.875rem] font-medium'>Bedrooms</p>
                    </div>
                  </div>
                 
                </div>
              </div>
          </div>
           
           <div className='video pt-5 text-[#100E2C] text-[1.75rem] font-semibold'>
            <div className='mr-294 pb-3'>
              <p >Video</p>
            </div>
            <div className='relative w-314'>
              <img src={video01} alt="" />
              <Instagram className="cursor-pointer absolute top-[48%] left-[50%]" size={22} color="#000000" />
            </div>
           </div>

           <div className="investmentdecision py-10 flex gap-10">
            <div className="investment w-152 p-7 border-[1px] border-zinc-200">
              <div>
                <p className='text-[1.5rem] font-semibold text-[#444444]'>Check your own investment according to your decision</p>
              </div>
             <div className="flex gap-2 py-10">
             <div className="w-33">
                <ReactFlagsSelect
                 selected={selected}
                 onSelect={(code) => setSelected(code)}
                 placeholder="Country"
                 searchable
                />
              </div>
              <div className="">
                <input className="py-2.5 pl-2 outline-none w-38 font-medium text-[1rem] rounded-[4px] border-[1px] border-zinc-100" type="text" placeholder="Amount in AED" />
              </div>
              <div className="">
                <input className="py-2.5 pl-2 outline-none w-38 font-medium text-[1rem] rounded-[4px] border-[1px] border-zinc-100" type="text" placeholder="Share %" />
              </div>
             </div>
             <div className="slider w-125">
                <p className="text-[1rem] pb-2 text-[#444444] font-medium">Check Price</p>
                <Slider/>
              </div>
              <div className="flex gap-110">
                <p className="text-[#000000] text-[1.1rem] font-medium">0</p>
                <p className="text-[#000000] text-[1.1rem] font-medium">190,000</p>
              </div>
            </div>
            <div className='payment w-152 p-2 pt-4 border-[1px] border-zinc-200 '>
              <div className=" flex flex-col pb-2 border-b-[1px] border-zinc-200 justify-center items-center">
                <p className="text-[0.688rem] pb-1 text-[#444444]">Montly Payment</p>
                <h3 className="text-[0.88rem] text-[#444444] font-bold">AED</h3>
                <h1 className="text-[1.6rem] font-bold text-[#444444]">1.89 Lakh</h1>
              </div>
              <div className=" flex flex-col pt-3 pb-2 border-b-[1px] border-zinc-200 justify-center items-center">
                <p className="text-[0.688rem] pb-1 text-[#444444]">Montly Payment</p>
                <h3 className="text-[0.88rem] text-[#444444] font-bold">AED</h3>
                <h1 className="text-[1.5rem] font-bold text-[#444444]">1.89 Lakh</h1>
              </div>
              <div className=" flex flex-col pb-2 pt-3 justify-center items-center">
                <p className="text-[0.688rem] pb-3 text-[#444444]">Payment Breakdown</p>
                <div className=" bg-[#2E429E] w-140">
                  <div className="w-100 bg-[#4F6AE6] py-3"></div>
                </div>
                <div className="flex gap-14 pt-5">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#4F6AE6] w-4 h-4"></div>
                    <p>Occupied</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#2E429E] w-4 h-4"></div>
                    <p>Available</p>
                  </div>
                </div>
                
              </div>
            </div>

           </div>
             
              <div className=" investment btn ml-240  ">
               <button className="py-3 px-15 rounded-[3px] font-medium text-[1.12rem] text-[#FFFFFF] bg-[#2E429E]">Start Investment</button>
              </div>

        </div>
          <Footer/>

        
      </div>
    </>
  )
}

export default PropertyDetail