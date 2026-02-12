import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const socialIcons = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/eduardo-vallejo-97823a311/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:eduardovallejo5toa@gmail.com", label: "Gmail" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-foreground rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="container mx-auto px-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border-2 border-primary-foreground/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://media.licdn.com/dms/image/v2/D4E03AQF4FGcn6ULnpQ/profile-displayphoto-scale_200_200/B4EZrur99HGoAc-/0/1764941098493?e=1772668800&v=beta&t=YFG2tQQl_0iLHCbdRHyXTSkBnnXbRX5v2-GhO38cq4I" className="rounded-full border-2" alt="" />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl mb-4 tracking-tight"
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Eduardo Andres Vallejo Zabala
            </motion.span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl mb-6 text-primary-foreground/90"
          >
            <motion.span
              className="inline-block"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 1, duration: 1 }}
            >
              Desarrollador Web Full Stack
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Creando experiencias web excepcionales con código limpio y diseño moderno
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center mb-8"
          >
            {socialIcons.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-foreground/60"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
