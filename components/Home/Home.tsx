import React from "react";
import HomeMain from "./HomeMain/HomeMain";
import Services from "./Services/Services";
import Project from "./Project/Project";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { connect } from "@/Data/About";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import { contactData } from "@/Data/data";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeMain />
      <About />
      <Skills />
      <Services />
      <Project />
      <Contact contact={contactData} />
      <Footer contact={contactData} />
    </div>
  );
};

export default Home;
