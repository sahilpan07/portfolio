import React from "react";
import HomeMain from "./HomeMain/HomeMain";
import Services from "./Services/Services";
import Project from "./Project/Project";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { connect } from "@/Data/About";
import Skills from "./Skills/Skills";
import { skillsData } from "@/Data/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeMain />
      <About />
      <Skills />
      <Services />
      <Project />
      {/* Pass the contact info from your data */}
      <Contact
        contact={{
          heading: connect.heading,
          email: connect.email,
          resume: connect.resume,
        }}
      />
    </div>
  );
};

export default Home;
