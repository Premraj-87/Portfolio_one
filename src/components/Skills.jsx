import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiExpress,
} from "react-icons/si";
import { GiSkills } from "react-icons/gi";

const hardSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "GSAP", icon: <GiSkills className="text-green-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Git", icon: <FaGithub className="text-white" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Time Management",
  "Adaptability",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-24 bg-[#0a0a0a] text-white"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-left text-blue-400">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Hard Skills */}
        <div className="bg-[#111] p-8 rounded-2xl shadow-xl border border-blue-600">
          <h3 className="text-2xl font-semibold text-center mb-8 text-blue-300">
            Hard Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {hardSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-800 text-blue-200 px-4 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition duration-300"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-[#111] p-8 rounded-2xl shadow-xl border border-green-600">
          <h3 className="text-2xl font-semibold text-center mb-8 text-green-300">
            Soft Skills
          </h3>
          <ul className="list-disc list-inside space-y-3 text-green-300 text-sm px-2">
            {softSkills.map((skill, index) => (
              <li key={index} className="hover:text-white transition duration-200">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
