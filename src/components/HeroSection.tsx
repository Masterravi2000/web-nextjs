// src/components/HeroSection.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "@/assets/ProfilePic.jpg";

export default function HeroSection() {
  return (
    <section className="w-full bg-black text-white min-h-200 pt-10 pb-10 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-10 w-full">

        {/* Left - Photo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-md">
            <div className="overflow-hidden border-[6px] rounded-2xl border-[#0a0a0a] bg-white">
              <Image
                src="/ProfilePic2.jpg" // 👈 replace with your photo
                alt="Profile"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center">
          {/* Small Intro */}
          <p className="text-md font-mono text-gray-300 mb-4">
            Hi, I&apos;m Ravi Sharma a
          </p>

          {/* Big Heading */}
          <h1 className="text-[3.5rem] md:text-[5rem] font-extrabold leading-[1.1] tracking-tight">
            PASSIONATE <br />
            <span className="italic font-light">SOFTWARE</span> <br />
            ENGINEER
          </h1>

          {/* Info Box */}
          <div className="mt-10 border border-[#252525] rounded-xl p-6 relative">
            {/* Top Badge */}
            <div className="absolute -top-3 left-4 flex items-center space-x-2 text-xs font-mono uppercase bg-black px-2">
              <span>✶</span>
              <span>//////////////</span>
            </div>

            <p className="text-sm leading-relaxed text-gray-300 mb-4">
              Co-Founder & SWE @Strength | React Native, MERN | High-Performance, Scalable Solutions
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/ravisharma2026/"
                target="_blank"
                className="border gap-3 flex flex-row border-[#252525] rounded-lg text-white px-4.5 py-2.5 text-sm font-bold hover:bg-blue-600 transition"
              >
                <Image
                  src="/LinkedInLogo.PNG"
                  alt=""
                  width={20} height={0}
                  className=""
                />
                Lets Connect
              </Link>
              <button
                onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
                className="border gap-2 flex flex-row border-[#252525] rounded-lg text-white px-4.5 py-2.5 text-sm font-bold hover:bg-gray-800 transition"
              >
                <Image
                  src="/WorksLogo.PNG"
                  alt=""
                  width={20} height={0}
                  className=""
                />
                See Works
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Floating Badge (W. Nominee) */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-top-left bg-white text-black px-3 py-1 text-xs font-semibold tracking-wide">
        @Ravi<span className="ml-2 font-normal"></span>
      </div>
    </section>
  );
}
