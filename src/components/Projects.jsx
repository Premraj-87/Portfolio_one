import React from "react";

const projects = [
  {
    title: "Toxic Comment Detector",
    image: "https://i.pinimg.com/736x/cc/6b/46/cc6b46315a0ac6984d8b6675c49d7eb7.jpg",
    live: "https://your-live-url.com",
    repo: "https://github.com/Premraj-87/toxic-chat",
  },
  {
    title: "WebOS UI Clone",
    image: "https://i.pinimg.com/736x/ad/2f/a8/ad2fa8a7178b75b1984cbc5959d354e2.jpg",
    live: "https://your-live-url.com",
    repo: "https://github.com/Premraj-87/web-os",
  },
  {
    title: "Portfolio Website",
    image: "https://i.pinimg.com/736x/94/95/0d/94950da78cd126f2a0f08d9b4ceaf0e9.jpg",
    live: "https://yourportfolio.com",
    repo: "https://github.com/Premraj-87/portfolio",
  },
  {
    title: "Expense Tracker",
    image: "https://i.pinimg.com/736x/a9/37/51/a93751c12394435232aef09a4a2acd92.jpg",
    live: "https://your-live-url.com",
    repo: "https://github.com/Premraj-87/expense-tracker",
  },
  {
    title: "Weather App",
    image: "https://i.pinimg.com/736x/f3/e8/7a/f3e87a4303c8150bd4e38825d34eb21e.jpg",
    live: "https://your-live-url.com",
    repo: "https://github.com/Premraj-87/weather-app",
  },
  {
    title: "Blog CMS",
    image: "https://i.pinimg.com/736x/c7/ce/d0/c7ced0bde2cc1398aea678da6a1543cb.jpg",
    live: "https://your-live-url.com",
    repo: "https://github.com/Premraj-87/blog-cms",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-8 md:px-20 bg-gray-950 text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-400">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 rounded-md text-white text-sm hover:bg-green-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white rounded-md text-white text-sm hover:bg-white hover:text-black transition"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
