export const codeExamples = {
  "App.jsx": `
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
  `,

  "Navbar.jsx": `
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide">
          mo<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li className="hover:text-white transition">Home</li>
          <li className="hover:text-white transition">Projects</li>
          <li className="hover:text-white transition">About</li>
          <li className="hover:text-white transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
  `,

  "Hero.jsx": `
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Mouse Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: \`
            radial-gradient(
              600px circle at \${mousePosition.x}px \${mousePosition.y}px,
              rgba(59,130,246,0.15),
              transparent 40%
            )
          \`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Building <span className="text-blue-500">Modern</span> Interfaces
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          Crafting immersive web experiences with React, Tailwind CSS, and motion.
        </p>
      </div>
    </section>
  );
};

export default Hero;
  `,
};



export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    content: "AI-powered code suggestions with real-time context awareness."
  },

  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "UX",
    title: "Intelligent UI Logic",
    content: "Build dynamic, responsive interfaces with clean component logic."
  },

  "Navbar.jsx": {
    bgColor: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    textColor: "text-cyan-200",
    contentColor: "text-cyan-300",
    icon: "NAV",
    title: "Adaptive Navigation",
    content: "Smart navigation that adapts based on user interaction."
  },
};
