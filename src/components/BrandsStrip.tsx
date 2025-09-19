// src/components/BrandsStrip.tsx
import Image from "next/image";
import Link from "next/link";

type Brand = {
  id: string;
  src?: string; // optional: if missing -> text-only logo
  name: string;
  alt?: string;
  href?: string;
  width?: number; // image width (if src provided)
  height?: number; // image height (if src provided)
  wrapperClass?: string;
  textClass?: string;
};

const BRANDS: Brand[] = [
  { id: "strength", src: "/StrengthLogo.png", name: "Strength", alt: "Strength", href: "#", width: 30, height: 30 },
  { id: "stamin", src: "/StaminLogo.png", name: "Stamin", alt: "Stamin", href: "#", width: 30, height: 30},
  { id: "qilin", src: "/QilinLogo.png", name: "Qilin", alt: "Qilin", href: "#", width: 32, height: 32 },
  { id: "luke", src: "/LukeLogo.png", name: "Luke", alt: "Luke", href: "#", width: 40, height: 40 },
];

function SlashBar() {
  return (
    <div className="w-full border-y border-gray-800 overflow-hidden">
      <div className="flex whitespace-nowrap text-[10px] sm:text-xs font-mono uppercase tracking-widest animate-marquee">
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

// Responsive name style
const NAME_CLASS =
  "mt-1 text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium tracking-wide text-center";

export default function BrandsStrip() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white">
      <SlashBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
          {BRANDS.map((b) => (
            <li key={b.id}>
              <Link
                href={b.href ?? "#"}
                aria-label={b.alt ?? b.name}
                className="block hover:opacity-90 transition"
              >
                {b.src ? (
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <div className={`flex-shrink-0 ${b.wrapperClass ?? ""}`}>
                      <Image
                        src={b.src}
                        alt={b.alt ?? b.name}
                        width={b.width ?? 64}
                        height={b.height ?? 40}
                        className="object-contain w-10 h-10 sm:w-auto sm:h-auto"
                      />
                    </div>
                    <span className={NAME_CLASS}>{b.name}</span>
                  </div>
                ) : (
                  <div className="flex items-center">
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
