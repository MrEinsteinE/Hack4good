import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="banner"
      className="bg-black text-white h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      {/* Title */}
      <motion.h1
        className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hack4Good 2025
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl max-w-2xl px-6 leading-relaxed text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        🚀 Welcome to <span className="text-blue-400 font-semibold">Hack4Good 2025</span>, where the brightest minds unite to solve real-world challenges through technology and innovation.  
        Join developers, designers, and problem-solvers in an electrifying 6-hour hackathon filled with creativity, learning, and impact!  
      </motion.p>

      {/* Floating Light Effect */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Banner;
