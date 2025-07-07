"use client";

import Magnetic from "@/app/components/Magnetic";
import Header from "@/app/components/Header2";
import { projectsData } from "@/app/data";
import React, { useState } from "react";

const categories = ["all", "design", "development"];

const Page = () => {
  const [SelectedCategory, setSelectedCategory] = useState("all");

  const FilterProjects =
    SelectedCategory === "all"
      ? projectsData
      : projectsData.filter((proj) => proj.category === SelectedCategory);

  return (
    <>
     
      <div className="w-screen overflow-x-hid min-h-screen bg-white text-black">
      <Header/>
        <div className="md:w-[80%] w-[90%] py-30 mx-auto">
          <span className="md:text-6xl text-5xl font-normal leading-tight">
            Creating next level <br /> digital products
          </span>

          {/* Category Buttons */}
          <div className="flex items-center gap-4 mt-10 flex-wrap">
            {categories.map((cat) => (
              <Magnetic key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 md:px-10 py-3 md:py-5 cursor-pointer transition-colors duration-300 rounded-full border ${
                    SelectedCategory === cat
                      ? "bg-black text-white"
                      : "border-neutral-500 text-black"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </Magnetic>
            ))}
          </div>

          {/* Filtered Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {FilterProjects.map((project, index) => (
           <div
           key={index}
           className="rounded-xl shadow-xl bg-white overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
         >
           {/* Top Image */}
           <div className="m-4 rounded-lg overflow-hidden">
             <img
               src={project.src}
               alt={project.title}
               className="object-cover w-full h-60 rounded-lg"
             />
           </div>
         
           {/* Content */}
           <div className="px-6 pb-6">
             <span className="text-xs uppercase tracking-wide text-gray-500">
               {project.category}
             </span>
         
             <h2 className="text-xl font-semibold text-black mt-2">{project.title}</h2>
             <p className="text-sm text-gray-600 mt-1">{project.description}</p>
           </div>
         </div>
         
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
