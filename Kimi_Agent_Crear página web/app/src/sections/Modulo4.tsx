import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Star,
  FileText,
  Lightbulb,
  Handshake,
  Target,
  CheckCircle2,
  Award,
  BookOpen,
} from "lucide-react";

const topics = [
  {
    icon: FileText,
    title: "Estructuras de Financiacion",
    description:
      "Grants, Capital Semilla, Cooperacion Internacional - Conocimiento profundo de las fuentes de financiamiento disponibles para proyectos de desarrollo portuario.",
  },
  {
    icon: BookOpen,
    title: "Metodologias de Formulacion",
    description:
      "Metodologias mas usadas en la formulacion de proyectos enfocados a la promocion de desarrollo portuario - Marcos logicos, arboles de problemas y metodologias estandarizadas.",
  },
  {
    icon: Handshake,
    title: "Workshop de Formulacion",
    description:
      "Los participantes redactaran una Propuesta Tecnica de Proyecto (Objetivos, Presupuesto base y Cronograma) contextualizada con la transformacion socioeconomica de Uraba y el uso de herramientas tecnologicas de vanguardia (IA) y (VT).",
  },
];

const learningOutcomes = [
  "Identificar y evaluar fuentes de financiacion internacional para proyectos portuarios",
  "Aplicar metodologias estandarizadas de formulacion de proyectos con enfoque en desarrollo portuario",
  "Integrar herramientas de IA y VT en la estructuracion de propuestas tecnicas",
  "Desarrollar un proyecto completo con objetivos, presupuesto y cronograma",
  "Contextualizar propuestas de acuerdo a las necesidades reales de la subregion del Uraba",
];

export default function Modulo4() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="modulo4" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-sm font-semibold text-amber-300">Modulo Destacado</span>
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>
        </motion.div>

        {/* Professor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/20">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-auto">
                <img
                  src="/durley-lopez.jpg"
                  alt="Profesora Durley Lopez"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/90 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Info */}
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">
                        Modulo 4 - 16 Horas
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                      <span className="text-xs text-amber-300 font-medium">Docente Especialista</span>
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold">
                    <span className="text-white">Durley </span>
                    <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                      Lopez
                    </span>
                  </h2>

                  <h3 className="text-xl text-cyan-300 font-medium">
                    Propuesta Tecnica de Proyecto robustecidas por la (IA) y la (VT)
                  </h3>

                  <p className="text-slate-300 leading-relaxed max-w-2xl">
                    Este modulo tiene como proposito capacitar a los participantes en la formulacion
                    de proyectos tecnicos fortalecidos con herramientas de Inteligencia Artificial y
                    Vigilancia Tecnologica, enfocados en el fortalecimiento del perfil socioeconomico
                    de la subregion del Uraba antioqueno y la promocion del desarrollo portuario.
                  </p>

                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Award className="w-4 h-4 text-cyan-400" />
                      16 horas de formacion intensiva
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Target className="w-4 h-4 text-cyan-400" />
                      Workshop practico de formulacion
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Lightbulb className="w-4 h-4 text-cyan-400" />
                      Integracion IA + VT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Topics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Tematicas del{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Modulo 4
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mb-5 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all">
                  <topic.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{topic.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Resultados de{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Aprendizaje
              </span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-relaxed">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Este modulo es parte del Diplomado en Vigilancia Tecnologica e Inteligencia Artificial
            para la Promocion del Desarrollo Portuario, una formacion de 80 horas que integra
            tecnologia, innovacion y desarrollo regional.
          </p>
          <a
            href="#modulos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold hover:from-cyan-400 hover:to-teal-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
          >
            Ver todos los modulos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
