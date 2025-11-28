import React from "react";
import HomeMain from "./HomeMain/HomeMain";
import About from "../About/About";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeMain />
      <About />
    </div>
  );
};

export default Home;
