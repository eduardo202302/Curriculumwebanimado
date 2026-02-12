import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico full stack con carrito de compras, pasarela de pagos y panel de administración.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL",],
      demoLink: "#",
      githubLink: "#",
    },
     {
      title: "Sistema de Gestion de Citas Medicas con Ia",
      description:
        "Plataforma de comercio electrónico full stack con carrito de compras, pasarela de pagos y panel de administración.",
      image: "https://api.thagencia.com/wp-content/uploads/2024/08/sistema-de-sitas-para-sitio-web-de-clinicas-o-doctores.jpg",
      tags: ["React", "Node.js", "MySql", "Express", "Ia"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Api del Clima",
      description:
        "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
      image: "data:image/jpeg;base64,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",
      tags: ["React", "TypeScript", "Tailwind"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Sitio web portfolio moderno con animaciones avanzadas y diseño responsive.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tags: ["React", "Motion", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#",
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
            Proyectos Destacados
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-lg overflow-hidden group"
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                  >
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-foreground/90"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-foreground/90"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          delay: 0.8 + index * 0.1 + tagIndex * 0.05,
                        }}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
