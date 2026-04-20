import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Clock, Users, GraduationCap, Calendar, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, value: "80h", label: "Intensidad Horaria" },
  { icon: BookOpen, value: "5", label: "Modulos" },
  { icon: Users, value: "30", label: "Cupo" },
  { icon: GraduationCap, value: "Mixto", label: "Modalidad" },
];

export default function Diplomado() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diplomado" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
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
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Formacion Academica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Diplomado en{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Vigilancia Tecnologica e IA
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed">
            Diplomatura Internacional articulada con la Universidad de Cadiz, disenada para el
            fortalecimiento del talento humano Regional en herramientas sistematicas para anticipar
            cambios tecnicos y normativos en el desarrollo portuario.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Nombre Completo del Programa
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Diplomatura en Vigilancia Tecnologica e Inteligencia Artificial para la Promocion
                del Desarrollo Portuario
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Horario
              </h3>
              <p className="text-slate-300">
                Martes y Viernes: 7:00pm a 9:00pm
                <br />
                Sabado: 7:00am a 12:00m
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                Sede
              </h3>
              <p className="text-slate-300">
                Universidad Catolica Luis Amigo - Centro Regional Apartado
                <br />
                Ingenieria de Sistemas - Modalidad Mixta
              </p>
            </div>

            {/* ODS */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Objetivos de Desarrollo Sostenible</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    4
                  </div>
                  <p className="text-sm text-slate-300">
                    Garantizar una educacion inclusiva, equitativa y de calidad y promover
                    oportunidades de aprendizaje durante toda la vida para todos.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    8
                  </div>
                  <p className="text-sm text-slate-300">
                    Promover el crecimiento economico sostenido, inclusivo y sostenible, el empleo
                    pleno y productivo y el trabajo decente para todos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Objetivo General</h3>
              <p className="text-slate-300 leading-relaxed">
                Desarrollar capacidades tecnicas y metodologicas en Vigilancia Tecnologica e
                Inteligencia Artificial para identificar oportunidades estrategicas y formular
                proyectos de innovacion viables que respondan a los desafios actuales de la
                subregion del Uraba antioqueno frente al desarrollo portuario.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Objetivos Especificos</h3>
              <div className="space-y-4">
                {[
                  "Comprender los ciclos de la VT e IA aplicados a los retos y oportunidades afines al desarrollo portuario de la subregion.",
                  "Dominar herramientas digitales y busqueda avanzada de informacion para la toma de decisiones en contexto.",
                  "Analizar tendencias tecnologicas emergentes y mapear actores clave para la formulacion de proyectos de impacto en la promocion del desarrollo portuario.",
                  "Estructurar propuestas tecnicas de proyectos fortalecidas por la VT y la IA que tengan como fin aportar al fortalecimiento del perfil socioeconomica de Uraba.",
                ].map((obj, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-cyan-400 font-semibold">{i + 1}</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Publico Objetivo</h3>
              <div className="space-y-2">
                {[
                  "Estudiantes U. Luis Amigo (A partir del VI semestre)",
                  "Graduados U. Luis Amigo",
                  "Empleados U. Luis Amigo",
                  "Profesores U. Luis Amigo",
                  "Publico Externo interesado en la tematica afin con la diplomatura",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
