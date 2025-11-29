import React from "react";

type JobType = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

type Props = {
  experience:{
      heading: string;
  jobs: JobType[];
  }

};

const Experience = ({experience}:Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <p className="font-bold text-4xl uppercase">{experience.heading}</p>
      </div>
      <div className="grid grid-col-1 gap-6">
        {experience.jobs.map((job, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">{job.role}</p>
              <p className="text-[#696969]">{job.duration}</p>
            </div>
            <p className="text-md text-[#FFFF33]">{job.company}</p>
            <p className="font-semibold text-[#696969]">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
