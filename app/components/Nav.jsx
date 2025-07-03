"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { navItems } from "../data";

const Nav = () => {
 

  const [isOpen, setIsOpen] = useState(false);

const ContainerRef = useRef(null);


useGSAP(()=>{
const tl = gsap.timeline();
  tl.to(ContainerRef.current, {
    height: isOpen ? "700px" : "0px",
    duration: 0.5,
    ease: "power2.inOut",
  })

  




},[isOpen])




  


  return (
    <>
      <div ref={ContainerRef} className="bg-orange-700 overflow-hidden w-screen h-[0px]   fixed top-0 left-0 z-50">
{/* Close Menu */}





<div onClick={()=>setIsOpen(false)} className="  bg-yellow-100 absolute top-[15px] right-[15px] cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <X className="text-orange-700" />
        </div>






      
       {/*  */}


<div className="flex flex-col md:items-end items-start  px-5 mt-[4rem] " >

{navItems.map((item,index)=>(

<span className="text-yellow-100 md:text-[7vw] text-[11vw] uppercase font-heading -tracking-[1px] ">{item?.name}</span>
))}

</div>



<div className="flex items-center justify-between"></div>

      </div>



{/* Nagation-bar */}
<div className="flex items-center justify-between p-2 ">

<span className="border-2 border-black p-3 px-7 border-r-0 border-b-0
   flex items-center justify-center">
Muhammad Farhan
</span>
<span onClick={()=>setIsOpen(!isOpen)}  className="bg-orange-700 cursor-pointer text-yellow-100 transition-all duration-300 ease-in-out px-7 py-3 rounded-full flex items-center justify-center">Menu</span>


</div>



    </>
  );
};

export default Nav;
