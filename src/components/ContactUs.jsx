import React from 'react'
import BlogPage from './BlogPage'
import HomeFilter from './HomeFilter'
import { MapPin , Phone , Share2 } from 'lucide-react';
import image from "../assets/ContactUsimg.jpg"
import Footer from './Footer';
import { useState } from 'react';

function ContactUs() {

  const [form, setForm] = useState({
    name: '',
    phone: '',
    comments: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace with actual form submission logic
    alert('Message sent!');
  };


  return (
    <>
     <HomeFilter/>
     <div className='flex flex-col justify-center items-center gap-20 px-[12%] py-[5%] '>


     <div className=' flex  gap-10  '>

<div className='flex flex-col gap-5'>

  <div>
    <h1 className='text-[26px] font-[Ubuntu] font-medium'>Get in Touch</h1>
    <p className='text-[15px] font-[Roboto] font-normal text-[#70778B]'>Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.</p>
  </div>

  <div
  className="relative z-10 overflow-hidden rounded-[10px] flex flex-row gap-5 border border-[#E4E9F2] p-9 bg-white shadow-[0px_11px_35px_0px_#C2C8D552]
             before:content-[''] before:absolute before:inset-0 before:bg-blue-900 before:scale-x-0 before:origin-left
             before:transition-transform before:duration-500 hover:before:scale-x-100
             before:z-[-10]  text-black hover:text-white transition-colors duration-500"
><div className=''>

<div className="w-15 h-15 border-2 border-[#E4E9F2] rounded-full bg-[#F9FBFE] flex items-center justify-center">
    <MapPin className="text-blue-700 transition-colors duration-500 group-hover:text-white" />
  </div>

</div>
  
  <div className="flex flex-col gap-1 ">
    <h2 className="text-[15px] font-medium font-[Roboto] text-[#70778B]">Location</h2>
    <h1 className="text-[18px] font-medium font-[Roboto]">131 Martens Place, Alexandra Hills, Australia.</h1>
  </div>
</div>
    


  <div className="relative  z-10 overflow-hidden rounded-[10px] flex flex-row gap-5 border border-[#E4E9F2] p-9 bg-white shadow-[0px_11px_35px_0px_#C2C8D552]
             before:content-[''] before:absolute before:inset-0 before:bg-blue-900 before:scale-x-0 before:origin-left
             before:transition-transform before:duration-500 hover:before:scale-x-100
             before:z-[-10] text-black hover:text-white transition-colors duration-500">
  
<div className=''>
<div className='w-15 border-[2px] border-solid border-[#E4E9F2]  h-15 rounded-full bg-[#F9FBFE] flex items-center justify-center '>
<Phone color="blue" />
</div>
        
</div>



<div className='flex flex-col gap-1 '>
<h2 className='text-[15px] font-medium font-[Roboto] text-[#70778B]'>Emergency Call</h2>
<h1 className='text-[18px] font-medium font-[Roboto]'>+86 21 6137 9292</h1>
</div>

</div>



<div className="relative z-10 overflow-hidden rounded-[10px] flex flex-row gap-5 border border-[#E4E9F2] p-9 bg-white shadow-[0px_11px_35px_0px_#C2C8D552]
             before:content-[''] before:absolute before:inset-0 before:bg-blue-900 before:scale-x-0 before:origin-left
             before:transition-transform before:duration-500 hover:before:scale-x-100
             before:z-[-10] text-black hover:text-white transition-colors duration-500">
  

<div className=' '>

<div className='w-15 border-[2px] border-solid border-[#E4E9F2]  h-15 rounded-full bg-[#F9FBFE] flex items-center justify-center'>
<Share2 color="blue" />
</div>
        
 

</div>

<div className='flex flex-col gap-1 '>
<h2 className='text-[15px] font-medium font-[Roboto] text-[#70778B]'>Follow Us On</h2>
<h1 className='text-[18px] font-medium font-[Roboto]'>131 Martens Place, Alexandra Hills, Australia.</h1>
</div>
</div>



</div>

<div style={{ boxShadow: '0px 11px 35px 0px #C2C8D552' }} className="max-w-xl mx-auto p-8 border rounded-lg shadow-md bg-white border-[1px border-solid border-[#E4E9F2] rounded-[10px]">
<h2 className="text-2xl font-bold mb-2">Quick Contact</h2>
<p className="text-gray-500 mb-6">
Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.
</p>

<form onSubmit={handleSubmit} className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label className="block text-sm font-medium text-[#A7A7A7] mb-1">Name *</label>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      required
      className="w-full p-2 border rounded border-[#E4E9F2] bg-gray-50"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-[#A7A7A7] mb-1">Phone *</label>
    <input
      type="text"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      required
      className="w-full p-2 border border-[#E4E9F2] rounded bg-gray-50"
    />
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-[#A7A7A7] mb-1">Comments *</label>
  <textarea
    name="comments"
    value={form.comments}
    onChange={handleChange}
    required
    className="w-full p-2 border border-[#E4E9F2] rounded bg-gray-50  resize-none"
    rows="5"
  />
</div>

<button
  type="submit"
  className="w-full bg-blue-800 text-white py-3 font-[Mulish] rounded hover:bg-blue-900 tracking-wide font-medium"
>
  SEND MESSAGE
</button>
</form>
</div>



     </div>

    <div>
    <img src={image} alt="" />
    </div>
       

    


</div>
    

    
    <Footer/>

    </>
   
   
  )
}

export default ContactUs