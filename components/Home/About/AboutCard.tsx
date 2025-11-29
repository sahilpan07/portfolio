import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type Props = {
  stat: {
    id: number;
    image: StaticImageData;
    number: string;
    title: string;
  };
};

const AboutCard = ({ stat }: Props) => {
  return (
    <div className="flex flex-col border border-gray-500 p-8 rounded-2xl">
      <div className="flex flex-col gap-2 items-center">
        <Image
          className="w-24"
          src={stat.image}
          alt={stat.title}
          width={64}
          height={64}
        />
        <p className="font-bold text-xl">{stat.number}+</p>
        <p className="text-md font-bold text-gray-400">{stat.title}</p>
      </div>
    </div>
  );
};

export default AboutCard;
