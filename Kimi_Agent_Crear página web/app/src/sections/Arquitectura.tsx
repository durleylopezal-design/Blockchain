import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Shield,
  Zap,
  Lock,
  Server,
  Database,
  Wifi,
  FileCheck,
} from "lucide-react";

const layers = [
  {
    icon: Wifi,
    title: "Capa IoT / Integración Portuaria",
    description:
      "GPS Tracking de contenedores, sensores de temperatura/humedad y APIs DIAN/VUCE para alimentar eventos al ledger.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Database,
    title: "Capa de Almacenamiento",
    description:
      "CouchDB para el estado actual del ledger (world state) con capacidad de consulta JSON; IPFS/MinIO para documentos pesados referenciados por hash on-chain.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Server,
    title: "Capa de Consenso y Red",
    description:
      "Nodos peer y orderer con consenso Raft que garantizan el acuerdo distribuido. Fabric CA gestiona identidades con certificados X.509.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: FileCheck,
    title: "Capa Smart Contracts / Chaincode",
    description:
      "Lógica de negocio encapsulada en contratos inmutables. Define qué datos se registran, quién los puede leer y bajo qué condiciones se ejecutan transiciones de estado.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Layers,
    title: "Capa de Aplicación",
    description:
      "Dashboard Web, App Portuaria, API Gateway REST/GraphQL y Hyperledger Explorer: la única capa visible al usuario final.",
    color: "from-orange-500 to-amber-500",
  },
];

const attributes = [
  { icon: Zap, label: "Rendimiento", value: "500+ TPS", desc: "Latencia <= 2s" },
  { icon: Server, label: "Escalabilidad", value: "3 a 20+ nodos", desc: "Sin downtime" },
  { icon: Lock, label: "Privacidad", value: "Canal Privado + PDC", desc: "Datos comerciales protegidos" },
  { icon: Shield, label: "Disponibilidad", value: "99.5% uptime", desc: "Operaciones 24/7" },
];

export default function Arquitectura() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="arquitectura" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Arquitectura Tecnica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Arquitectura Blockchain
            </span>{" "}
            de Alto Nivel
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-300">
            Red blockchain permissioned basada en Hyperledger Fabric para la trazabilidad de
            cadenas logísticas de exportación en entornos portuarios, con Puerto Antioquia como
            empresa ancla.
          </p>
        </motion.div>

        {/* Blockchain Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden border border-cyan-500/20"
        >
          <img
            src="/blockchain-viz.jpg"
            alt="Arquitectura Blockchain CADUR-TEC"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Attributes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {attributes.map((attr) => (
            <div
              key={attr.label}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-cyan-500/30 transition-all"
            >
              <attr.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-white">{attr.value}</div>
              <div className="text-sm text-slate-300 font-medium mt-1">{attr.label}</div>
              <div className="text-xs text-slate-400 mt-1">{attr.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Layers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Vista de{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Capas
            </span>
          </h3>

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <layer.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{layer.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{layer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Plataforma Seleccionada:{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Hyperledger Fabric 2.5 LTS
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Naturaleza permissioned con gestión nativa de identidades PKI",
              "Canales privados y Private Data Collections (PDC)",
              "Compatibilidad oficial ARM64 para Raspberry Pi",
              "Chaincode en Go, Java, Node.js",
              "Finalidad inmediata de bloque (no probabilística)",
              "Adopción probada: TradeLens, GSBN, Walmart",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
              >
                <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
