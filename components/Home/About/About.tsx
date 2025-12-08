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
        {/* About Header */}
        <div data-aos="fade-up" data-aos-delay="100">
          <AboutHead about={aboutHead} />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={150 + i * 100}
              key={stat.id}
            >
              <AboutCard stat={stat} />
            </div>
          ))}
        </div>

        <hr data-aos="fade-in" className="my-4 border-gray-600" />

        {/* Capabilities */}
        <div data-aos="fade-right" data-aos-delay="200">
          <Capabilities capability={capabilities} />
        </div>

        <hr data-aos="fade-in" className="my-4 border-gray-600" />

        {/* Experience */}
        <div data-aos="fade-left" data-aos-delay="300">
          <Experience experience={experience} />
        </div>

        <hr data-aos="fade-in" className="my-4 border-gray-600" />
      </div>
    </div>
  );
};

export default About;
