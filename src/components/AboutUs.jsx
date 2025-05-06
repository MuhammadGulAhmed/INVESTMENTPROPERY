import React, { useState } from 'react'
import MainPage from './MainPage'
import Footer from './Footer'
import image from "../assets/Aboutimage.png"
import image2 from "../assets/Aboutimage2.png"
import image3 from "../assets/Aboutimage3.png"
import CustomLinearProgress from './CustomizedProgressbar'
import { useInView } from 'react-intersection-observer'
import VideoPlayer from './Videoplayer'
import Textoverlap from './Textoverlap'
import AgentCard from './AgentCard'
import imageo1 from "../assets/Agent1.jpg"
import imageo2 from "../assets/Agent2.jpg"
import imageo3 from "../assets/Agent3.jpg"
import imageo4 from "../assets/Agent4.jpg"
import BlogPage from './BlogPage'
import video from "../assets/sample.mp4"
import HomeFilter from './HomeFilter'
import { motion, AnimatePresence } from 'framer-motion';

function AboutUs() {
  const { ref: progressRef, inView } = useInView({
    triggerOnce: true, // load once when in view
    threshold: 0.5     // trigger when 50% of the component is visible
  });

  const [play,setplay]=useState(false)
  const handleclick= ()=>{
    setplay(true)
  }
  const textoverlay=[{
    id:3, heading:"Our Agents" , paragraph1:"Expertise Is Here" ,  paragraph2:"Our Exclusive Agetns"
    
      }]

      const agents = [
        {
          id: 1,
          name: "Andren Willium",
          agency: "Sunshine",
          phone: "+121 511 4522",
          listings: "08",
          image: imageo1 // Replace with the correct local or external image path
        },        {
          id: 1,
          name: "Polly Matzinger",
          agency: "Sweet Home",
          phone: "+121 179 4865",
          listings: "06",
          image: imageo2 // Replace with the correct local or external image path
        },
        {
          id: 1,
          name: "Patty Watson",
          agency: "Eco Builders",
          phone: "+121 584 6254",
          listings: "11",
          image: imageo3 // Replace with the correct local or external image path
        },
        {
          id: 1,
          name: "Sarah Boysen",
          agency: "Mark Street",
          phone: "+121 458 4621",
          listings: "07",
          image: imageo4 // Replace with the correct local or external image path
        }
        // Add more agents here if needed
      ];

  return (
    <div>
      <HomeFilter page="aboutus"/>
     
      <div className='flex w-full flex-col justify-center items-center '>

             <div className=' grid grid-cols-2 px-[12%] py-[5%] max-w-[2500px] mx-auto  gap-10 '>

    <div className='flex flex-col'>

          <div>
            <img src={image} alt="" />
          </div>

          <div className='flex flex-col gap-15 py-10'>

  <div>
    <h1 className='text-[15px] text-[#2E429E] font-medium font-Ubuntu'>Company Power</h1>
    <h2 className='text-[26px] text-[#212121] font-bold font-Ubuntu '>The Core Company Values Of Our main Goal</h2>
    <p className='text-[16px] font-normal text-[#70778A] font-Roboto'>when an unknown printer took a galley of type and scrambled it to make type specimen bookt has survived.</p>
  </div>

  <div className='flex flex-col gap-5'>

  <div  className='' ref={progressRef}>
  {inView && <CustomLinearProgress value={70} />}
  <label htmlFor="" className='text-black text-[16px] font-medium font-Roboto'>Modern Technology</label>

  </div>

  <div className=''  ref={progressRef}>
  {inView && <CustomLinearProgress value={90} />}
  <h1 className='text-black text-[16px] font-medium font-Roboto'>Tax Solution Area</h1>
  </div>



  </div>


          </div>

    </div>

    <div className='flex flex-col gap-10'>
    <div className='flex flex-col gap-6 '>

<div>
  <h1 className='text-[15px] text-[#2E429E] font-medium font-Ubuntu'>ABOUT US</h1>
  <h2 className='text-[26px] text-[#212121] font-bold font-Ubuntu '>We're on a Mission to Change View of RealEstate Field.</h2>
  <p className='  text-[16px] font-normal text-[#70778A] font-Roboto'>when an unknown printer took a galley of type and scrambled it to make type specimen bookt has survived not only five centuries alsoey jequery the leap into electronic typesetting.</p>
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
                  real_estate_agent
                  </span>

                  <div>
                    <h1 className='text-[22px] text-[#212121] font-medium'>Modern Villa</h1>
                    <p className='text-[16px] font-normal text-[#70778A] font-Roboto  leading-[30px]'>when unknown printer took galley
                    of type and scrambled.</p>
                  </div>


          </div>

</div>





</div>

     <div className='flex self-start'>
      {/* <img src={image2} alt="" /> */}
      <VideoPlayer></VideoPlayer>

    </div>
    </div>
   
    

   

    


          </div>

          

          

      </div>
   
      <div
  className="bg-cover bg-center h-[400px] px-[12%] py-[5%] flex items-center justify-center"
  style={{ backgroundImage: `url(${image3})` }}
>
  <div className="flex flex-row justify-between items-center content-center gap-5">
    <AnimatePresence mode="wait">
      {!play ? (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`bg-white relative flex flex-col px-[4%] py-[4%] gap-5 w-[500px] rounded-xl`}
        >
          <span className="text-[#2E429E] uppercase font-black font-Ubuntu">. Let’s Take a Tour</span>
          <span className="text-black font-bold text-[28px]">Search Property Smarter, Quicker & Anywhere</span>

          <div className="flex flex-row items-center content-center gap-3">
            <span
              onClick={handleclick}
              className="cursor-pointer material-icons text-[#2E429E]"
              style={{ fontSize: '48px' }}
            >
              play_circle
            </span>
            <span className="text-[14px] font-Roboto font-semibold text-[#70778B]">Play Video</span>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="video"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className=" relative px-[4%] py-[4%] w-[600px] rounded-xl"
        >
          <video
            src={video}
            controls
            autoPlay
            onPause={() => setplay(false)}
            className="w-full h-auto rounded-xl"
          />
        </motion.div>
      )}
    </AnimatePresence>

    <h1
      className="text-[85px] font-Inter font-normal text-white text-nowrap"
    >
      Property For All
    </h1>
  </div>

      </div>

      <div className='flex flex-col justify-center gap-8 px-[12%] py-[5%]  '>

         <Textoverlap textoverlay={textoverlay}/>
         <div className='flex flex-row justify-center'>

         {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          name={agent.name}
          agency={agent.agency}
          phone={agent.phone}
          listings={agent.listings}
          image={agent.image}
        />
      ))}

         </div>



          </div>

    

     

    <div className='mb-20'>
      <BlogPage/>
    </div> 

    <div className=''>
      <Footer/>
    </div>
    
     
    </div>
    
  )
}

export default AboutUs