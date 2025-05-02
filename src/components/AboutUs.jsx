import React from 'react'
import MainPage from './MainPage'
import Footer from './Footer'
import image from "../assets/Aboutimage.png"
import image2 from "../assets/Aboutimage2.png"
import image3 from "../assets/Aboutimage3.png"
import CustomLinearProgress from './CustomizedProgressbar'
import { useInView } from 'react-intersection-observer'
import VideoPlayer from './Videoplayer'

function AboutUs() {
  const { ref: progressRef, inView } = useInView({
    triggerOnce: true, // load once when in view
    threshold: 0.5     // trigger when 50% of the component is visible
  });
  return (
    <div>
      <MainPage/>
   
      <div className=' grid grid-cols-2 px-[12%] py-[5%] gap-15'>


          <div>
            <img src={image} alt="" />
          </div>

          <div className='flex flex-col gap-6 '>

                <div>
                  <h1 className='text-[15px] text-[#2E429E] font-medium font-Ubuntu'>ABOUT US</h1>
                  <h2 className='text-[26px] text-[#212121] font-bold font-Ubuntu '>We're on a Mission to Change View of RealEstate Field.</h2>
                  <p className='text-[16px] font-normal text-[#70778A] font-Roboto'>when an unknown printer took a galley of type and scrambled it to make type specimen bookt has survived not only five centuries alsoey jequery the leap into electronic typesetting.</p>
                </div>

              
                <div className='flex flex-row'>

                          <div className='flex flex-col'>

                                  <span className="material-icons" style={{ fontSize: '48px', color: '#2E429E' }}>
                                          apartment
                                  </span>

                                  <div>
                                    <h1 className='text-[22px] text-[#212121] font-medium'>Modern Villa</h1>
                                    <p className='text-[16px] font-normal text-[#70778A] font-Roboto leading-[30px]'>when unknown printer took galley
                                    of type and scrambled.</p>
                                  </div>

                            
                          </div>

                          <div className='flex flex-col'>

                                  <span className="material-icons" style={{ fontSize: '48px', color: '#2E429E' }}>
                                          apartment
                                  </span>

                                  <div>
                                    <h1 className='text-[22px] text-[#212121] font-medium'>Modern Villa</h1>
                                    <p className='text-[16px] font-normal text-[#70778A] font-Roboto  leading-[30px]'>when unknown printer took galley
                                    of type and scrambled.</p>
                                  </div>


                          </div>

                </div>

          



          </div>

          <div className='flex flex-col gap-15 py-10'>

                    <div>
                      <h1 className='text-[15px] text-[#2E429E] font-medium font-Ubuntu'>Company Power</h1>
                      <h2 className='text-[26px] text-[#212121] font-bold font-Ubuntu '>The Core Company Values Of Our main Goal</h2>
                      <p className='text-[16px] font-normal text-[#70778A] font-Roboto'>when an unknown printer took a galley of type and scrambled it to make type specimen bookt has survived.</p>
                    </div>
                    
                    <div className='flex flex-col gap-5'>

                    <div  ref={progressRef}>
                    {inView && <CustomLinearProgress value={70} />}
                    <label htmlFor="" className='text-black text-[16px] font-medium font-Roboto'>Modern Technology</label>
                    
                    </div>

                    <div  ref={progressRef}>
                    {inView && <CustomLinearProgress value={90} />}
                    <h1 className='text-black text-[16px] font-medium font-Roboto'>Tax Solution Area</h1>
                    </div>



                    </div>
                    

              </div>

          <div>
            {/* <img src={image2} alt="" /> */}
            <VideoPlayer></VideoPlayer>

          </div>


      </div>

      <div
      className="bg-cover bg-center h-[400px] px-[12%] py-[5%] flex items-center justify-center "
      style={{ backgroundImage: `url(${image3})` }}  >
      {/* Your content here */}

                    <div className='flex flex-row justify-center items-center content-center gap-5  '>
                          <div className='bg-white flex flex-col px-[4%] py-[4%] gap-5'>
                                <span className='text-[#2E429E] uppercase font-black font-Ubuntu'>. Let’s Take a Tour</span>
                                <span className='text-black font-bold text-[28px] ' >Search Property Smarter, Quicker & Anywhere</span>

                                <div className='flex flex-row items-center content-center  gap-3'>

                                          <div>
                                                    <span class="material-icons text-[#2E429E]" style={{ fontSize: '48px'}}>
                                                    play_circle
                                                </span>
                                          </div>

                                          <div>
                                              <span className='text-[14px] font-Roboto font-semibold text-[#70778B]'>Play Video</span>
                                          </div>
                                      
                                  
                                </div>
                          </div>

                          <h1 className='text-[85px] font-Inter font-normal text-white'>Property For All</h1>
                    </div>
      
    </div>
     <Footer/>
     
    </div>
    
  )
}

export default AboutUs