import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, HardDrive, Router, Monitor, Wrench, Package } from "lucide-react";

const components = [
  {
    icon: Server,
    name: "Raspberry Pi 5 - 8GB RAM",
    quantity: 8,
    cost: "$7.200.000",
    description: "Nodos peer ARM64 para Hyperledger Fabric. Compatible oficialmente desde v2.4.",
  },
  {
    icon: Monitor,
    name: "Monitor HP 23\" Full HD",
    quantity: 8,
    cost: "$5.200.000",
    description: "Estaciones de trabajo academicas para interaccion con la red blockchain.",
  },
  {
    icon: Wrench,
    name: "Kit Teclado + Mouse Inalambrico HP",
    quantity: 8,
    cost: "$800.000",
    description: "Perifericos de entrada para cada estacion de trabajo academica.",
  },
  {
    icon: Server,
    name: "Servidor Lenovo ThinkSystem SR570",
    quantity: 1,
    cost: "$16.000.000",
    description: "Xeon 16 cores, 64GB RAM, 1TB SSD. Nodo central: Ordering Service, Fabric CA, Explorer.",
  },
  {
    icon: HardDrive,
    name: "Servidor NAS + 2x WD Red 4TB",
    quantity: 1,
    cost: "$5.400.000",
    description: "Almacenamiento redundante RAID 1 para respaldos de ledger y certificados.",
  },
  {
    icon: Router,
    name: "Router Empresarial VLAN/VPN",
    quantity: 1,
    cost: "$2.500.000",
    description: "Gestion de conectividad WAN y segmentacion VLAN interna con soporte VPN.",
  },
  {
    icon: Package,
    name: "Rack Gabinete Cerrado 24U",
    quantity: 1,
    cost: "$900.000",
    description: "Alojamiento fisico seguro para servidor, NAS, router y switch.",
  },
  {
    icon: Server,
    name: "Soportes Uctronics 19\" 1U para RPi",
    quantity: 3,
    cost: "$1.500.000",
    description: "Montaje de los 8 Raspberry Pi en el rack de manera ordenada.",
  },
];

const phases = [
  {
    phase: "PoC (Lab Uraba)",
    duration: "Feb - May 2025",
    description: "Despliegue en 3-4 Raspberry Pi + 1 servidor x86; test-network Fabric; chaincode basico.",
  },
  {
    phase: "Piloto Pre-productivo",
    duration: "Jun - Sep 2025",
    description: "Incorporar Puerto Antioquia y exportador real; integracion API DIAN/VUCE; pruebas de carga.",
  },
  {
    phase: "Produccion v1.0",
    duration: "Oct 2025",
    description: "Multi-org real: banco, naviera, ICA; SLA 99.5%; monitoreo continuo; disaster recovery.",
  },
  {
    phase: "Escalado Regional",
    duration: "2026+",
    description: "Puertos de Turbo y Buenaventura; exportadores de cacao, aguacate; integracion GSBN API.",
  },
];

export default function Infraestructura() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Server className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Infraestructura</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Infraestructura{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Tecnologica
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-300">
            Inversion en contrapartida institucional de $39.500.000 COP para la adquisicion de
            infraestructura tecnologica especializada basada en Hyperledger Fabric 2.5 LTS sobre
            arquitectura ARM64.
          </p>
        </motion.div>

        {/* Components Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Componentes del Sistema</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {components.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-lg font-bold text-cyan-400">{item.cost}</div>
                <div className="text-sm font-semibold text-white mt-1">{item.name}</div>
                <div className="text-xs text-slate-500 mt-1">Cant: {item.quantity}</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm text-slate-400">Total Contrapartida IES</div>
              <div className="text-3xl font-bold text-white">
                $39.500.000 <span className="text-lg text-cyan-400">COP</span>
              </div>
            </div>
            <div className="text-sm text-slate-400 text-center sm:text-right">
              Convocatoria ICETEX Expertos Internacionales 2025
              <br />
              Universidad Catolica Luis Amigo - Sede Apartado
            </div>
          </div>
        </motion.div>

        {/* Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Hoja de Ruta de{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Despliegue
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <div className="text-xs text-cyan-400 font-medium mb-2">{phase.duration}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{phase.phase}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
