import React from 'react'
import Magnetic from './Magnetic'

const Services = () => {
  return (
    <div className='w-screen h-screen bg-[#f1f1f1]  p-5 md:p-20'>
      
<div className='w-full h-full  flex md:flex-row flex-col gap-5'>


<div className='w-full h-ful'><span className='text-neutral-800 md:text-3xl text-2xl max-w-md '><span className='text-[#FF6620]'>Empowering</span> brands to lead in the digital age.
Together, we redefine what’s possible — no fluff, just forward-thinking</span></div>


<div className='flex flex-col gap-10 md:items-center  w-full h-full '>


    <p className='text-black max-w-xs md:ml-20 leading-6'>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>





  <Magnetic>  <div className="flex items-center justify-center cursor-pointer shadow-lg bg-[#FF6620] w-[150px] h-[150px] rounded-full text-white">About me</div></Magnetic>
</div>
</div>



    </div>
  )
}

export default Services
