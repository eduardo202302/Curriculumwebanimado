import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-2 text-sm">
            Hecho con
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.span>
            por un Desarrollador Web
          </p>
          <p className="text-sm mt-2 text-primary-foreground/80">
            © {currentYear} Todos los derechos reservados
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
