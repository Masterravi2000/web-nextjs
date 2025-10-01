// Box.jsx
import Image from "next/image";

export default function ProjectCard({ text }) {
  return (
    <div className="border border-[#181818] rounded-xl py-10 px-8">
      <div className="flex flex-col gap-5">
        <div className="w-10 h-10">
          <Image
            src="/StaminLogo.png"
            alt="Profile"
            width={20}
            height={20}
            className="w-full h-auto object-cover"
          />
        </div>
        <a className="text-white font-semibold text-xl">{text}</a>
      </div>
    </div>
  );
}
