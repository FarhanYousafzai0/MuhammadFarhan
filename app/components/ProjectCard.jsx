"use client";
import React, { useRef } from "react";

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined") {
      videoRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined") {
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative group bg-black rounded-xl overflow-hidden h-[500px] w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Overlay Title & Description */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 z-10 flex items-end p-6">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-semibold">
            {project.title}
          </h2>
          <p className="text-white text-sm md:text-base mt-1">{project.description}</p>
        </div>
      </div>

      {/* View Button */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button className="w-14 h-14 rounded-full bg-white text-black text-xs font-semibold flex items-center justify-center shadow-md hover:scale-105 transition-transform">
          View
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
