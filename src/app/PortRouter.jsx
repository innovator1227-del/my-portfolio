import React from "react";
import PortfolioLayout from "./PortfolioLayout";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/pages/Hero";
import About from "../components/pages/About";
import All from "../components/All";
import Project from "../components/pages/projects/Project";
import Skills from "../components/pages/skills/Skill";

const PortRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout />}>
          <Route element={<All />}>
            <Route path="/home" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/project" element={<Project />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default PortRouter;
