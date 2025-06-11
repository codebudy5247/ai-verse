import { FlaskConical, GraduationCap, Rocket, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Manifesto = () => {
  return (
    <section id="mission" className="py-5 px-5 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h2
              className="text-3xl font-bold mb-2 text-accent2"
              variants={fadeInUp}
            >
              Our Manifesto
            </motion.h2>

            <motion.div
              className="h-1 w-20 bg-accent mb-4"
              variants={fadeInUp}
            />

            <motion.p
              className="text-2xl font-semibold text-gray-200"
              variants={fadeInUp}
            >
              "We believe AI should be{" "}
              <span className="text-cyan-400">accessible</span>,{" "}
              <span className="text-blue-400">actionable</span>, and{" "}
              <span className="text-indigo-400">transformative</span>"
            </motion.p>

            <motion.p className="text-gray-400" variants={fadeInUp}>
              Founded by AI researchers and industry practitioners, AI Nexus was
              born from a simple observation: The gap between theoretical AI and
              practical implementation is too wide.
            </motion.p>

            <motion.p className="text-gray-400" variants={fadeInUp}>
              We're creating a new paradigm where experimentation drives
              education, education informs product development, and products
              fund further research - a continuous cycle of innovation.
            </motion.p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {[
              {
                icon: <FlaskConical className="h-10 w-10 mb-4 text-cyan-400" />,
                title: "Experiment",
                desc: "Pushing AI boundaries",
                gradient: "from-blue-900/70 to-cyan-900/50",
              },
              {
                icon: (
                  <GraduationCap className="h-10 w-10 mb-4 text-blue-400" />
                ),
                title: "Educate",
                desc: "Democratizing AI knowledge",
                gradient: "from-cyan-900/70 to-blue-900/50",
              },
              {
                icon: <Rocket className="h-10 w-10 mb-4 text-indigo-400" />,
                title: "Engineer",
                desc: "Building AI solutions",
                gradient: "from-indigo-900/70 to-purple-900/50",
              },
              {
                icon: <RefreshCcw className="h-10 w-10 mb-4 text-purple-400" />,
                title: "Evolve",
                desc: "Continuous innovation cycle",
                gradient: "from-purple-900/70 to-indigo-900/50",
              },
            ].map(({ icon, title, desc, gradient }, index) => (
              <motion.div
                layout
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-br ${gradient} p-6 rounded-2xl h-48 flex flex-col justify-end border border-gray-700 hover:border-accent transition-all`}
              >
                {icon}
                <h3 className="font-bold text-accent2">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
