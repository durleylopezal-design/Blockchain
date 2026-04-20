import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Transformación Productiva",
    description:
      "Impulso de la transformación productiva de la región de Urabá mediante la cooperación científica internacional con la Universidad de Cádiz (España).",
  },
  {
    icon: Users,
    title: "Multi-Actor",
    description:
      "Alianza entre la Universidad Católica Luis Amigo (líder), UCC, Corporación Universitaria Remington y Universidad de Cádiz para la transferencia de conocimiento.",
  },
  {
    icon: Lightbulb,
    title: "Simulación Blockchain",
    description:
      "Implementación de un entorno de simulación basado en tecnología Blockchain para la trazabilidad de cadenas logísticas de exportación.",
  },
  {
    icon: TrendingUp,
    title: "Eje Temático ICETEX",
    description:
      "Enmarcado en el eje de Transformación Digital - Ciudades y Territorios Inteligentes de la Convocatoria ICETEX Expertos Internacionales 2025.",
  },
];

export default function SobreProyecto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyecto" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <Target className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">Sobre el Proyecto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Transferencia de{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Conocimiento Cádiz - Urabá
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              CADUR-TEC es una alianza académica internacional que vincula a la Universidad Católica
              Luis Amigo como institución líder, junto con la Universidad Cooperativa de Colombia,
              la Corporación Universitaria Remington y la Universidad de Cádiz (España).
            </p>

            <p className="text-slate-400 leading-relaxed">
              El objetivo principal es transferir capacidades en tecnologías emergentes hacia el
              territorio del Urabá antioqueño, una de las regiones con mayor potencial logístico y
              agroindustrial de Colombia, concentrando más del 70% de las exportaciones de banano
              del país.
            </p>

            <p className="text-slate-400 leading-relaxed">
              La Actividad 3 del proyecto contempla la implementación de un entorno de simulación
              basado en tecnología Blockchain para la trazabilidad de cadenas logísticas de
              exportación, vinculando directamente a Puerto Antioquia y los principales productos
              de la región: banano, flores y derivados agroindustriales.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "$39.5M", label: "Contrapartida COP" },
                { value: "80+", label: "Millones de cajas de banano exportadas" },
                { value: "PDET", label: "Region Prioritaria" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/univesidad.jpg"
                alt="Universidad Católica Luis Amigo - Sede Apartado"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 p-5 rounded-xl bg-slate-900/95 backdrop-blur-lg border border-cyan-500/20 shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Alianza Academica</div>
                  <div className="text-xs text-cyan-400">4 Instituciones</div>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Universidad Católica Luis Amigo, UCC, Corporación Universitaria Remington y
                Universidad de Cádiz.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
