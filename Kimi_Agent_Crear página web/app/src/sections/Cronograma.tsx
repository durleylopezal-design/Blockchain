import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, UserCheck, Code, CheckCircle2 } from "lucide-react";

const milestones = [
  {
    week: "Semana 1-2",
    title: "Kick-off y levantamiento de requerimientos",
    responsible: "Ambos",
    date: "Feb 2025",
    icon: UserCheck,
  },
  {
    week: "Semana 3-4",
    title: "Entorno Hyperledger Fabric operativo",
    responsible: "Programador",
    date: "Feb-Mar 2025",
    icon: Code,
  },
  {
    week: "Semana 5-7",
    title: "Discovery Phase v1.0 entregada",
    responsible: "Consultor",
    date: "Mar 2025",
    icon: CheckCircle2,
  },
  {
    week: "Semana 7-10",
    title: "Documento Tecnico Infraestructura v1.0",
    responsible: "Consultor",
    date: "Mar-Abr 2025",
    icon: CheckCircle2,
  },
  {
    week: "Semana 7-9",
    title: "API Gateway y backend funcional",
    responsible: "Programador",
    date: "Mar-Abr 2025",
    icon: Code,
  },
  {
    week: "Semana 10-12",
    title: "Dashboard frontend operativo",
    responsible: "Programador",
    date: "Abr 2025",
    icon: Code,
  },
  {
    week: "Semana 12-14",
    title: "Formularios integrados al sistema",
    responsible: "Programador",
    date: "Abr-May 2025",
    icon: Code,
  },
  {
    week: "Semana 14-16",
    title: "Pruebas completas y puesta en marcha",
    responsible: "Programador",
    date: "May 2025",
    icon: CheckCircle2,
  },
  {
    week: "Semana 16-17",
    title: "Manuales usuario y tecnico",
    responsible: "Programador",
    date: "May 2025",
    icon: CheckCircle2,
  },
  {
    week: "Semana 17",
    title: "Cierre, entrega final y demo",
    responsible: "Ambos",
    date: "30 May 2025",
    icon: CheckCircle2,
  },
];

export default function Cronograma() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cronograma" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Cronograma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Linea de Tiempo del{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Proyecto
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Periodo de ejecucion: 5 de Febrero - 30 de Mayo 2025 | 60 horas totales de trabajo
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-cyan-500/30 lg:-translate-x-px" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.week}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.08 }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 lg:-translate-x-2 mt-6 z-10" />

                {/* Spacer for desktop */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Content Card */}
                <div className="ml-12 lg:ml-0 lg:w-1/2">
                  <div
                    className={`p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <milestone.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cyan-400">
                          {milestone.week}
                        </div>
                        <div className="text-xs text-slate-500">{milestone.date}</div>
                      </div>
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">
                      {milestone.title}
                    </h4>
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 text-xs text-slate-400">
                      <UserCheck className="w-3 h-3" />
                      {milestone.responsible}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: "Consultor Blockchain", hours: "20h", period: "Arquitecto / Experto" },
            { label: "Programador", hours: "40h", period: "Full-Stack Blockchain" },
            { label: "Total Proyecto", hours: "60h", period: "5 Feb - 30 May 2025" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {item.hours}
              </div>
              <div className="text-sm font-semibold text-white mt-2">{item.label}</div>
              <div className="text-xs text-slate-400 mt-1">{item.period}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
