"use client";

import React from "react";
import Iridescence from "./ui/Backgrounds/Iridescence/Iridescence";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
   <div className="w-screen h-screen flex flex-col items-center -z-10 justify-center bg-[#B3B3B3]">
      <div className="w-[90vw] h-[70vh] relative flex items-center justify-center mt-20">
        {/* Heading */}
        <h4 className="text-[17vw] md:text-[15vw] -translate-x-1/2 -translate-y-1/2 absolute font-[500] z-50 md:top-20 top-10 left-1/2 text-nowrap -tracking-[1px] text-white uppercase">
          We create
        </h4>

        {/* Video Box */}
        <div className="md:w-[50%] h-[60%] sm:w-[80%] w-100 rounded-[40] overflow-hidden shadow-lg  relative">
        <Iridescence
  color={[1, 1, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
  
/>


        </div>
      </div>


      <div className="flex items-center w-full md:justify-between p-4">

        <span className="text-black hidden uppercase md:block font-light text-xs">@2025BuilbyMuhammadFarhan</span>
     

     <div className="flex items-center flex-col gap-2">
         
    <Link href={`https://github.com/FarhanYousafzai0`}> <span className="text-black uppercase flex items-center gap-1 tracking-[2px]">Github <ArrowUpRight/></span></Link>
        
    <Link href={`https://www.linkedin.com/in/farhan-yousafzai-8a1363352/`}> <span className="text-black uppercase flex items-center gap-1 tracking-[2px]">Linkedin <ArrowUpRight/></span></Link>
     </div>
      </div>
    </div> 
  );
};
