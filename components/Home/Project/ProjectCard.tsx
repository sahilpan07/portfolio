import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

type Props = {
  project: {
    id: number;
    title: string;
    description: string;
    role: string;
    date: string;
    image: StaticImageData;
    url1: string;
    url2: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 ">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full"
        width={400}
        height={200}
      />
      <div className="flex flex-col gap-6 p-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">{project.title}</h1>
          <p className="font-semibold text-[#696969] text-justify">
            {project.description}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Project Detail</p>
          <hr className="mb-2 border-gray-600" />

          <div className="flex justify-between">
            <p>Year</p>
            <p>{project.date}</p>
          </div>
          <hr className="mb-2 border-gray-600" />

          <div className="flex justify-between">
            <p>Role</p>
            <p>{project.role}</p>
          </div>
          <hr className="mb-2 border-gray-600" />
        </div>
        <div className="flex flex-col gap-3">
          <p>Project Link</p>
          <hr className="mb-2 border-gray-600" />

          <div className="flex flex-wrap gap-4 text-md text-[#FFFF33]">
            <Link href={project.url1} target="_blank">
              <div className="flex items-center gap-2 border-b border-[#FFFF33] pb-[2px]">
                See on GitHub
                <FaGithub />
              </div>
            </Link>

            <Link href={project.url2} target="_blank">
              <div className="flex items-center gap-2 border-b border-[#FFFF33] pb-[2px]">
                Live Demo
                <FaLink />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
