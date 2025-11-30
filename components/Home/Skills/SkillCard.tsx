"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: StaticImageData;
  };
};

const SkillCard = ({ skill }: Props) => {
  return (
    <div className="flex flex-col border border-gray-500 p-8 rounded-2xl">
      <div className="flex flex-col gap-4 items-center">
        <Image className=" w-20 h-20" src={skill.image} alt={skill.title} />
        <p className=" font-bold text-md lg:text-lg">{skill.title}</p>
      </div>
    </div>
  );
};

export default SkillCard;
