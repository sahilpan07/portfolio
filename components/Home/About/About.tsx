import React from "react";
import AboutHead from "./AboutHead";
import AboutCard from "./AboutCard";
import Capabilities from "./Capabilities";
import Experience from "./Experience";
import { aboutHead, capabilities, experience, statsData } from "@/Data/About";

const About = () => {
  return (
    <div className="text-white w-full pt-10 min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20">
        <AboutHead about={aboutHead} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <AboutCard key={stat.id} stat={stat} />
          ))}
        </div>
                <hr className="my-4 border-gray-600" />

        <Capabilities capability={capabilities}/>
                <hr className="my-4 border-gray-600" />

        <Experience experience={experience}/>
                <hr className="my-4 border-gray-600" />

      </div>
    </div>
  );
};

export default About;
