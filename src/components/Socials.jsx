import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="fixed left-6 bottom-1/3 z-40 hidden md:flex flex-col items-center space-y-4">
      <a
        href="https://github.com/Premraj-87"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://linkedin.com/in/premraj-87"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition"
      >
        <FaTwitter size={22} />
      </a>

      {/* Vertical Line */}
      <div className="w-[2px] h-20 bg-gray-600 mt-4"></div>
    </div>
  );
};

export default Socials;
