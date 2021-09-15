import React from "react";
import "./body.css";
import AboutMe from "./hero/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Education from "./education/index";
import Contact from "./contact/index";
const Body = () => {
  return (
    <div className="body">
      <section>
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
