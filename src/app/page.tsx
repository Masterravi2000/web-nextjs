import Header from "@/components/Header";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import BrandsStrip from "@/components/BrandsStrip";

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
        {children}
      </body>
    </html>
  );
}
