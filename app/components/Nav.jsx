"use client";

import React, { useState, useRef, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { ArrowUpRight, CircleChevronDown, Globe, X } from "lucide-react";
import Magnetic from "./Magnetic";
import { navItems } from "../data";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuRef = useRef();
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (!MenuRef.current) return;

    if (currentScrollY > 20) {
      MenuRef.current.classList.remove( "opacity-0");
      MenuRef.current.classList.add( "opacity-100");
    } else {
      MenuRef.current.classList.add( "opacity-0");
      MenuRef.current.classList.remove( "opacity-100");
    }
  }, [currentScrollY]);

  return (
    <>
    <div className="flex items-center   w-full z-50 justify-between px-6 md:px-12 py-10">
      <div className="flex items-center gap-3">
        <span className="text-white">©Code By Farhan</span>
      </div>

    <ul className="flex items-center gap-8">
{navItems.map((item,index)=>(

<Link href={item?.link}><li key={index} className="text-white xl:block hidden">{item?.name}</li></Link>

))}
<li  className="text-white block xl:hidden">Menu</li>

    </ul>
    </div>
    
    <Magnetic>
        <button
          ref={MenuRef}
          onClick={() => setIsOpen(!isOpen)}
          className="group  bg-black fixed top-5 right-7  opacity-0 transform transition-opacity duration-500 cursor-pointer overflow-hidden w-[70px] h-[70px] rounded-full flex items-center flex-col justify-center gap-1"
        >
          <span className="w-7 h-[1px] bg-white z-40"></span>
          <span className="w-7 h-[1px] bg-white z-40"></span>
        </button>
      </Magnetic>
    
    
    
    </>



  );
};

export default Nav;
