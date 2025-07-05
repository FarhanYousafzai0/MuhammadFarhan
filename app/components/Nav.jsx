"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowScroll } from "react-use";
import { navItems } from "../data";
import Magnetic from "./Magnetic";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const menuRef = useRef(null);
  const { y: scrollY } = useWindowScroll();
  const timelineRef = useRef(null);

  // Show menu button on scroll
  useEffect(() => {
    if (!menuRef.current) return;

    if (scrollY > 0) {
      menuRef.current.classList.remove("opacity-0");
      menuRef.current.classList.add("opacity-100");
    } else {
      menuRef.current.classList.add("opacity-0");
      menuRef.current.classList.remove("opacity-100");
    }
  }, [scrollY]);

  // GSAP Sidebar Animation
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;

    tl.to(sidebarRef.current, {
      width: "40%",
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
    if (!timelineRef.current) return;

    isOpen ? timelineRef.current.reverse() : timelineRef.current.play();
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-[#B3B3B3] px-6 md:px-12 py-6">
        <Link href="/">
          <span className="text-white cursor-pointer">©Code By Farhan</span>
        </Link>

        <ul className="flex items-center gap-8">
          {/* Desktop Nav */}
          {navItems.map((item, index) => (
            <Magnetic key={index}>
              <Link href={item.link}>
                <li className="text-white xl:block hidden relative group cursor-pointer">
                  {item.name}
                  <span className="w-[5px] h-[5px] group-hover:opacity-100 opacity-0 absolute -bottom-3 left-1/2 transition-all duration-300 rounded-full bg-white"></span>
                </li>
              </Link>
            </Magnetic>
          ))}

          {/* Mobile Menu Toggle */}
          <Magnetic>
            <li
              onClick={toggleSidebar}
              className="text-white xl:hidden flex items-center gap-1 cursor-pointer"
            >
              <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
              Menu
            </li>
          </Magnetic>
        </ul>
      </div>

      {/* Floating Menu Button (scroll based) */}
      <button
  ref={menuRef}
  onClick={toggleSidebar}
  className="fixed top-5 right-7 z-50 opacity-0 transition-opacity duration-500 cursor-pointer w-[70px] h-[70px] bg-[#FF6620] rounded-full flex items-center justify-center"
>
  {/* Two lines that turn into X */}
  <div className="relative w-10 h-3">
    {/* Line 1 */}
    <span
      className={`absolute left-0 top-1/2 w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
      }`}
    />
    {/* Line 2 */}
    <span
      className={`absolute left-0 top-1/2 w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.1"
      }`}
    />
  </div>
</button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="w-[0px] h-screen fixed top-0 right-0 bg-[#1C1D20] z-40 overflow-hidden transition-all duration-500"
      >
        <div className="flex flex-col justify-between h-full p-8">
          {/* Nav Links */}
          <ul className="flex flex-col items-end gap-6">
            {[
              { name: "Home", link: "/" },
              ...navItems,
            ].map((item, index) => (
              <Link href={item.link} key={index}>
                <li onClick={()=>toggleSidebar()} className="text-white text-4xl sm:text-6xl md:text-7xl font-light group relative cursor-pointer">
                  {item.name}
                  <span className="block h-[2px] bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out mt-3"></span>
                </li>
              </Link>
            ))}
          </ul>

          {/* Social Links */}
          <div className="text-right">
            <p className="text-xs text-neutral-500 mb-3">Socials</p>
            <div className="flex flex-col gap-2 text-xs text-white items-end">
              <Link href="https://x.com/Farhankhana804">Twitter</Link>
              <Link href="https://www.linkedin.com/in/farhan-yousafzai-8a1363352/">LinkedIn</Link>
              <Link href="https://github.com/FarhanYousafzai0">Github</Link>
              <Link href="tel:+923197421574">+92 3197421574</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
