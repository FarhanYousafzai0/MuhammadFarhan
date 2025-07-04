"use client";

import React, { useState, useRef, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { navItems } from "../data";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuRef = useRef();
  const sidebarRef = useRef();
  const sidebarContentRef = useRef();
  const { y: currentScrollY } = useWindowScroll();
  const timelineRef = useRef();

  useEffect(() => {
    if (!MenuRef.current) return;

    if (currentScrollY > 0) {
      MenuRef.current.classList.remove("opacity-0");
      MenuRef.current.classList.add("opacity-100");
    } else {
      MenuRef.current.classList.add("opacity-0");
      MenuRef.current.classList.remove("opacity-100");
    }
  }, [currentScrollY]);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;

    tl.to(sidebarRef.current, {
      width: "600px",
      duration: 0.6,
      ease: "power3.inOut",
    })
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);

    if (!timelineRef.current) return;

    if (!isOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  };

  return (
    <>
      <div className="flex items-center bg-[#B3B3B3] w-full z-50 justify-between px-6 md:px-12 py-10">
        <div className="flex items-center gap-3">
       <Link href={`/`}>   <span className="text-white cursor-pointer">©Code By Farhan</span></Link>
        </div>

        <ul className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <Magnetic key={index}>
              <Link href={item?.link}>
                <li className="text-white xl:block hidden relative group">
                  {item?.name}
                  <span className="w-[5px] h-[5px] group-hover:opacity-100 opacity-0 absolute transition-all duration-300 -bottom-3 left-1/2 rounded-full bg-white"></span>
                </li>
              </Link>
            </Magnetic>
          ))}
          <Magnetic>
            <li onClick={()=>toggleSidebar()} className="text-white xl:hidden flex items-center gap-1">
              <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
              Menu
            </li>
          </Magnetic>
        </ul>
      </div>

      <button
        ref={MenuRef}
        onClick={toggleSidebar}
        className="group bg-[#FF6620] fixed top-5 right-7 z-50 opacity-0  transform transition-opacity duration-500 cursor-pointer overflow-hidden w-[70px] h-[70px] rounded-full flex items-center flex-col justify-center gap-1"
      >
        <span className="w-7 h-[1px] bg-white z-40  "></span>
        <span className="w-4 h-[1px] bg-white z-40  "></span>
        <span className="w-7 h-[1px] bg-white z-40  "></span>
      </button>

      <div
        ref={sidebarRef}
        className="w-[0px] h-screen  bg-[#1C1D20] fixed right-0 top-0 overflow-hidden z-40"
      >
       

<ul className="flex flex-col items-end gap-4 p-13 relative" >
<li className="text-white xl:block text-7xl hidden relative group">
                  Home
                  <span className="block h-[2px] bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out origin-left mt-3"></span>

                </li>
{navItems.map((item, index) => (
                  
              <Link href={item?.link}>
                <li className="text-white text-7xl relative group overflow-hidden">
  {item?.name}
  <span className="block h-[2px] bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out origin-left mt-3"></span>
</li>

              </Link>
           
          ))}
</ul>




<div className="p-13 ">
<p className="font-extralight text-xs text-neutral-500">Soicals</p>


<div className="flex items-center gap-6 mt-3">
<Link href={`https://x.com/Farhankhana804`}> <p className="text-white text-sm">Twitter</p></Link>
<Link href={``}> <p className="text-white text-sm">Linkedin</p></Link>
<Link href={`https://github.com/FarhanYousafzai0`}> <p className="text-white text-sm">Github</p></Link>
<Link href={`https://www.linkedin.com/in/farhan-yousafzai-8a1363352/`}> <p className="text-white text-sm">+92 3197421574</p></Link>


</div>
</div>
      </div>
    </>
  );
};

export default Nav;
