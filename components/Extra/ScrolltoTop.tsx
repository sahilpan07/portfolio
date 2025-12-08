"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrolltoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <div className="fixed bottom-4 animate-pulse right-4">
    {isVisible && (
        <button onClick={ScrollToTop} className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center">
            <FaArrowUp/>
        </button>
    )}
  </div>;
};

export default ScrolltoTop;
