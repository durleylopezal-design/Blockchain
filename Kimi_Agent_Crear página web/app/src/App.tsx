import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import SobreProyecto from "@/sections/SobreProyecto";
import Diplomado from "@/sections/Diplomado";
import Modulo4 from "@/sections/Modulo4";
import Modulos from "@/sections/Modulos";
import Arquitectura from "@/sections/Arquitectura";
import Infraestructura from "@/sections/Infraestructura";
import Cronograma from "@/sections/Cronograma";
import Contacto from "@/sections/Contacto";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <SobreProyecto />
        <Diplomado />
        <Modulo4 />
        <Modulos />
        <Arquitectura />
        <Infraestructura />
        <Cronograma />
        <Contacto />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
