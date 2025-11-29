"use client";

import { navlinks } from "@/constant/constant";
import { NavBarInfo } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

//define props type
type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#1a101f]" : "fixed"
      } h-[12vh] z-[10]  w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex flex-cols items-center gap-6">
          <Image
            src={NavBarInfo.image}
            alt="LOGO"
            height={50}
            width={50}
            className="ml-[-1.5rem] sm:ml-0 rounded-full"
          />
          <h1 className="text-white font-semibold text-xl">
            {NavBarInfo.name}
          </h1>
        </div>

        {/* NavLinks */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
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
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text:blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* Dropdown for mobile */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 text-white cursor-pointer lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
