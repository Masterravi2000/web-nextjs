import Header from "@/components/Header";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import BrandsStrip from "@/components/BrandsStrip";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HeroSection />
        <BrandsStrip />
        <AboutSection />
        <ProjectSection />
        {children}
      </body>
    </html>
  );
}
