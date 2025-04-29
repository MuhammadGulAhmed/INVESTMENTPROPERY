import React from 'react'

function SocialLogin({page, instructions}) {
  return (
    <>
      <div>
            <h1 className='text-[#03014C] text-4xl font-bold my-3.5'>{page}</h1>
            <p className='text-[#03014C] text-[0.9rem] min-w-[40%] md:w-[78%] '>
              {instructions}
            </p>
          </div>
    </>
  )
}

export default SocialLogin