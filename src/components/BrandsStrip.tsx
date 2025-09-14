// src/components/BrandsStrip.tsx
import Image from "next/image";
import Link from "next/link";

type Brand = {
  id: string;
  src?: string;            // optional: if missing -> text-only logo
  name: string;
  alt?: string;
  href?: string;
  width?: number;          // image width (if src provided)
  height?: number;         // image height (if src provided)
  wrapperClass?: string;
  textClass?: string;
};

const BRANDS: Brand[] = [
  { id: "strength", src: "/StrengthLogo.png", name: "Strength", alt: "Strength", href: "#", width: 33, height: 33 },
  { id: "stamin", src: "/StaminLogo.png", name: "Stamin", alt: "Stamin", href: "#", width: 37, height: 37 },
  { id: "qilin", name: "Qilin", alt: "Qilin", href: "#", width: 160, height: 48 },
  { id: "luke", src: "/brands/novacene.png", name: "Luke", alt: "Luke", href: "#", width: 110, height: 40 },
];

function SlashBar() {
  return (
    <div className="w-full border-y border-gray-800 overflow-hidden">
      <div className="flex whitespace-nowrap text-xs font-mono uppercase tracking-widest">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-2 text-gray-400">////////////////</span>
            {i % 2 === 0 ? "TLC_CNU4_16297" : "COLLABORATIONS & BRAND EXPERIENCE"}
          </span>
        ))}
      </div>
    </div>
  );
}

// <-- ONLY change here: single constant to control all brand-name text
const NAME_CLASS = "w-36 text-4xl font-medium tracking-wide text-center"; // adjust w-36 / text-sm as needed

export default function BrandsStrip() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white">
      <SlashBar />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <ul className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {BRANDS.map((b) => (
            <li key={b.id}>
              <Link href={b.href ?? "#"} aria-label={b.alt ?? b.name} className="block hover:opacity-90 transition">
                {b.src ? (
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 ${b.wrapperClass ?? ""}`}>
                      <Image
                        src={b.src}
                        alt={b.alt ?? b.name}
                        width={b.width ?? 64}
                        height={b.height ?? 40}
                        className="object-contain"
                      />
                    </div>
                    {/* unified name style */}
                    <span className={NAME_CLASS}>{b.name}</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    {/* same unified name style for text-only brands */}
                    <span className={NAME_CLASS}>{b.name}</span>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <SlashBar />
    </section>
  );
}
