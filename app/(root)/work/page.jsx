import Magnetic from '@/app/components/Magnetic'
import Nav2 from '@/app/components/Nav2'
import React from 'react'

export const page = () => {
  return (
    <>
    <Nav2/>
    <div className='w-screen h-screen  text-white'>

       <div className='md:w-[70%] w-[90%] py-10 mx-auto h-full '>


        <span className='md:text-8xl text-5xl text-black font-normal  '>
        Creating next level digital products
        </span>


        <div className=' flex items-center gap-4 mt-10 w-full'>
<Magnetic>
  <button className='bg-black rounded-full px-5 md:px-10 py-3 md:py-5 cursor-pointer text-white'>All</button>
</Magnetic>
<Magnetic>
  <button className='border-neutral-500 border rounded-full cursor-pointer px-5 md:px-10 py-3 md:py-5 text-black'>Design</button>
</Magnetic>
<Magnetic>
  <button className='border-neutral-500 border rounded-full cursor-pointer px-5 md:px-10 py-3 md:py-5 text-black'>Development</button>
</Magnetic>
        </div>
       </div>

    </div>
    
    </>
  )
}

export default page