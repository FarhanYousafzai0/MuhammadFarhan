import { Avatar } from '@mui/material'
import React from 'react'
import TextPressure from './ui/TextAnimations/TextPressure/TextPressure'

export const Footer = () => {
  return (
    <>
    
    <div className='w-screen h-screen  bg-[#1C1D20]'>

<div className='md:px-40 md:py-15 p-5'>


<div style={{position: 'relative', height: '500px'}}>
  <TextPressure
    text="Let's Work"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="black"
    minFontSize={40}
  />
</div>


</div>




    </div>
    
    </>
  )
}
