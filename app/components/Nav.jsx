"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight, X } from "lucide-react";
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
  .fromTo('links',{
    y:100
  },
{y:0,duration:0.05,ease:"bounce"})

  



},[isOpen])






  


  return (
    <>
      <div ref={ContainerRef} className="bg-orange-700 overflow-hidden w-screen h-[0px]   fixed top-0 left-0 z-50">
{/* Close Menu */}





<div onClick={()=>setIsOpen(false)} className="  bg-yellow-100 absolute top-[15px] right-[15px] cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <X className="text-orange-700" />
        </div>






      
       {/*  */}


<div className="flex flex-col  md:items-start  px-5  " >

{navItems.map((item,index)=>(

<Link onClick={()=>setIsOpen(!isOpen)} href={item?.link}><span key={index} className="text-yellow-100 links md:text-[7vw] text-[11vw] uppercase hover:text-white   cursor-pointer duration-500 transition-all  font-heading -leading-[1px] -tracking-[1px] ">{item?.name}</span>
</Link>

))}

</div>



<div className="flex md:flex-row md:gap-0 gap-5 flex-col md:items-center px-5 justify-between mt-10">

<span className="text-[8vw] md:text-6xl text-[
#999999]  uppercase flex items-center ">Let's Create<ArrowUpRight size={70}/></span>
<hr className="text-white" />
<div className="flex items-center gap-3 ">

<Link href={``}><p className="text-[7vw] md:text-2xl uppercase font-light text-yellow-100 flex items-center gap-2 ">GITHUB <ArrowUpRight size={40}/></p></Link>
<Link href={``}><p className="text-[7vw] uppercase md:text-2xl text-yellow-100 flex items-center gap-2 ">Linkedin <ArrowUpRight size={40}/></p></Link>

</div>
  
</div>



      </div>



{/* Nagation-bar */}
<div className="flex items-center fixed top-0 left-0 justify-between p-2 ">


<span
  onClick={() => setIsOpen(!isOpen)}
  className="hover:bg-orange-700 bg-black cursor-pointer text-white uppercase tracking-wide transition-all duration-300 ease-in-out px-8 py-3 rounded-full flex items-center justify-center"
>
  Menu
</span>



</div>



    </>
  );
};

export default Nav;
