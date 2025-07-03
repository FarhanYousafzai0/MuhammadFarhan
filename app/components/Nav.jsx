"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight, CircleChevronDown, Globe, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";

const navData = {
  en: [
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Let's Talk", link: "#contact" },
  ],
  ur: [
    { name: "تعارف", link: "#about" },
    { name: "کام", link: "#work" },
    { name: "آئیے بات کریں", link: "#contact" },
  ],
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const ContainerRef = useRef(null);
  const globeRef = useRef(null);

  const navItems = navData[lang];

  // GSAP timeline
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.to(ContainerRef.current, {
      height: isOpen ? "700px" : "0px",
      duration: 0.5,
    }).fromTo(
      ".links",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.3 },
      "-=0.4"
    );
  }, [isOpen]);

  // 🌐 Animate globe on language toggle
  const toggleLanguage = () => {
    gsap.fromTo(
      globeRef.current,
      { rotate: 0 },
      { rotate: 360, duration: 0.6, ease: "power2.inOut" }
    );
    setLang((prev) => (prev === "en" ? "ur" : "en"));
  };

  return (
    <>
      {/* Overlay Menu */}
      <div
        ref={ContainerRef}
        className="bg-[#FF6620] overflow-hidden w-screen h-[0px] fixed top-0 left-0 z-50"
      >
        {/* Close Menu */}
        <div
          onClick={() => setIsOpen(false)}
          className="bg-yellow-100 absolute top-[15px] right-[15px] cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center"
        >
          <X className="text-orange-700" />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col md:items-start px-5 mt-16">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index} onClick={() => setIsOpen(false)}>
              <span className="text-yellow-100 links md:text-[7vw] text-[11vw] uppercase hover:text-white cursor-pointer transition-all font-heading leading-none tracking-tight">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex md:flex-row md:gap-0 gap-5 flex-col md:items-center px-5 justify-between mt-10">
          <span className="text-[8vw] md:text-6xl text-white uppercase flex items-center">
            {lang === "en" ? "Let's Create" : "چلو بنائیں"} <ArrowUpRight size={70} />
          </span>

          <div className="flex items-center gap-3">
            <Link href="#">
              <p className="text-[7vw] md:text-2xl uppercase font-light text-yellow-100 flex items-center gap-2">
                GITHUB <ArrowUpRight size={40} />
              </p>
            </Link>
            <Link href="#">
              <p className="text-[7vw] uppercase md:text-2xl text-yellow-100 flex items-center gap-2">
                LinkedIn <ArrowUpRight size={40} />
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Top Navbar */}
      <div className="flex items-center fixed top-5 left-0 w-full z-50  justify-between px-4 py-2">
        {/* Language Toggle */}

<div className="flex items-center gap-3">

<span className="text-white ">©Code By Farhan</span>




</div>


        
        {/* Menu Button */}
       <Magnetic> <span
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-black group  cursor-pointer overflow-hidden text-white uppercase tracking-wide transition-all duration-300 ease-in-out px-8 py-3 rounded-full flex items-center gap-1"
        >
         
          Menu
          <CircleChevronDown size={15}/>

        </span></Magnetic>
      </div>
    </>
  );
};

export default Nav;
