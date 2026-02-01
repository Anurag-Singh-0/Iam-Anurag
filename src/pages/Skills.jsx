import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Code2, Terminal, Cpu } from "lucide-react";
import skillsData from "../data/skills"; // Adjust path as needed

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- Component: Progress Bar Row ---
const ProgressBar = ({ label, percentage, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm font-semibold tracking-wide text-gray-300">
      <span>{label}</span>
      <span className={color.split(" ")[1]}>{percentage}%</span>
    </div>
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-800">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={`h-full rounded-full ${color.split(" ")[0]} shadow-[0_0_12px_currentColor]`}
      />
    </div>
  </div>
);

// --- Component: Skill Box (Glassmorphism Slide Up) ---
const SkillBox = ({ skill }) => (
  <motion.div
    variants={itemVariants}
    className="group relative flex h-24 w-24 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 transition-all duration-300 hover:border-white/20 hover:bg-neutral-800 hover:shadow-lg"
  >
    {/* Icon - Slides up slightly on hover */}
    <div className="transition-transform duration-300 ease-out group-hover:-translate-y-3">
      <img
        src={skill.image}
        alt={skill.name}
        className="h-10 w-10 object-contain drop-shadow-lg filter transition-all duration-300 group-hover:brightness-110"
      />
    </div>

    {/* Name Label - Glassmorphism Slide Up */}
    <div className="absolute bottom-0 left-0 flex w-full translate-y-full items-center justify-center border-t border-white/10 bg-white/5 py-2 text-center backdrop-blur-md transition-transform duration-300 ease-out group-hover:translate-y-0">
      <span className="text-[10px] font-bold uppercase tracking-wider text-white">
        {skill.name}
      </span>
    </div>
  </motion.div>
);

function Skills() {
  const progressStats = [
    { label: "Frontend Development", percentage: 90, color: "bg-yellow-400 text-yellow-400" },
    { label: "Backend Development", percentage: 85, color: "bg-yellow-400 text-yellow-400" },
    { label: "Problem Solving / DSA", percentage: 70, color: "bg-cyan-500 text-cyan-500" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-black px-4 py-24 text-white md:pb-24"
    >
      <div className="mx-auto max-w-5xl space-y-24">
        
        {/* ================= HEADER ================= */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            My <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            My technical proficiency and toolset.
          </p>
        </div>

        {/* ================= SECTION 1: PROGRESS BARS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-neutral-900/20 p-8 backdrop-blur-sm md:p-12"
        >
          {/* Changed to flex-col for better stacking with odd number of items */}
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {progressStats.map((stat, index) => (
              <ProgressBar
                key={index}
                label={stat.label}
                percentage={stat.percentage}
                color={stat.color}
              />
            ))}
          </div>
        </motion.div>

        {/* ================= SECTION 2: SKILL ICONS GRID ================= */}
        <div className="space-y-20">
          
          {/* Frontend Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
               <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400">Frontend</h3>
               <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {skillsData.frontendSkillsData.map((skill, i) => (
                <SkillBox key={i} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Backend Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
               <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400">Backend</h3>
               <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {skillsData.backendSkillsData.map((skill, i) => (
                <SkillBox key={i} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Others / Languages Section */}
          <div className="space-y-8">
             <div className="flex items-center gap-4">
               <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
               <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400">Languages</h3>
               <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {skillsData.programmingLangSkillsData.map((skill, i) => (
                <SkillBox key={i} skill={skill} />
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;