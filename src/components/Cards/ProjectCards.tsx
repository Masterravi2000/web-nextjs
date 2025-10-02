import Image from "next/image";

interface ProjectCardProps {
  text: string;
  image: string;
}

export default function ProjectCard({ text, image }: ProjectCardProps) {
  return (
    <div className="border-2 border-[#181818] rounded-xl p-10">
      <div className="flex flex-col gap-5">
        <div className="w-10 h-10">
          <Image
            src={image}
            alt="Project Image"
            width={40}
            height={40}
            className="w-full h-auto object-cover"
          />
        </div>
        <a className="text-white font-semi-bold text-lg">{text}</a>
      </div>
    </div>
  );
}
