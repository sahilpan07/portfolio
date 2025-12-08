"use client";
import { skillsData } from "@/Data/Skills";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="text-white w-full pt-10 min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20 mt-10">

        {/* Section Header */}
        <div className="flex flex-col items-center gap-8">
          <h1 data-aos="fade-down" data-aos-delay="100" className="font-bold text-4xl text-white uppercase">
            Skills
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="font-semibold text-[#696969] text-center">
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil vel culpa sapiente doloribus laboriosam vitae quis obcaecati?
            Accusamus
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, i) => (
            <div data-aos="zoom-in" data-aos-delay={150 + i * 100} key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
