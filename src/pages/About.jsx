 import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import profilePic from "../assets/vrindhwan.jpeg";
import Skills from "./Skills";

// Neural Network 3D Component
const NeuralNetwork = () => {
  const groupRef = useRef();

  const nodes = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3,
      ],
      size: Math.random() * 0.08 + 0.04,
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          <Sphere args={[node.size, 16, 16]}>
            <meshStandardMaterial color={i % 2 === 0 ? "#6366f1" : "#22d3ee"} />
          </Sphere>
        </group>
      ))}
    </group>
  );
};

const About = () => {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center bg-slate-900 overflow-hidden">

        {/* 3D LEFT SIDE */}
        <div className="w-full lg:w-5/12 h-[350px] sm:h-[450px] lg:h-screen">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#22d3ee" />
            <Stars radius={50} depth={50} count={1500} factor={4} fade />
            <NeuralNetwork />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-7/12 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-center space-y-6">

          {/* Heading */}
          <div>
            <h2 className="text-indigo-400 font-mono text-xs uppercase tracking-[0.4em] mb-3">
              About Me
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              AI FULL STACK <br />
              <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-white bg-clip-text text-transparent">
                DEVELOPER
              </span>{" "}
              
            </h1>
          </div>

          {/* Profile */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl text-center sm:text-left">
              I am <span className="text-white font-semibold">Abhishek Kumar Singh</span>, an AI Full Stack Developer passionate about building intelligent and scalable web applications. I specialize in the MERN stack along with Machine Learning and Deep Learning, allowing me to create products that are not just functional but smart and data-driven.
              I have experience developing full-stack applications, REST APIs, and integrating AI models for features like chatbots, recommendation systems, and predictive analytics. I enjoy solving real-world problems using Python, React, Node.js, and modern AI technologies. 
              My goal is to work on innovative products where I can combine software engineering with AI to build impactful solutions
            </p>
          </div>

          {/* Resume Buttons */}
          <div className="flex flex-col  ">
            <a
              href="/resume/Abhishek_FullStack.pdf"
              download
              className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition"
            >
              <FaDownload />Resume
            </a>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <Skills />

        {/* ================= TIMELINE SECTION BELOW ================= */}
      <section className="bg-slate-950 py-24 px-6 sm:px-16">
        <h2 className="text-center text-3xl font-bold text-white mb-16">
          My Journey Timeline
        </h2>

        <div className="relative border-l border-indigo-500/40 max-w-3xl mx-auto pl-8 space-y-16">

          {[
            "Started learning Programming",
            "Built Full Stack MERN Projects",
            "Explored Machine Learning & AI",
            "Building Intelligent Web Applications",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-2 w-3 h-3 bg-indigo-500 rounded-full"></div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
                <p className="text-slate-300">{item}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
    </>
  );
};

export default About;