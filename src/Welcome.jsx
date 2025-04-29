import React from 'react'
import { Link } from 'react-router-dom';
import "./App.css"

function Welcome() {
  return (
   <>
   <Link to="/Login">
   <div className='bg-[#F1F4FF] fixed inset-0 flex items-center justify-center overflow-hidden  '>
      
      <img src="/listing-property.png" alt="" />
      
  </div>
   </Link>
   </>
  )
}

export default Welcome