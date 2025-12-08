import Image, { StaticImageData } from "next/image";
import React from "react";
import { number } from "yup";

type Props = {
  blogData: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: StaticImageData;
  };
};

const BlogCard = ({ blogData }: Props) => {
  return (
    <div className=" ">
      <div>
        <Image src={blogData.image} alt={blogData.title} className="w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="mt-4 px-2 py-1 text-bold border border-white rounded bg-red-500 w-fit">News</p>
        <hr className="mb-1 border-gray-600" />

        <div>
          <p className="text-xl">{blogData.title}</p>
          <p className="font-semibold text-[#696969] text-justify line-clamp-3">
            {blogData.summary}
          </p>
        </div>
        <hr className="mb-1 border-gray-600" />

        <p>{blogData.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
