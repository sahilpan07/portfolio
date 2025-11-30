import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Props = {
  about: {
    heading: string;
    intro: string;
    description: string;
    downloadButtonText: string;
  };
};

const AboutHead = ({ about }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="font-bold text-5xl text-white uppercase">
          {about.heading}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-white text-justify">{about.intro}</p>
          <p className="font-semibold text-[#696969] text-justify">{about.description}</p>
          <div className="flex items-center text-white gap-8">
            <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-md md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 flex items-center space-x-2">
              {about.downloadButtonText}
            </button>
            <div className="flex gap-6">
              <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl" />
              <FaGithub className="text-2xl sm:text-3xl md:text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
