import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".fade-up");

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate timeline line
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 px-6 md:px-20 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-400 fade-up">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative space-y-10">
          {/* Timeline line */}
          <div
            ref={lineRef}
            className="absolute left-5 top-0 w-1 bg-green-500 rounded-full"
            style={{ height: "100%" }}
          ></div>

          {/* Timeline item 1 */}
         {/* Experience 1 */}
<div className="relative pl-12 mb-12 fade-up">
  {/* Dot */}
  <div
    className="absolute left-2.5 top-2 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-950 z-10"
    title="Frontend Developer Intern"
  ></div>
  <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
  <p className="text-sm text-gray-400">XYZ Tech Solutions • Jan 2025 – Mar 2025</p>
  <ul className="list-disc mt-2 ml-5 text-gray-300 text-sm space-y-1">
    <li>Developed and maintained responsive user interfaces using React.js and Tailwind CSS.</li>
    <li>Implemented dynamic data rendering through RESTful API integration and conditional UI logic.</li>
    <li>Led a UI revamp initiative that improved user experience and reduced bounce rates by 25%.</li>
    <li>Participated in daily standups, sprint reviews, and collaborated with backend developers using Agile methodology.</li>
    <li>Resolved 30+ UI bugs and optimized performance for multiple components, improving load speed by 15%.</li>
  </ul>
</div>


          {/* Timeline item 2 */}
          <div className="relative pl-12 fade-up">
            <div
              className="absolute left-2.5 top-2 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-900 z-10"
              title="Web Design Freelancer"
            ></div>
            <h3 className="text-xl font-semibold">Web Design Freelancer</h3>
            <p className="text-sm text-gray-400">
              Freelance • Sept 2024 – Dec 2024
            </p>
            <ul className="list-disc mt-2 ml-5 text-gray-300 text-sm space-y-1">
              <li>
                Created 4+ fully responsive client websites using HTML, CSS, and
                JavaScript.
              </li>
              <li>Focused on modern design, speed, and user accessibility.</li>
            </ul>
          </div>

          {/* Add more experience items below in the same structure if needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
