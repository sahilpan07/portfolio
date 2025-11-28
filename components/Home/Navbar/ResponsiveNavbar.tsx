"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div className="relative z-50">
      <Navbar openNav={showNavHandler} />
      <MobNavbar showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNavbar;
