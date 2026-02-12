import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

interface Job {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const jobs: Job[] = [
    {
      company: "IKOMPRAS S.R.L.",
      position: "Desarrollador de back-end con Node.js",
      period: "2025 - Presente",
      description:
        "Liderando el desarrollo de aplicaciones web escalables y optimizadas.",
      achievements: [
        "Desarrollé APIs RESTful con Node.js para la gestión eficiente de recursos y autenticación de usuarios.",
        "Diseñé y administré bases de datos MySQL, modelando relaciones, claves foráneas e índices para optimizar consultas.",
        "Implementé migraciones de base de datos utilizando herramientas como Knex.js para el versionado y control estructurado del esquema.",
        "Optimicé consultas SQL reduciendo tiempos de respuesta y mejorando el rendimiento general del sistema.",
        "Apliqué buenas prácticas de arquitectura backend, validación de datos y manejo estructurado de errores.",
      ],
    },
    {
      company: "DEVDATEP CONSULTING",
      position: "Desarrollador React Jr",
      period: "2025 - 2025",
      description:
        "Desarrollo de soluciones web innovadoras para clientes diversos.",
      achievements: [
        "Desarrollé más de 5 aplicaciones web desde cero utilizando React.js, implementando componentes reutilizables y renderizado dinámico.",
        "Optimicé el rendimiento de las aplicaciones mediante mejoras en la gestión de estado, reducción de renderizados innecesarios y buenas prácticas de arquitectura.",
        "Reestructuré la organización del frontend para mejorar la escalabilidad y mantenibilidad del código.",
        "Colaboré en revisiones de código y aplicación de buenas prácticas para garantizar calidad y consistencia en el desarrollo.",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Experiencia
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            />

            <div className="space-y-12">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="relative"
                >
                  <div className="md:pl-20">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      whileHover={{ scale: 1.5 }}
                    >
                      <Briefcase className="w-0 h-0" />
                    </motion.div>

                    <motion.div
                      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl mb-1 md:mb-0">{job.position}</h3>
                        <span className="text-sm text-muted-foreground">
                          {job.period}
                        </span>
                      </div>
                      <h4 className="text-primary mb-3">{job.company}</h4>
                      <p className="text-muted-foreground mb-4">
                        {job.description}
                      </p>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                            }
                            transition={{
                              delay: 1 + index * 0.2 + i * 0.1,
                            }}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▹</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
