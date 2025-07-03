"use client";

import React from "react";

export const Hero = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#B3B3B3]">
      <div className="w-[70vw] h-[70vh] relative flex items-center justify-center">
        {/* Heading */}
        <h4 className="text-[14svw] -translate-x-1/2 -translate-y-1/2 absolute font-[500] top-20 left-1/2 text-nowrap -tracking-[2px] text-white uppercase">
          We create
        </h4>

        {/* Video Box */}
        <div className="w-[60%] h-[60%] rounded-md overflow-hidden shadow-lg relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-gradient-background-1234/720p.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
