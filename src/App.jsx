import React from "react";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="relative bg-black text-white font-sans scroll-smooth">
      <Socials />

      <section id="intro">
        <Intro />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Navbar />
    </main>
  );
}
