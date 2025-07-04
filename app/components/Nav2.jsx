
"use client"
import React from 'react'
import { navItems } from '../data'
import Magnetic from './Magnetic'
import Link from 'next/link'

const Nav2 = () => {
  return (
    <div className="flex items-center  w-full z-50  justify-between px-6 md:px-12 py-10">
    <div className="flex items-center gap-3">
     <Link href={`/`}> <span className="text-black">©Code By Farhan</span></Link>
    </div>

    <ul className="flex items-center gap-8">
      {navItems.map((item, index) => (
        <Magnetic key={index}>
          <Link href={item?.link}>
            <li className="text-black xl:block hidden relative group">
              {item?.name}
              <span className="w-[5px] h-[5px] group-hover:opacity-100 opacity-0 absolute transition-all duration-300 -bottom-3 left-1/2 rounded-full bg-black"></span>
            </li>
          </Link>
        </Magnetic>
      ))}
      <Magnetic>
        <li  className="text-black xl:hidden flex items-center gap-1">
          <span className="w-[6px] h-[6px] bg-black rounded-full"></span>
          Menu
        </li>
      </Magnetic>
    </ul>
  </div>
  )
}

export default Nav2
