 import React from "react";
import ThreeBackground from "../components/ThreeBackground";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assets/profile.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-screen overflow-hidden font-inter">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-28 select-none z-10 gap-24">
        
        {/* Left side: Glass Profile Card */}
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl shadow-indigo-500/30 animate-fade-in">
          
          <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-pink-500/20 blur-3xl animate-blob"></div>

          <img
            src={profilePic}
            alt="Profile"
            className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-white/30 shadow-xl mb-6 z-10"
          />

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-wide z-10">
            Abhishek Kumar Singh
          </h2>

          <p className="text-gray-300 max-w-sm text-md md:text-lg leading-relaxed z-10">
            I Build intelligent web application using MERN Stack and Machine Learning.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 z-10">
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 text-2xl transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/abhicoder237"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 text-2xl transition-all"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:ml-16">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-snug">
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <Typewriter
                words={[
                  "AI Full Stack Developer",
                  "MERN Stack Developer",
                  "Machine Learning Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </h1>

          <p className="max-w-lg text-slate-400 text-md md:text-lg leading-relaxed">
            Full Stack Developer integrating AI & Machine Learning into Real World Projects.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            
            <button
              onClick={() => navigate("/project")}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(79,70,229,0.5)]"
            >
              Launch Projects
            </button>

            {/* Single Resume Download Button */}
            <a
              href="/resume/Abhishek_mern_stack.pdf"
              download
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(220,38,38,0.5)] text-center"
            >
              Download Resume
            </a>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-500 text-xs uppercase tracking-widest font-mono">
          Explore Space
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(10px, -10px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;