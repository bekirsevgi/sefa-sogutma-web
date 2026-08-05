import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import WhyUs from "@/components/sections/WhyUs";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Products from "@/components/sections/Products";
import Footer from "@/components/layout/Footer";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Stats />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}