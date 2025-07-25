/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import myPhoto from "../assets/profile.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Intro() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* 🔹 Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 15 }, // Less particles
            color: { value: "#ffffff22" },
            opacity: { value: 0.3 },
            size: { value: 1.5 },
            move: { enable: true, speed: 0.15 },
          },
        }}
      />

      {/* 🔹 Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-6 md:px-24">
        {/* 🔸 Left - Text Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-xl text-gray-300 mb-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Hello 
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            I'm Prem Raj Anand
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-400 mt-4 mb-6"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Frontend Developer
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="/Prem_CV.pdf"
              download
              className="px-6 py-2 border border-green-400 text-green-400 rounded transition hover:bg-green-400 hover:text-black"
            >
              Download CV
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-2 bg-green-400 text-black rounded cursor-pointer transition hover:bg-transparent hover:text-green-400 border border-green-400"
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>

        {/* 🔸 Right - Image */}
        <motion.div
          className="mt-10 md:mt-0 md:ml-10 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={myPhoto}
            alt="Prem Raj Anand"
            className="w-[260px] md:w-[420px] object-cover drop-shadow-xl"
            style={{ borderRadius: "20px" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* 🔹 Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 right-6 md:right-12 rotate-90 origin-bottom-right z-10 text-sm text-gray-400"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline"
        >
          Scroll Down
        </Link>
      </motion.div>
    </section>
  );
}
