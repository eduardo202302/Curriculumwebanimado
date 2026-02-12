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
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Dashboard analítico para redes sociales con gráficos interactivos y métricas en tiempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "D3.js", "Express", "MongoDB"],
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
