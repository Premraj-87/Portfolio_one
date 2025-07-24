import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
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

    // Animate the vertical line
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
      id="education"
      ref={sectionRef}
      className="py-16 px-6 md:px-20 bg-gray-950 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-400 fade-up">
          Education & Certificates
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
          <div className="relative pl-12 fade-up">
            <div
              className="absolute left-2.5 top-2 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-950 z-10"
              title="Bachelor of Computer Applications"
            ></div>
            <h3 className="text-xl font-semibold">
              Bachelor of Computer Applications
            </h3>
            <p className="text-sm text-gray-400">XYZ University • 2021 – 2024</p>
            <p className="mt-2 text-gray-300">
              Studied core computer science subjects, web development, and data
              structures. Actively participated in tech fests and coding
              challenges.
            </p>
          </div>

          {/* Timeline item 2 */}
          <div className="relative pl-12 fade-up">
            <div
              className="absolute left-2.5 top-2 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-950 z-10"
              title="12th Grade – Science (CBSE)"
            ></div>
            <h3 className="text-xl font-semibold">12th Grade – Science (CBSE)</h3>
            <p className="text-sm text-gray-400">
              Govt Senior Secondary School • 2019 – 2021
            </p>
            <p className="mt-2 text-gray-300">
              Focus on Physics, Chemistry, and Mathematics. Built foundational
              logical and analytical skills.
            </p>
          </div>
        </div>

        {/* Certificates */}
        <h3 className="text-2xl font-semibold mt-14 mb-6 text-green-300 fade-up">
          Certificates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transition shadow fade-up">
            <h4 className="font-bold text-lg mb-2">Full Stack Development</h4>
            <p className="text-sm text-gray-400">Issued by Coursera / Udemy</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transition shadow fade-up">
            <h4 className="font-bold text-lg mb-2">React Advanced Concepts</h4>
            <p className="text-sm text-gray-400">
              Issued by Meta / FrontendMentor
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
