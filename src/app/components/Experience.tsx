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
        "Diseñé e implementé APIs RESTful con Node.js, logrando una mejora del 40% en tiempos de respuesta y aumentando la eficiencia en la gestión de recursos y autenticación.",
        "Modelé y optimicé bases de datos MySQL, reduciendo el tiempo de ejecución de consultas complejas en un 50% mediante el uso estratégico de índices, relaciones y normalización.",
        "Implementé migraciones con Knex.js, disminuyendo errores en despliegues en un 70% y asegurando consistencia entre entornos de desarrollo y producción.",
        "Optimicé consultas SQL y procesos críticos, incrementando el rendimiento general del sistema en un 35% y reduciendo la carga del servidor.",
        "Apliqué buenas prácticas de arquitectura backend, logrando una reducción del 30% en bugs en producción gracias a validaciones robustas y manejo estructurado de errores.",
        "Participé en decisiones técnicas clave, contribuyendo a mejorar la velocidad de desarrollo del equipo en un 25% mediante estandarización y mejores prácticas.",
      ],
    },
    {
      company: "DEVDATEP CONSULTING",
      position: "Desarrollador React Jr",
      period: "2024 - 2025",
      description:
        "Desarrollo de soluciones web innovadoras para clientes diversos.",
      achievements: [
        "Lideré el desarrollo de +5 aplicaciones web desde cero con React.js, reduciendo los tiempos de entrega en un 30% mediante el uso de componentes reutilizables y arquitectura modular.",
        "Optimicé el rendimiento de las aplicaciones, disminuyendo en un 40% los renderizados innecesarios y mejorando la velocidad de carga en un 35% a través de una gestión de estado más eficiente.",
        "Reestructuré la arquitectura del frontend, logrando una mejora del 50% en mantenibilidad del código y facilitando la escalabilidad de nuevas funcionalidades.",
        "Implementé estándares de desarrollo y participé activamente en code reviews, reduciendo en un 25% los errores en producción y elevando la calidad del código del equipo.",
        "Colaboré con equipos multidisciplinarios para definir requerimientos y soluciones técnicas, mejorando la eficiencia del flujo de trabajo en un 20%.",
      ],
    },
    {
      company: "Freelancer",
      position: "Desarrollador web",
      period: "2023 - 2024",
      description:
        "Desarrollo de soluciones web innovadoras para clientes diversos.",
      achievements: [
        "Desarrollé +4 proyectos web personalizados (landing pages, sistemas web), logrando una tasa de satisfacción del cliente superior al 90%.",
        "Diseñé e implementé aplicaciones con React y Node.js, reduciendo los tiempos de entrega en un 35% mediante reutilización de componentes y buenas prácticas de desarrollo.",
        "Optimicé el rendimiento y SEO de sitios web, incrementando la velocidad de carga en un 40% y mejorando el posicionamiento orgánico de los clientes.",
        "Integré APIs de terceros (pagos, autenticación, servicios externos), reduciendo en un 50% el tiempo de implementación de funcionalidades complejas.",
        "Gestioné múltiples proyectos simultáneamente, cumpliendo el 100% de los plazos acordados mediante una planificación eficiente y comunicación constante con clientes.",
        "Brindé soporte y mantenimiento continuo, reduciendo incidencias en producción en un 30% y asegurando la estabilidad de las aplicaciones.",
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
