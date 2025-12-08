import { blogsData } from "@/Data/blog";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="text-white w-full pt-[20vh] min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20">

        {/* Section Header */}
        <div className="flex flex-col items-center gap-8">
          <p
            data-aos="fade-down"
            data-aos-delay="100"
            className="font-bold text-4xl text-white uppercase"
          >
            Blogs
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-semibold text-[#696969] text-center"
          >
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil vel culpa sapiente doloribus laboriosam vitae quis obcaecati?
            Accusamus
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {blogsData.map((blogData, i) => (
            <div
              key={blogData.id}
              data-aos="zoom-in"
              data-aos-delay={150 + i * 100}
              className="border border-gray-500 rounded-xl p-4 lg:p-8"
            >
              <BlogCard blogData={blogData} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
