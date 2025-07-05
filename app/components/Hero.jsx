"use client";

import { motion } from "framer-motion";
import React from "react";
import Iridescence from "./ui/Backgrounds/Iridescence/Iridescence";
import ScrollVelocity from "./ui/TextAnimations/ScrollVelocity/ScrollVelocity";
import Nav from "./Nav";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1,  }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-screen h-[100vh] origin-top bg-[#B3B3B3] relative overflow-hidden"
    >
      <Nav />

      <div className="flex items-center justify-center flex-col h-full">
        <div className="w-[80vw] h-[60vh] relative flex items-center justify-center">
          {/* Heading */}
          <h4 className="text-[17vw] md:text-[12vw] absolute font-[500] z-30 md:top-20 top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white uppercase">
            We create
          </h4>

          {/* Iridescence Background */}
          <div className="md:w-[50%] h-[70%] sm:w-[80%] w-full rounded-[40px] overflow-hidden shadow-lg relative">
            <Iridescence
              color={[1, 1, 1]}
              mouseReact={false}
              amplitude={0.1}
              speed={1.0}
            />
          </div>
        </div>

        {/* Scrolling Text */}
        <ScrollVelocity
          texts={["Muhammad-Farhan"]}
          velocity={70}
          className="text-white flex items-center justify-center font-light md:text-[16vw] text-[5rem]"
        />
      </div>
    </motion.div>
  );
};
