import React from "react";
import HomeMain from "./HomeMain/HomeMain";
import About from "../About/About";
import Services from "./Services/Services";
import Project from "./Project/Project";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeMain />
      <About />
      <Services/>
      <Project/>
    </div>
  );
};

export default Home;
