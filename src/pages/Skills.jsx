import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiRedux,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const Skills = () => {
  const fullStack = [
    { name: "React.js", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  const dataScience = [
    { name: "Python", icon: <SiPython /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "SQL", icon: <FaDatabase /> },
  ];

  return (
    <section className="w-full min-h-screen bg-slate-950 text-white py-20 px-6 md:px-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-indigo-400 font-mono text-xs uppercase tracking-[0.4em] mb-4">
          My Expertise
        </h2>
        <h1 className="text-3xl md:text-5xl font-black">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-white">
            Skills
          </span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Full Stack */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl"
        >
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            Full Stack Development
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {fullStack.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 hover:bg-indigo-600 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl text-indigo-400 group-hover:text-white transition-all">
                  {skill.icon}
                </div>
                <p className="mt-3 text-sm font-mono text-slate-400 group-hover:text-white">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Data Science */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl"
        >
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            Data Science & ML
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {dataScience.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 hover:bg-cyan-500 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl text-cyan-400 group-hover:text-slate-900 transition-all">
                  {skill.icon}
                </div>
                <p className="mt-3 text-sm font-mono text-slate-400 group-hover:text-slate-900">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;