"use client";
import { skillsData } from "@/Data/Skills";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="text-white w-full pt-10 min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20 mt-10">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-bold text-4xl text-white uppercase">Skills </h1>
          <p className="font-semibold text-[#696969]">
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil vel culpa sapiente doloribus laboriosam vitae quis obcaecati?
            Accusamus
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
