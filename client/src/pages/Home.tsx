import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Showcase";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
