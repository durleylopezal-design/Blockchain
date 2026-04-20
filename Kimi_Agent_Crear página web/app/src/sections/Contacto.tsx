import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Anchor,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  GraduationCap,
  Globe,
  Heart,
} from "lucide-react";

const allies = [
  "Universidad Católica Luis Amigo",
  "Universidad Cooperativa de Colombia",
  "Corporación Universitaria Remington",
  "Universidad de Cádiz (España)",
  "Puerto Antioquia",
  "ICETEX",
];

export default function Contacto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Allies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-10">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Aliados
            </span>{" "}
            Estratégicos
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {allies.map((ally, index) => (
              <motion.div
                key={ally}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-xs text-slate-300 leading-tight">{ally}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                  <Anchor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">CADUR-TEC</h3>
                  <p className="text-sm text-cyan-400">Transferencia de Conocimiento Cadiz - Uraba</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Proyecto de cooperación científica internacional para la transformación productiva
                de la región de Urabá mediante tecnologías emergentes como Blockchain, Inteligencia
                Artificial y Vigilancia Tecnológica aplicadas al desarrollo portuario.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Ubicación</div>
                  <p className="text-sm text-slate-400">
                    Universidad Catolica Luis Amigo
                    <br />
                    Sede Apartado, Antioquia, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <GraduationCap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Programa Academico</div>
                  <p className="text-sm text-slate-400">
                    Ingenieria de Sistemas
                    <br />
                    Centro Regional Apartado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Coordinación del Proyecto</div>
                  <p className="text-sm text-slate-400">
                    Paula Andrea Uribe Polo
                    <br />
                    Docente Coordinadora Proyecto ICETEX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Convocatoria</div>
                  <p className="text-sm text-slate-400">
                    ICETEX Expertos Internacionales 2025
                    <br />
                    Subvenciones para Proyectos
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/20">
              <h4 className="text-xl font-semibold text-white mb-6">Enlaces de Interés</h4>

              <div className="space-y-3">
                {[
                  {
                    label: "Universidad Catolica Luis Amigo",
                    href: "https://www.funlam.edu.co",
                  },
                  {
                    label: "Universidad de Cadiz",
                    href: "https://www.uca.es",
                  },
                  {
                    label: "ICETEX",
                    href: "https://www.icetex.gov.co",
                  },
                  {
                    label: "Puerto Antioquia",
                    href: "https://www.puertoantioquia.com.co",
                  },
                  {
                    label: "Hyperledger Foundation",
                    href: "https://www.hyperledger.org",
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
                  >
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
              <h4 className="text-xl font-semibold text-white mb-4">Ejes Temáticos ICETEX</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-cyan-400 font-bold">1</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    <span className="text-white font-medium">Transformación Digital</span>
                    <br />
                    Ciudades y Territorios Inteligentes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-teal-400 font-bold">2</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    <span className="text-white font-medium">Desarrollo Productivo</span>
                    <br />
                    Fortalecimiento de cadenas de valor agropecuarias
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="pt-12 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                <Anchor className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-slate-400">
                CADUR-TEC | Universidad Catolica Luis Amigo
              </span>
            </div>

            <div className="flex items-center gap-1 text-sm text-slate-500">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>para el desarrollo de Uraba</span>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-slate-600">
            2025 CADUR-TEC - Proyecto ICETEX Expertos Internacionales. Todos los derechos reservados.
            <br />
            Documento elaborado en el marco del Proyecto CADUR-TEC | Convocatoria ICETEX Expertos
            Internacionales 2025 | Universidad Catolica Luis Amigo - Sede Apartado
          </div>
        </motion.div>
      </div>
    </section>
  );
}
