"use client";

import React, { useEffect, useRef } from "react";
import Magnetic from "./Magnetic";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
 // Adjust path based on your setup

gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "chars",
      linesClass: "chars",
    });

    gsap.from(split.chars, {
    
      opacity: 0,
      duration: 3,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        scrub:true
      },
    });
  }, []);

  return (
    <div className="w-screen h-auto bg-[#f1f1f1] p-5 md:p-20">
      <div className="w-full h-full flex md:flex-row flex-col gap-5">
        {/* Left animated text */}
        <div className="w-full md:h-full">
          <p
            ref={textRef}
            className="text-neutral-800 md:text-3xl text-2xl max-w-md service-text "
          >
            <span className="text-[#FF6620]">Empowering</span> brands to lead in
            the digital age. Together, we redefine what’s possible — no fluff,
            just forward-thinking.
          </p>
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-10 md:items-center w-full md:h-full">
          <p className="text-black max-w-xs md:ml-20 leading-6">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>

          <Link href={`/about`}>
            <Magnetic>
              <div className="flex items-center justify-center cursor-pointer shadow-lg bg-[#FF6620] w-[150px] h-[150px] rounded-full text-white">
                About me
              </div>
            </Magnetic>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
