import { motion } from "framer-motion";
import {
  Download,
  Briefcase,
  GraduationCap,
  Target,
  Code2,
  Cpu,
  Terminal,
  ArrowRight,
  Zap,
} from "lucide-react";
import aboutMeData from "../data/aboutMe";
import educationData from "../data/education";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

function About() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen w-full bg-black px-4 py-24 text-white md:pb-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl space-y-20"
      >
        {/* ================= HERO SECTION ================= */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Intro Text */}
          <motion.div variants={cardVariants} className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tight md:text-7xl bg-gradient-to-r from-white bg-clip-text text-transparent">
              Building Scalable Web Applications
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              <p>{aboutMeData.profile.summary}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Resume.pdf"
                download
                className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-gray-200 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              {/* <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10 cursor-pointer"
              >
                Let's Talk
              </button> */}
            </div>
          </motion.div>

          {/* Right: Stats & Highlights Block */}
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              variants={cardVariants}
              className="md:col-span-2 rounded-3xl border border-white/10 bg-neutral-900/50 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-bold">Philosophy</h3>
              </div>
              <p className="font-mono text-sm leading-relaxed text-gray-300">
                <span className="text-cyan-400">const</span>{" "}
                <span className="text-purple-400">philosophy</span> = {"{"}{" "}
                <br />
                &nbsp;&nbsp;approach:{" "}
                <span className="text-green-400">"Clean & Scalable"</span>,
                <br />
                &nbsp;&nbsp;focus:{" "}
                <span className="text-green-400">"User Experience"</span>,<br />
                &nbsp;&nbsp;goal:{" "}
                <span className="text-green-400">
                  "{aboutMeData.technicalPhilosophy}"
                </span>
                <br />
                {"}"};
              </p>
            </motion.div>

            {/* Stat Cards */}
            <motion.div
              variants={cardVariants}
              className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 flex flex-col justify-center"
            >
              <h4 className="text-4xl font-bold text-white mb-2">30+</h4>
              <p className="text-gray-400 text-sm">DSA Problems Solved</p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 flex flex-col justify-center"
            >
              <h4 className="text-4xl font-bold text-white mb-2">3+</h4>
              <p className="text-gray-400 text-sm">Months Commercial Exp.</p>
            </motion.div>
          </div>
        </div>

        {/* ================= EXPERIENCE & EDUCATION SPLIT ================= */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left 2/3: Experience */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-cyan-400" />
              <h3 className="text-2xl font-bold">Experience History</h3>
            </div>

            <div className="space-y-6">
              {aboutMeData.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="group relative rounded-3xl border border-white/10 bg-neutral-900/30 p-8 transition hover:border-white/20"
                >
                  <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <span className="font-medium">{exp.company}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                        <span className="text-sm text-gray-400">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="self-start rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-gray-300">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <Zap className="mt-1 h-4 w-4 shrink-0 text-cyan-500" />
                        <span className="text-sm leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-gray-500 px-2 py-1 rounded bg-white/5 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 1/3: Education & Focus */}
          <motion.div variants={cardVariants} className="space-y-8">
            {/* Education */}
            <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-8">
              <div className="mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-2 top-3 bottom-3 w-px bg-white/10"></div>

                {educationData.map((edu) => (
                  <div key={edu.id} className="relative pl-8">
                    <div className="absolute left-[5px] top-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                    <h4 className="text-base font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{edu.college}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.period}</p>
                    {/* {edu.gpa && (
                      <span className="mt-2 inline-block rounded bg-purple-500/10 px-2 py-1 text-[10px] font-bold tracking-wider text-purple-300 uppercase">
                        GPA: {edu.gpa}
                      </span>
                    )} */}
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-8">
              <div className="mb-6 flex items-center gap-3">
                <Target className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-bold">Current Focus</h3>
              </div>

              <div className="space-y-4">
                {aboutMeData.currentFocus.map((focus) => (
                  <div
                    key={focus.id}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/30 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-sm">{focus.title}</h4>
                      {focus.id === 1 ? (
                        <Code2 className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Cpu className="h-4 w-4 text-gray-500" />
                      )}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
