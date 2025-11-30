"use client";
import { projectData } from "@/Data/Project";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [count, setCount] = useState(2);

  return (
    <div className="text-white w-full pt-[20vh] min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-bold text-4xl text-white uppercase">
            featured project
          </h1>
          <p className="font-semibold text-[#696969] text-center">
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil vel culpa sapiente doloribus laboriosam vitae quis obcaecati?
            Accusamus
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {projectData.slice(0, count).map((project) => {
            return (
              <div
                className="border gorder-gray-500 rounded-xl p-4 lg:p-8"
                key={project.id}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
          <button className="text-white w-fit border border-gray-500 rounded-xl p-2 " onClick={() => setCount(count + 2)}>See More</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
