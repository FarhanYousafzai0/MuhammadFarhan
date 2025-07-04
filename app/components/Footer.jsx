import { Avatar } from '@mui/material'
import React from 'react'
import TextPressure from './ui/TextAnimations/TextPressure/TextPressure'
import Magnetic from './Magnetic'

export const Footer = () => {
  return (
    <>
    
    <div className='w-screen   bg-[#1C1D20]'>




<div className='p-5'


>

<div style={{position: 'relative', }}>
  <TextPressure
    text="Let's Work"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    className=' md:h-[300px] h-[100px]'
    textColor="#ffffff"
    strokeColor="black"
    minFontSize={40}
  />


</div>

<hr className='text-neutral-600 my-10'/>

<div className='flex md:flex-row flex-col md:items-center justify-center  gap-20  p-4 rounded-md'>

   <div className='flex flex-col md:flex-row items-center md:gap-5 gap-15'>

  <Magnetic> <span className=' border border-neutral-500 rounded-full px-10 text-white py-5 cursor-pointer '>coderwithferry@gmail.com</span></Magnetic>
 <Magnetic>  <span className=' border border-neutral-500 rounded-full px-10 text-white py-5 cursor-pointer '>+92 3197421574</span></Magnetic>
   </div>


   <Magnetic>  <div className="flex items-center justify-center cursor-pointer shadow-lg bg-[#FF6620] w-[150px] h-[150px] rounded-full text-white">Get in touch</div></Magnetic>

</div>



</div>




    </div>
    
    </>
  )
}
