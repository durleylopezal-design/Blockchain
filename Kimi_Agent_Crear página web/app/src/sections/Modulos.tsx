import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Clock,
  Compass,
  Brain,
  Shield,
  Globe,
  FileText,
  User,
  ChevronRight,
} from "lucide-react";

type Module = {
  number: string;
  title: string;
  hours: number;
  icon: React.ElementType;
  accentColor: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
  teacher: string;
  description: string;
  topics: string[];
};

const modules: Module[] = [
  {
    number: "01",
    title: "Identificación de Oportunidades de Transformación del Perfil Socioeconómico de la Región afín al Desarrollo Portuario Local",
    hours: 16,
    icon: Compass,
    accentColor: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-500/40",
    iconBg: "from-blue-500/20 to-indigo-600/20",
    iconColor: "text-blue-400",
    teacher: "Sasha Juliana",
    description:
      "Analiza el contexto portuario del Urabá antioqueño para identificar las transformaciones económicas que trae consigo el nuevo ecosistema de puertos. Los participantes aprenden a leer el territorio, reconocer las capacidades locales disponibles y convertir los desafíos regionales en oportunidades concretas para fortalecer el desarrollo portuario local.",
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
    accentColor: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500/40",
    iconBg: "from-purple-500/20 to-pink-600/20",
    iconColor: "text-purple-400",
    teacher: "Andrés Blandón",
    description:
      "Introduce la Inteligencia Artificial como apoyo estratégico para la toma de decisiones en el sector portuario. Los participantes aprenden a buscar y procesar información con algoritmos de aprendizaje automático y Procesamiento del Lenguaje Natural (PLN), y a desplegar modelos que respondan a problemas reales del entorno logístico y portuario.",
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
    accentColor: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/40",
    iconBg: "from-emerald-500/20 to-teal-600/20",
    iconColor: "text-emerald-400",
    teacher: "Alejandro Almario Rincón",
    description:
      "Enseña a configurar ecosistemas digitales de vigilancia para anticipar cambios técnicos, normativos y competitivos en el sector portuario. Los participantes identifican actores clave, mapean tendencias globales y desarrollan habilidades en ciberseguridad y gestión de amenazas aplicadas al entorno logístico portuario.",
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
    accentColor: "from-cyan-500 to-teal-500",
    borderColor: "border-cyan-500/40",
    iconBg: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
    teacher: "Durley López",
    description:
      "Integra las competencias adquiridas en los módulos anteriores para estructurar propuestas técnicas de proyectos financiables. A través de un workshop práctico, cada participante formula su propia propuesta con objetivos, presupuesto base y cronograma, orientada a la transformación socioeconómica de la subregión del Urabá y a la promoción del desarrollo portuario.",
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
    accentColor: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/40",
    iconBg: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-amber-400",
    teacher: "Profesor de Cádiz",
    description:
      "Presenta el panorama de financiación pública y privada disponible desde Europa para proyectos de desarrollo portuario, sostenibilidad e innovación. Los participantes aprenden a identificar convocatorias estratégicas, alinear sus propuestas con marcos internacionales y explorar alianzas público-privadas (PPP) como vía de financiación complementaria.",
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
      {/* Institutional accent glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-green-700/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 border border-emerald-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">Plan de Estudios · U. Católica Luis Amigó</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Los{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              5 Módulos
            </span>{" "}
            del Diplomado
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            80 horas de formación distribuidas en 5 módulos especializados que integran teoría y
            práctica para el desarrollo portuario sostenible de la subregión del Urabá.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { value: "80h", label: "Intensidad total" },
              { value: "5", label: "Módulos" },
              { value: "5", label: "Docentes" },
              { value: "Mixto", label: "Modalidad" },
            ].map((s) => (
              <div
                key={s.label}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-center min-w-[100px]"
              >
                <div className="text-xl font-bold text-emerald-400">{s.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modules list */}
        <div className="space-y-5">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1 }}
              className={`group relative rounded-2xl bg-white/[0.03] border ${module.borderColor} hover:bg-white/[0.06] transition-all duration-300`}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">

                  {/* Left: number + icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-3 lg:min-w-[96px]">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.iconBg} border border-white/10 flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <module.icon className={`w-8 h-8 ${module.iconColor}`} />
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-3xl font-black bg-gradient-to-br ${module.accentColor} bg-clip-text text-transparent leading-none`}
                      >
                        {module.number}
                      </div>
                      <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-1">
                        <Clock className="w-3 h-3" />
                        {module.hours}h
                      </div>
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="flex-1 min-w-0">

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-3 group-hover:text-emerald-300 transition-colors duration-200">
                      {module.title}
                    </h3>

                    {/* Teacher badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 border border-emerald-500/25 mb-4">
                      <User className="w-3 h-3 text-emerald-400" />
                      <span className="text-xs text-emerald-300 font-medium">
                        {module.teacher}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 pl-3 border-l-2 border-emerald-600/40">
                      {module.description}
                    </p>

                    {/* Topics */}
                    <div className="grid sm:grid-cols-2 gap-2">
                      {module.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${module.iconColor}`} />
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

        {/* Summary footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-600/20"
        >
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400">80h</div>
              <div className="text-sm text-slate-400 mt-1">Intensidad Total</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">5</div>
              <div className="text-sm text-slate-400 mt-1">Módulos Especializados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">Mixto</div>
              <div className="text-sm text-slate-400 mt-1">Modalidad</div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">
            Diplomatura Internacional articulada con la Universidad de Cádiz · Convocatoria ICETEX Expertos Internacionales 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
