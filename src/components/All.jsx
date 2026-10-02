import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";

const All = () => {
  return (
    <div className="flex-col items-center justify-center">
      <Hero path={"/hero"} />
      <About path={"/about"} />
      <Skill />
      <Project />
    </div>
  );
};

export default All;
