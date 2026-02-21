import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import {projects} from "../pages/Helper"

 

const Project = () => {
  return (
    <section className="w-full min-h-screen bg-slate-950 text-white py-20 px-6 md:px-20">
      
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-indigo-400 font-mono text-xs uppercase tracking-[0.4em] mb-4">
          Portfolio
        </h2>
        <h1 className="text-3xl md:text-5xl font-black">
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-white bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
      </div>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-xl"
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 mb-6 max-w-3xl">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-indigo-400 font-semibold mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm font-mono text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Flow */}
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* How It Works */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-4">
                  How It Works
                </h4>
                <ul className="space-y-3 text-slate-400">
                  {project.flow.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-cyan-400 font-bold">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-indigo-400 font-semibold mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3 text-slate-400">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* future  */}

            <div>
  <h4 className="text-purple-400 font-semibold mb-2">
    Future Roadmap
  </h4>
  <ul className="space-y-1">
    {project.future?.map((item, i) => (
      <li key={i}>🚀 {item}</li>
    ))}
  </ul>
</div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={project.github}
                className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={project.live}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-500 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;