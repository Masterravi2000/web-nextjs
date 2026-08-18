"use client";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [soundOn, setSoundOn] = useState<boolean>(false); // sound is ON by default
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/ThemeMusic.mp3");
    audioRef.current.loop = true;
  }, []);


  const toggleSound = () => {
    if (!audioRef.current) return;


    if (soundOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setSoundOn(!soundOn);
  };

  return (
    <header className="w-full bg-black text-white border-b border-[#202020]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">

        {/* Logo */}
        <div className="text-xl font-bold">@Ravi</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 text-sm uppercase tracking-wider">
          <a href="#Projects" className="hover:text-gray-400">Projects</a>
          <a href="#Manifest" className="hover:text-gray-400">Manifest</a>
          <a href="#About" className="hover:text-gray-400">About</a>
          <a href="/Ravi_Sharma_Resume.pdf" download className="hover:text-gray-400">Resume</a>
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
