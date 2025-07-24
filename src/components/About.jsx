import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#0f172a] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-emerald-400 tracking-tight drop-shadow-lg">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          Hey! I'm <span className="text-emerald-300 font-medium">Prem Raj Anand</span>, a passionate and curious web developer who loves crafting beautiful and functional user experiences. I'm driven by creativity and a deep love for problem-solving. Whether it’s front-end design or back-end logic, I enjoy turning ideas into real, impactful products.
        </p>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          I’m currently diving deep into the MERN stack and frequently explore tools like Next.js, Docker, and cloud technologies. I believe in lifelong learning and constantly strive to level up by building, breaking, and rebuilding.
        </p>

        {/* Get to Know Me */}
        <h3 className="text-2xl font-semibold mb-6 text-emerald-300">
          Get to Know Me
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-200">
          {[
            "💡 I love solving real-world problems using tech.",
            "🎯 I'm a self-taught developer who enjoys continuous learning.",
            "🚀 I aim to work on impactful open-source and freelance projects.",
            "🧠 Currently exploring AI, ML, and DevOps tools.",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 backdrop-blur-md px-4 py-3 rounded-xl text-sm md:text-base hover:scale-[1.02] transition-transform shadow-sm hover:shadow-emerald-500/30"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
