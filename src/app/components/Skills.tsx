import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaFigma 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiPostgresql, 
  SiMongodb,
  SiMysql,
  SiJira,
  SiKx
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
  color: string;
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skills: Skill[] = [
    { name: "React", icon: FaReact, category: "frontend", color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, category: "frontend", color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, category: "frontend", color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, category: "backend", color: "#339933" },
    { name: "Express", icon: SiExpress, category: "backend", color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "backend", color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, category: "backend", color: "#47A248" },
    { name: "MySQL", icon: SiMysql, category: "backend", color: "#4479A1" },
    { name: "Jira", icon: SiJira, category: "tools", color: "#0052CC" },
    { name: "Knex.js", icon: SiKx, category: "tools", color: "#000000" },
    { name: "Git", icon: FaGitAlt, category: "tools", color: "#F05032" },
    { name: "Figma", icon: FaFigma, category: "tools", color: "#F24E1E" },
  ];

  const categories = [
    { id: "all", label: "Todas" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Herramientas" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section ref={ref} className="py-20 bg-background">
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
            Habilidades
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* Category filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              layout
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon 
                      className="w-12 h-12" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <h3 className="text-sm text-center">{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
