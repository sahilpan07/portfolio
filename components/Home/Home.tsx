import React from "react";
import HomeMain from "./HomeMain/HomeMain";
import About from "../About/About";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeMain />
      <About />
      <Services/>
    </div>
  );
};

export default Home;
