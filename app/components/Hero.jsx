"use client";

import React from "react";
import Iridescence from "./ui/Backgrounds/Iridescence/Iridescence";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollVelocity from "./ui/TextAnimations/ScrollVelocity/ScrollVelocity";

export const Hero = () => {
  return (
   <div className="w-screen h-[100vh] flex flex-col items-center -z-10  bg-[#B3B3B3]">
  <div className="w-[80vw] h-[60vh] relative flex items-center justify-center ">
        {/* Heading */}
        <h4 className="text-[17vw] md:text-[12vw] -translate-x-1/2  -translate-y-1/2 absolute font-[500] z-30 md:top-20 top-10 left-1/2 text-nowrap -tracking-[1px] text-white uppercase">
          We create
        </h4>

        {/* Video Box */}
        <div className="md:w-[50%] h-[70%] sm:w-[80%] w-100 rounded-[40] overflow-hidden shadow-lg  relative">
        <Iridescence
  color={[1, 1, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
  
/>


        </div>
      </div>


   

<ScrollVelocity
  texts={['Muhammad-Farhan']} 
  velocity={70} 
  className="text-white flex items-center justify-center font-light md:text-[16vw] text-[5rem]"
/>
    </div> 
  );
};
