import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useSmoothScroll } from "../context/SmoothScrollContext";

/* ======================
   Animation Variants
====================== */

const bgCircle = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6, duration: 0.8, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, ease: "easeOut" },
  }),
};

const arrowBounce = {
  animate: {
    y: [0, 10, 0],
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ======================
   Component
====================== */

function Home() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Glow */}
      <motion.div
        variants={bgCircle}
        initial="hidden"
        animate="visible"
        className="
          absolute
          left-1/2
          -top-250
          -translate-x-1/2
          z-0
          h-300
          w-300
          rounded-full
          bg-[#002B48]
          blur-3xl
        "
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-10 md:pt-28 text-center">
        {/* Availability */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-6 flex items-center gap-3 rounded-full bg-gray-700/30 px-5 py-2 backdrop-blur-md outline outline-white/20"
        >
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-300">Available for work</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="max-w-6xl text-4xl font-bold leading-tight md:text-6xl"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Anurag Singh
          </span>{" "}
          — a Full-Stack MERN Developer who builds real-world web applications
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.25}
          className="mt-6 max-w-2xl text-gray-400"
        >
          I'm a Full-Stack MERN Developer specializing in React, Node.js,
          Express, and MongoDB. I focus on clean architecture, performance, and
          smooth user experiences.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.4}
          className="mt-10 flex gap-4"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="rounded-full z-[100] bg-white/10 px-7 py-3 text-sm backdrop-blur-md transition hover:bg-white/20"
          >
            View Projects
          </button>
        </motion.div>

        {/* About / Scroll Indicator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.6}
          className="mt-5 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("about")}
        >
          <div className="bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-transparent font-semibold group-hover:scale-105 transition-transform">
            About Me
          </div>

          <motion.div
            variants={arrowBounce}
            animate="animate"
            className="group-hover:text-cyan-300 transition-colors"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
