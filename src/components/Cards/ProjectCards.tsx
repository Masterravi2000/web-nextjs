import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  _id: number;
  name: string;
  text: string;
  image: string;
}

export default function ProjectCard({_id, name, text, image }: ProjectCardProps) {
  return (
    <Link className="border-2 border-[#181818] rounded-xl p-10"
    href={`/ProjectPages/${_id}`}>
      <div className="flex flex-col gap-7">
        <div className="w-full flex gap-4 items-center flex-row">
           <div className="w-10 h-10">
          <Image
            src={image}
            alt="Project Image"
            width={40}
            height={40}
            className="w-full h-auto object-cover"
          />
        </div>
        <h3 className="text-3xl font-semiBold pt-1 text-white">{name}</h3>
        </div>
        <p className="text-white font-semi-bold text-lg">{text}</p>
      </div>
    </Link>
  );
}
