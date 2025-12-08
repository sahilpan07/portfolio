"use client";
import React, { useEffect } from "react";
import HomeMain from "./HomeMain/HomeMain";
import Services from "./Services/Services";
import Project from "./Project/Project";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import { contactData } from "@/Data/data";
import Blog from "./Blog/Blog";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <div id="home">
        <HomeMain />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="blogs">
        <Blog />
      </div>
      <div id="contact">
        <Contact contact={contactData} />
      </div>
    </div>
  );
};

export default Home;
