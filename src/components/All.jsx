import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skill from "./pages/Skill";

const All = () => {
  return (
    <div className="flex-col items-center justify-center">
      <Hero path={"/hero"} />
      <About path={"/about"} />
      <Skill />
    </div>
  );
};

export default All;
