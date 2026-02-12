import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Sparkles, Rocket, Heart } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Código limpio, mantenible y escalable",
    },
    {
      icon: Sparkles,
      title: "Innovación",
      description: "Siempre explorando nuevas tecnologías",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimización y velocidad en cada proyecto",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Apasionado por resolver problemas",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Sobre Mí
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            Soy un desarrollador web full stack apasionado por crear experiencias digitales 
            excepcionales. Con más de X años de experiencia, me especializo en construir 
            aplicaciones web modernas, rápidas y accesibles utilizando las últimas tecnologías 
            del mercado. Mi objetivo es transformar ideas en productos digitales que marquen 
            la diferencia.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
