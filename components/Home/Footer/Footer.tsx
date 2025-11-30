import React from "react";
import Link from "next/link";
import { navlinks } from "@/constant/constant";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaIntercom,
  FaLinkedin,
} from "react-icons/fa";

type Props = {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};

const Footer = ({ contact }: Props) => {
  return (
    <div className="text-white w-full pb-10 bg-[#1a101f] relative overflow-hidden border-t-2 border-gray-500">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20  pt-10">
        <div className="flex flex-col items-center gap-10">
          <h1 className="pb-4 text-4xl font-bold  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-white">
            Sahil Pan
          </h1>
          <div className="flex items-center space-x-12">
            {navlinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className='relative text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>
                    {navlink.label}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="flex gap-10">
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
          </div>
          <div className="flex gap-10 text-yellow-400 text-2xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
          </div>
          <div className="flex flex-col gap-2">
            <hr className="mb-2 border-gray-600" />
            <p className="font-semibold text-[#696969] text-center">
              Developed By {contact.email} Web Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
