// src/components/BrandsStrip.tsx
import Image from "next/image";
import Link from "next/link";

type Brand = {
  _id: number;
  id: string;
  src?: string; // optional: if missing -> text-only logo
  name: string;
  alt?: string;
  href?: string;
  scale?: number; // optional: per-logo visual size correction (default 1)
  wrapperClass?: string;
  textClass?: string;
};

const BRANDS: Brand[] = [
    { id: "nexdoc", src: "/logodoc.png", name: "Nexdoc", alt: "Nexdoc", href: "#", scale: 1.1, _id: 3 },
  { id: "fishpay", src: "/FishPayLogo.png", name: "FishPay", alt: "FishPay", href: "#", scale: 1.5, _id: 4 },
  { id: "strength", src: "/StrengthLogo.png", name: "Strength", alt: "Strength", href: "#", scale: 0.85, _id: 1 },
  { id: "stamin", src: "/StaminLogo.png", name: "Stamin", alt: "Stamin", href: "#", scale: 0.90, _id: 2 },
];

function SlashBar() {
  return (
    <div className="w-full border-y border-[#202020] overflow-hidden">
      <div className="flex whitespace-nowrap text-[10px] sm:text-xs font-mono uppercase tracking-widest animate-marquee">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-2 text-[#505050]">{'////////////////'}</span>
            {i % 2 === 0 ? "ENGINEER. LEARN. SCALE." : "TECH • QUALITY • ART"}
          </span>
        ))}
      </div>
    </div>
  );
}

// Responsive name style
const NAME_CLASS =
  "mt-1 text-lg text-white sm:text-xl md:text-2xl lg:text-4xl font-medium tracking-wide text-center";

// Fixed logo box size (all logos scale to fit this, regardless of source padding)
const LOGO_BOX_CLASS = "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10";

export default function BrandsStrip() {
  return (
    <section className="w-full bg-black font-semi-bold text-[#707070]">
      <SlashBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-15">
        <ul className="flex flex-wrap justify-center items-center gap-12 sm:gap-10 md:gap-16 lg:gap-30">
          {BRANDS.map((b) => (
            <li key={b.id}>
              <Link
                href={`/ProjectPages/${b._id}`}
                aria-label={b.alt ?? b.name}
                className="block hover:opacity-90 transition"
              >
                {b.src ? (
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <div
                      className={`relative flex-shrink-0 flex items-center justify-center ${LOGO_BOX_CLASS} ${b.wrapperClass ?? ""}`}
                    >
                      <div
                        className="relative"
                        style={{
                          width: `${(b.scale ?? 1) * 100}%`,
                          height: `${(b.scale ?? 1) * 100}%`,
                        }}
                      >
                        <Image
                          src={b.src}
                          alt={b.alt ?? b.name}
                          fill
                          className="object-contain"
                        />
                      </div>
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