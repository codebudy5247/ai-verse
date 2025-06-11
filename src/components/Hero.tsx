import { Container } from "./shared/Container";
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

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 relative">
        {/* Background gradients */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 pointer-events-none">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 hidden lg:block"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        {/* Animated Text Section */}
        <motion.div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-orbitron relative inline-block">
            Where <span className="text-cyan-400">AI Experimentation</span>{" "}
            Meets
            <br className="hidden md:block" />
            <span className="relative inline-block">
              Real-World{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative inline-block">
                Innovation
                <img
                  src={curve}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[624px] max-w-full"
                  alt="Curve underline"
                />
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We bridge the gap between AI theory and practical application
            through cutting-edge research, transformative education, and
            intelligent products that shape the future.
          </p>

          <Button href="/pricing" white>
            Get started
          </Button>
        </motion.div>

        {/* Animated Hero Image */}
        <motion.div
          className="relative flex flex-1 lg:w-1/2 max-w-3xl mx-auto lg:mx-0 lg:max-w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInRight}
        >
          <img
            src={HeroImg}
            alt="Hero image"
            className="w-full h-auto lg:h-full object-contain rounded-3xl"
          />
        </motion.div>
      </Container>
    </section>
  );
};
