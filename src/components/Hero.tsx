import curve from "../assets/curve.png";
import Button from "./shared/Button";
import HeroImg from "../assets/4-small.png";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const paragraphFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl w-full px-4 lg:px-8 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center">
        {/* Background gradients */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 pointer-events-none">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-40 h-40 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 hidden lg:block"></span>
          <span className="absolute right-4 bottom-12 w-40 h-40 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        {/* Animated Text Section */}
        <motion.div
          className="relative flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-orbitron relative inline-block">
            Where <span className="text-cyan-400">AI Experimentation</span>{" "}
            Meets
            <br className="hidden md:block" />
            <span className="relative inline-block">
              Real-World{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative inline-block">
                Innovation
                <img
                  src={curve}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[300px] max-w-full"
                  alt="Curve underline"
                />
              </span>
            </span>
          </h1>

          <motion.p
            className="text-base md:text-lg text-gray-300 mb-6 max-w-xl"
            variants={paragraphFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            We bridge the gap between AI theory and practical application
            through cutting-edge research, transformative education, and
            intelligent products that shape the future.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button href="/pricing" white>
              Get started
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Hero Image */}
        <motion.div
          className="relative flex flex-1 w-full max-w-md lg:max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.img
            src={HeroImg}
            alt="Hero image"
            className="w-full h-[350px] object-contain rounded-3xl"
            initial={{ scale: 0.95 }}
            animate={{
              scale: [1.2, 1.04, 1.2], // 1.1.02,1
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
