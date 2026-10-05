import Hero from "./pages/Hero";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/projects/Project";
import { projects } from "./pages/projects/ProData";
import Education from "./pages/Education";

const All = () => {
  return (
    <div className="flex-col items-center justify-center">
      <Hero path={"/hero"} />
      <About path={"/about"} />
      <Skill />
      <Project projects={projects} />
      <Education />
    </div>
  );
};

export default All;
