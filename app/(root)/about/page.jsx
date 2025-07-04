"use client";

import Nav2 from "@/app/components/Nav2";
import SpotlightCard from "@/app/components/ui/Components/SpotlightCard/SpotlightCard";
import { Experience } from "@/app/data";

import Image from "next/image";
import React from "react";

export const Page = () => {
  return (
    <>
      <Nav2 />
      <div className="w-screen text-white">
        <div className="md:w-[80%] w-[90%] py-10 mx-auto h-full">
          <span className="md:text-7xl max-w-sm text-5xl text-black font-normal">
            Helping clients thrive <br />
            in the digital world
          </span>

          <hr className="text-neutral-300 my-10" />

          <div className="w-full flex md:flex-row flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="font-light text-black max-w-xs leading-6">
                I help clients from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
              </p>
              <span className="text-neutral-400">Always exploring</span>
            </div>

            <div className="flex-1 bg-red-400 rounded">{/* Image placeholder */}</div>
          </div>

          <div className="mt-20 h-auto">
            <span className="md:text-5xl  text-5xl text-black font-normal block mb-10">
              I can help you with
            </span>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
  {Experience.map((item, index) => (
    <div key={index} className="relative pt-10 px-5 pb-5">
      
      {/* Number Badge */}
      <div className="absolute top-0 left-5 -translate-y-1/2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
        {index + 1}
      </div>

      {/* Title & Description */}
      <span className="text-black text-2xl font-semibold">{item.title}</span>
      <p className="text-neutral-600 text-sm mt-4">{item.description}</p>
    </div>
  ))}
</div>

          </div>


          {/*  */}


          <div className="h-auto w-full bg-black"></div>
        </div>
      </div>
    </>
  );
};

export default Page;
