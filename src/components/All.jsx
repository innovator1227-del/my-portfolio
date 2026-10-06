import Hero from "./pages/Hero";
import About from "./pages/About";
import Project from "./pages/projects/Project";
import { projects } from "./pages/projects/ProData";
import EducationExperience from "./pages/experiance/Education";
import { journey } from "./pages/experiance/ExpData";
import { skillGroups } from "./pages/skills/SkilData";
import Skills from "./pages/skills/Skill";
import Contact from "./pages/contacts/Contact";
import Footer from "./pages/Footer";

const All = () => {
  return (
    <div className="flex-col items-center justify-center">
      <Hero path={"/hero"} />
      <About path={"/about"} />
      <Skills skillGroups={skillGroups} />
      <Project projects={projects} />
      <EducationExperience journey={journey} />
      <Contact />
      <Footer />
    </div>
  );
};

export default All;
