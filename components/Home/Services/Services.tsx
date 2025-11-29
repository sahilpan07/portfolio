import React from "react";
import { servicesData } from "@/Data/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="text-white w-full pt-24 sm:pt-28 lg:pt-[25vh] min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20">
        <div className="flex flex-col items-center gap-8">
          <p className="font-bold text-5xl text-white uppercase">Services</p>
          <p>
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil vel culpa sapiente doloribus laboriosam vitae quis obcaecati?
            Accusamus
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                className="border gorder-gray-500 rounded-xl p-4 lg:p-8"
              >
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
