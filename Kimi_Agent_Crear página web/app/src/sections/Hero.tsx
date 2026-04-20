import { motion } from "framer-motion";
import { ArrowDown, Globe, Cpu, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Blockchain Port Logistics"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30"
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">
              Proyecto ICETEX Expertos Internacionales 2025
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">CADUR-TEC</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Blockchain para el Desarrollo Portuario
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed">
            Simulación de trazabilidad logística de exportación con Hyperledger Fabric para el
            corredor bananero del Urabá antioqueño. Una alianza entre la{" "}
            <span className="text-cyan-400 font-semibold">Universidad Católica Luis Amigo</span>,
            la <span className="text-cyan-400 font-semibold">Universidad de Cádiz</span> y{" "}
            <span className="text-cyan-400 font-semibold">Puerto Antioquia</span>.
          </p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-6"
          >
            {[
              { icon: Ship, label: "Puerto Antioquia", value: "Nodo Ancla" },
              { icon: Cpu, label: "Hyperledger Fabric", value: "Plataforma" },
              { icon: Globe, label: "Uraba", value: "Region PDET" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                <stat.icon className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
              asChild
            >
              <a href="#diplomado">Explorar el Diplomado</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 font-semibold px-8 py-6 text-lg rounded-xl transition-all"
              asChild
            >
              <a href="#proyecto">Conocer el Proyecto</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#proyecto"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Descubrir más</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
