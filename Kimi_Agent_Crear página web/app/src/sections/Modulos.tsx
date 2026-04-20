import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Clock, Compass, Brain, Shield, Globe, FileText } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Identificación de Oportunidades de Transformación del Perfil Socioeconómico de la Región afín al Desarrollo Portuario Local",
    hours: 16,
    icon: Compass,
    color: "from-blue-500 to-indigo-600",
    teacher: "Sasha Juliana",
    description:
      "Analiza el contexto portuario del Urabá antioqueño para identificar las transformaciones económicas que trae consigo el nuevo ecosistema de puertos. Los participantes aprenden a leer el territorio, reconocer sus capacidades locales y convertir los desafíos regionales en oportunidades concretas de desarrollo.",
    topics: [
      "Demandas del Nuevo Ecosistema Portuario",
      "Identificación de Capacidades Locales Disponibles",
      "Desafíos Regionales como Oportunidades para Fortalecer el Desarrollo Portuario",
    ],
  },
  {
    number: "02",
    title: "Fundamentos de la Inteligencia Artificial como Herramienta Estratégica en la Toma de Decisiones",
    hours: 16,
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    teacher: "Andrés Blandón",
    description:
      "Introduce la Inteligencia Artificial como apoyo estratégico para la toma de decisiones en el sector portuario. Los participantes aprenden a buscar, procesar y analizar información con algoritmos de aprendizaje automático y Procesamiento del Lenguaje Natural (PLN), y a desplegar modelos para resolver problemas reales del entorno.",
    topics: [
      "Introducción a la Inteligencia Artificial (IA)",
      "Búsqueda avanzada de datos y procesamiento de información disruptiva para fortalecer la toma de decisiones",
      "Uso práctico de algoritmos de aprendizaje y Procesamiento del Lenguaje Natural",
      "Despliegue de modelos para el tratamiento de información avanzada",
    ],
  },
  {
    number: "03",
    title: "Vigilancia Tecnológica Aplicada a la Promoción del Desarrollo Portuario",
    hours: 16,
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
    teacher: "Alejandro Almario Rincón",
    description:
      "Enseña a configurar ecosistemas digitales de vigilancia para anticipar cambios técnicos, normativos y competitivos en el sector portuario. Los participantes identifican actores clave, tendencias globales y desarrollan habilidades en ciberseguridad y gestión de amenazas aplicadas al entorno portuario.",
    topics: [
      "Introducción a la Vigilancia Tecnológica (VT)",
      "Configuración de un ecosistema digital de vigilancia: identificación de competencias, aliados y demás actores clave en las tendencias globales del desarrollo portuario",
      "Fundamentos de la ciberseguridad aplicados al fortalecimiento del desarrollo portuario",
      "Monitoreo, control de amenazas y gestión de vulnerabilidades aplicados al fortalecimiento del desarrollo portuario",
    ],
  },
  {
    number: "04",
    title: "Propuesta Técnica de Proyecto robustecida por la (IA) y la (VT)",
    hours: 16,
    icon: FileText,
    color: "from-cyan-500 to-teal-500",
    teacher: "Durley López",
    highlighted: true,
    description:
      "Integra las competencias adquiridas en los módulos anteriores para estructurar propuestas técnicas de proyectos financiables. A través de un workshop práctico, cada participante formula su propia propuesta con objetivos, presupuesto base y cronograma, orientada a la transformación socioeconómica de Urabá.",
    topics: [
      "Estructuras de financiación (Grants, Capital Semilla, Cooperación Internacional)",
      "Metodologías más usadas en la formulación de proyectos enfocados en la promoción del desarrollo portuario",
      "Workshop de formulación: los participantes redactarán una propuesta técnica de proyecto (objetivos, presupuesto base y cronograma) contextualizada con la necesaria transformación socioeconómica de la subregión del Urabá, aplicando herramientas de vanguardia (IA) y (VT) para promover el desarrollo portuario",
    ],
  },
  {
    number: "05",
    title: "Oportunidades de Financiación de Recursos Internacionales",
    hours: 16,
    icon: Globe,
    color: "from-orange-500 to-amber-500",
    teacher: "Profesor de Cádiz",
    description:
      "Presenta el panorama de financiación pública y privada disponible desde Europa para proyectos de desarrollo portuario, sostenibilidad e innovación. Los participantes aprenden a identificar convocatorias, alinear sus propuestas con marcos estratégicos internacionales y explorar alianzas público-privadas (PPP).",
    topics: [
      "Identificación del marco estratégico y alineación internacional de financiación (Prioridades, Contribución, Normativa)",
      "Oportunidades de financiación públicas europeas: EuropeAid (desarrollo sostenible, gobernanza y reducción de la pobreza), Horizon Europe (investigación e innovación), Erasmus+ (educación y formación)",
      "Oportunidades de financiación privadas europeas: Fondos de Inversión de Impacto, Bancos de Desarrollo, Fondos Climáticos y Verdes, y posibilidades de Asociaciones Público-Privadas (PPP)",
    ],
  },
];

export default function Modulos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="modulos" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Plan de Estudios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Los{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              5 Módulos
            </span>{" "}
            del Diplomado
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            80 horas de formación distribuidas en 5 módulos especializados que integran teoría y
            práctica para el desarrollo portuario sostenible.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                module.highlighted
                  ? "bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                  : "bg-white/5 border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Highlighted Badge */}
              {module.highlighted && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                  <span className="text-xs font-semibold text-cyan-300">Módulo Destacado</span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-2 lg:min-w-[100px]">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}
                    >
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}
                      >
                        {module.number}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                        <Clock className="w-3 h-3" />
                        {module.hours}h
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {module.title}
                    </h3>

                    {module.teacher && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                        <span className="text-xs text-cyan-300 font-medium">
                          Docente: {module.teacher}
                        </span>
                      </div>
                    )}

                    {module.description && (
                      <p className="text-sm text-slate-300 leading-relaxed mb-4 border-l-2 border-cyan-500/30 pl-3">
                        {module.description}
                      </p>
                    )}

                    <div className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${module.color} flex-shrink-0`}
                          />
                          <p className="text-sm text-slate-400 leading-relaxed">{topic}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10"
        >
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400">80h</div>
              <div className="text-sm text-slate-400 mt-1">Intensidad Total</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">5</div>
              <div className="text-sm text-slate-400 mt-1">Módulos Especializados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">Mixto</div>
              <div className="text-sm text-slate-400 mt-1">Modalidad</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
