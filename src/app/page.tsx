import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandsStrip from "@/components/BrandsStrip";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandsStrip />

      <section id="Manifest">
        <GallerySection />
      </section>

      <section id="About">
        <AboutSection />
      </section>

      <section id="Projects">
        <ProjectSection />
      </section>

      <Footer />
    </>
  );
}