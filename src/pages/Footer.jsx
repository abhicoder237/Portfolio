import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT - About */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            Abhishek Kumar Singh
          </h2>
          <p className="text-sm leading-relaxed">
            MERN Stack & AI Developer building scalable applications 
            and intelligent digital experiences.
          </p>
        </div>

        {/* CENTER - Contact Info */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg mb-4">
            Contact Information
          </h3>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-indigo-500 mt-1" />
            <p>Noida , Uttar Pradesh, India</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-500" />
            <p>coderabhi007@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-indigo-500" />
            <p>+91 6204094539</p>
          </div>
        </div>

        {/* RIGHT - Social */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Connect With Me
          </h3>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/abhicoder237"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/krabhisheksingh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Abhishek Kumar Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;