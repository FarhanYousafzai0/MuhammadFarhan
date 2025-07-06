'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../common/Button';
import Magnetic from '../Magnetic';
import Link from 'next/link';

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out',
          });
          setIsActive(false);
        },
      },
    });
  }, []);

  return (
    <>
      {/* HEADER */}
      <div
        ref={header}
        className="absolute top-0 w-full z-10 px-9 py-6 flex justify-between items-center font-light overflow-x-hidden"
      >
        {/* LOGO */}
        <Link href="/" passHref legacyBehavior>
          <a className="flex cursor-pointer">
            <p className="transition-all duration-500">©</p>
            <div className="flex relative overflow-hidden whitespace-nowrap ml-1 transition-all duration-500 pr-0 group hover:pr-8">
              <p className="transition-transform duration-500 group-hover:-translate-x-full">
                Code by
              </p>
              <p className="pl-[0.3em] transition-transform duration-500 absolute left-[65px] group-hover:-translate-x-[65px]">
                Farhan
              </p>
              <p className="pl-[0.3em] transition-transform duration-500 absolute left-[120px] group-hover:-translate-x-[65px]">
                Yousafzai
              </p>
            </div>
          </a>
        </Link>

        {/* NAV */}
        <div className="hidden md:flex items-center">
          {['Work', 'About', 'Contact'].map((label) => (
            <Magnetic key={label}>
              <div className="relative flex flex-col items-center px-4 py-2 cursor-pointer">
                <Link href={`/${label.toLowerCase()}`}>{label}</Link>
                <div className="absolute top-[45px] left-1/2 w-[5px] h-[5px] bg-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 -translate-x-1/2"></div>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>

      {/* BURGER BUTTON (Visible on mobile only) */}
      <div
        ref={button}
        className="fixed right-0 z-40 scale-0 md:scale-100 transition-transform"
      >
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="relative m-5 w-[80px] h-[80px] rounded-full bg-[#1c1d20] flex items-center justify-center cursor-pointer"
        >
          <div
            className={`w-full relative z-10 before:block before:content-[''] before:w-[40%] before:h-[1px] before:bg-white before:mx-auto before:relative before:top-[5px] before:transition-transform after:block after:content-[''] after:w-[40%] after:h-[1px] after:bg-white after:mx-auto after:relative after:top-[-5px] after:transition-transform ${
              isActive
                ? 'before:rotate-[-45deg] before:top-[0px] after:rotate-[45deg] after:top-[-1px]'
                : ''
            }`}
          ></div>
        </Rounded>
      </div>

      {/* NAVIGATION MENU (if active) */}
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
