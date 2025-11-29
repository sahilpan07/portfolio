import Image from "next/image";
import React from "react";

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <Image  src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className=" font-bold text-md lg:text-lg">{service.title}</h1>
      <p className="text-center text-sm md:text-md font-bold text-gray-400">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
