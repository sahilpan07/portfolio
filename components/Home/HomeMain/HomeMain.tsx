// src/components/Hero.tsx
import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const HomeMain: React.FC = () => {
  return (
    <div className="w-full pt-24 sm:pt-28 lg:pt-[25vh] min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex  justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-12">
          {/* Left Content */}
          <div className="z-10 max-w-xl space-y-6 text-center md:text-left">
            <div className="text-2xl md:text-3xl lg:text-4xl pb-4 text-purple-400 uppercase tracking-widest font-semibold">
              {BaseInfo.name}
            </div>
            <h1 className="pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-white">
              {BaseInfo.position}
            </h1>
            <p className="text-gray-400 mt-6 text-sm md:text-base">
              {BaseInfo.description}
            </p>
            <button className="mt-6 md:px-8 md:py-2.5 px-6 py-1.5 bg-purple-600 hover:bg-purple-700 transition rounded-md text-sm md:text-lg text-white font-semibold transition-all duration-200">
              LET'S TALK
            </button>
          </div>

          {/* Right Content */}
          <div className="relative mt-12 md:mt-0 flex items-center justify-center z-10 w-full">
            {/* Glowing Backgrounds */}
            <div className="absolute -top-10 -left-10 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-purple-700/30 blur-2xl rounded-full z-0" />
            <div className="absolute top-20 -right-10 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-blue-600/20 blur-2xl rounded-full z-0" />

            {/* Floating Icons */}
            <FaReact className="text-blue-500 absolute top-2 right-2 text-3xl sm:text-4xl md:text-5xl animate-pulse z-30" />
            <FaNodeJs className="text-green-500 absolute bottom-4 left-3 text-3xl sm:text-4xl md:text-5xl animate-pulse z-30" />
            <SiMongodb className="text-green-400 absolute bottom-6 right-6 text-2xl sm:text-3xl md:text-4xl animate-pulse z-30" />
            <SiTailwindcss className="text-cyan-400 absolute top-10 left-6 text-2xl sm:text-3xl md:text-4xl animate-pulse z-30" />

            {/* Image Container */}
            <div className="relative z-10 w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl border border-purple-700">
              <Image
                src={BaseInfo.profilePic}
                alt="Developer"
                className="w-full h-full object-cover brightness-110"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
