import React, { useEffect, useState } from 'react';
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <nav
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 
      bg-black/30 backdrop-blur-md border border-white/10
      rounded-full px-6 py-3 flex gap-6 items-center text-white shadow-lg
      transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <a href="#intro" className="hover:text-green-400 transition duration-300" title="Home"><FaHome size={20} /></a>
      <a href="#about" className="hover:text-green-400 transition duration-300" title="About"><FaUser size={20} /></a>
      <a href="#education" className="hover:text-green-400 transition duration-300" title="Education"><FaGraduationCap size={20} /></a>
      <a href="#experience" className="hover:text-green-400 transition duration-300" title="Experience"><FaBriefcase size={20} /></a>
      <a href="#skills" className="hover:text-green-400 transition duration-300" title="Skills"><FaCode size={20} /></a>
      <a href="#projects" className="hover:text-green-400 transition duration-300" title="Projects"><FaProjectDiagram size={20} /></a>
      <a href="#contact" className="hover:text-green-400 transition duration-300" title="Contact"><FaEnvelope size={20} /></a>
    </nav>
  );
};

export default Navbar;
