import React from "react";

type Props = {
  capability: {
    heading: string;
    description: string;
    skills: string[];
  };
};

const Capabilities = ({ capability }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="font-bold text-4xl uppercase text-justify">{capability.heading}</p>
        </div>
        <div className="grid grid-col-1 gap-6">
          <p className="font-semibold text-[#696969] text-justify">
            {capability.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {capability.skills.map((skill, index) => (
              <p
                key={index}
                className="text-sm border border-gray-400 rounded-3xl p-1 px-4 uppercase"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
