"use client"


import React, { useEffect, useState } from 'react'
import TextPressure from './ui/TextAnimations/TextPressure/TextPressure'
import Magnetic from './Magnetic'
import Link from 'next/link'

export const Footer = () => {
    const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // set to true for AM/PM
        timeZone: "Asia/Karachi",
      };

      const dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "Asia/Karachi",
      };

      const formattedTime = new Intl.DateTimeFormat("en-PK", timeOptions).format(now);
      const formattedDate = new Intl.DateTimeFormat("en-PK", dateOptions).format(now);

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
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




<div className='flex items-center justify-between h-[100px] '>


<div className='flex items-center gap-4 '>

<div className='flex flex-col gap-2'>
<span className='text-neutral-500 text-xs uppercase font-lighter'>Local Time</span>
<p className="text-white text-xs uppercase">{time}</p>

</div>
<div className='flex flex-col gap-2'>
<span className='text-neutral-500 text-xs uppercase font-lighter'>Day & Data</span>
<p className="text-white text-xs uppercase">{date}</p>

</div>
</div>



    <div className='flex flex-col gap-1'>

        <span className='text-neutral-500 text-xs uppercase font-lighter'>Soicals</span>

        <div className="flex items-center gap-6 mt-3">
<Link href={`https://x.com/Farhankhana804`}> <p className="text-white text-xs uppercase">Twitter</p></Link>
<Link href={``}> <p className="text-white text-xs uppercase">Linkedin</p></Link>
<Link href={`https://github.com/FarhanYousafzai0`}> <p className="text-white text-xs uppercase">Github</p></Link>
<Link href={`https://www.linkedin.com/in/farhan-yousafzai-8a1363352/`}> <p className="text-white text-xs uppercase">+92 3197421574</p></Link>


</div>
    </div>



</div>

</div>




    </div>
    
    </>
  )
}
