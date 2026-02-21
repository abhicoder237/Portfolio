// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
      <div className="relative">
        {/* Outer Glow Ring */}
        <div className="w-24 h-24 rounded-full border-t-4 border-indigo-500 animate-spin shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
        
        {/* Middle Glass Ring */}
        <div className="absolute inset-2 rounded-full border-r-4 border-purple-500 animate-spin-slow opacity-70"></div>
        
        {/* Inner Pulsing Core */}
        <div className="absolute inset-0 m-auto w-8 h-8 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-sm animate-pulse"></div>
        
        {/* Loading Text */}
        <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
          Initializing...
        </p>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite reverse;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;