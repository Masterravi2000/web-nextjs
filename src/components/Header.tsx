"use client";

import { useState } from "react";

export default function Header() {
  const [soundOn, setSoundOn] = useState<boolean>(true); // sound is ON by default

  const toggleSound = () => {
    setSoundOn((prev) => !prev);
  };

  return (
    <header className="w-full bg-[#0a0a0a] text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-xl font-bold">@Ravi</div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 text-sm uppercase tracking-wider">
          <a href="#work" className="hover:text-gray-400">Work</a>
          <a href="#experiments" className="hover:text-gray-400">Experiments</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
        
        {/* Right side */}
        <div className="flex items-center space-x-6 text-xs">
          <button
            onClick={toggleSound}
            className="uppercase hover:text-gray-400 transition"
          >
            {soundOn ? "Turn Off Sound" : "Turn On Sound"}
          </button>
          <span className="tracking-widest">....</span>
          <span className="font-mono">Be Passionate</span>
        </div>
      </div>
    </header>
  );
}
