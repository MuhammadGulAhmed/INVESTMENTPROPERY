import React from 'react'
import HomeFilter from './components/HomeFilter'
import ListingProperty from './components/ListingProperty'
import BlogPage from './components/BlogPage'
import Footer from './components/Footer'

function PropertyListing() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <HomeFilter/>
      <ListingProperty/>
      <BlogPage/>
      <div className='w-full h-48 bg-amber-50 '></div>
      <Footer/>
    </div>
  )
}

export default PropertyListing