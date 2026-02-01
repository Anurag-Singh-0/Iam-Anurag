import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Zap,
  Copy,
  Check,
  ShieldCheck,
  Rocket,
  Globe,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import projectData from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

function ProjectDetail() {
  const { projectName } = useParams();
  // Fetch the project based on the slug from the URL
  const project = projectData.find((p) => p.slug === projectName);
  const [copied, setCopied] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Handle case where project doesn't exist
  if (!project)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white p-4">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-b from-red-500 to-black bg-clip-text text-transparent">404</h1>
          <h1 className="text-2xl md:text-4xl font-black mb-6 uppercase">Project Not Found</h1>
          <Link to="/more-projects" className="text-indigo-500 hover:underline text-lg">
            Back to Projects
          </Link>
        </div>
      </div>
    );

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* 1. FLOATING NAVIGATION */}
      <nav className="fixed top-4 md:top-6 inset-x-0 z-[100] max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-3 h-12 md:h-14 flex items-center justify-between shadow-2xl">
          <Link
            to="/more-projects"
            className="flex items-center gap-2 text-xs font-bold tracking-widest text-white hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />{" "}
            {/* <span className="hidden xs:inline-block text-[10px] sm:text-xs">BACK TO PROJECTS</span> */}
            <span className="xs:hidden text-[10px]">BACK TO PROJECT</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-all"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-3 sm:px-5 py-1.5 rounded-full text-[10px] font-black hover:bg-indigo-50 transition-all flex items-center gap-2 tracking-tighter whitespace-nowrap"
              >
                <span className="hidden sm:inline">LIVE - DEMO</span>
                <span className="sm:hidden">DEMO</span>
                <Globe className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="relative min-h-[95vh] flex items-end justify-center overflow-hidden border-b border-white/5 pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={project.images[activeImage]}
            className="w-full h-full object-cover opacity-20 blur-3xl scale-110"
            alt="glow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-end justify-between gap-8 md:gap-12"
          >
            <div className="w-full lg:w-1/2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 md:mb-6">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                  {project.category}
                </span>
                <div
                  className={`w-2 h-2 rounded-full ${project.status === "complete" ? "bg-emerald-500" : "bg-yellow-500 animate-pulse"}`}
                />
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                  {project.status}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-4 md:mb-6 uppercase break-words">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            {/* INTERACTIVE GALLERY */}
            <div className="w-full lg:w-1/2 relative group mt-8 lg:mt-0">
              <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_0_50px_-12px_rgba(99,102,241,0.4)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    src={project.images[activeImage]}
                    className="w-full h-full object-contain p-4"
                    alt={project.title}
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 p-2 bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 shadow-2xl">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-500 ${activeImage === i ? "bg-indigo-500 w-8 md:w-10" : "bg-white/20 hover:bg-white/40"}`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CASE STUDY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32">
        <div className="grid lg:grid-cols-3 gap-12 md:gap-24">
          <div className="lg:col-span-2 space-y-20 md:space-y-32">
            {/* Logic: Problem vs Solution */}
            <div className="grid sm:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-3 md:space-y-4">
                <h4 className="flex items-center gap-2 text-white font-black text-[10px] tracking-[0.3em] uppercase italic opacity-50">
                  <ShieldCheck className="w-3 h-3" /> 01_THE_CHALLENGE
                </h4>
                <p className="text-slate-300 text-base md:text-lg lg:text-xl font-medium italic border-l-2 border-red-500/50 pl-4 md:pl-6 py-2">
                  {project.problemStatement ||
                    "Developing a scalable architecture to handle complex data relationships and user interactions."}
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="flex items-center gap-2 text-white font-black text-[10px] tracking-[0.3em] uppercase italic opacity-50">
                  <Rocket className="w-3 h-3" /> 02_THE_RESULT
                </h4>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                  {project.solution ||
                    "Engineered a robust solution focused on user experience, performance optimization, and clean MVC patterns."}
                </p>
              </div>
            </div>

            {/* Video Integration */}
            {project.video && (
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter italic flex items-center gap-3 md:gap-4">
                  Visual Demo <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-indigo-500" />
                </h3>
                <a
                  href={project.video}
                  target="_blank"
                  rel="noreferrer"
                  className="block relative group aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10"
                >
                  <img
                    src={project.images[0]}
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                    alt="video thumbnail"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                      <PlayCircle className="w-7 h-7 md:w-10 md:h-10" />
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* Key Features Map */}
            <div className="space-y-8 md:space-y-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter italic">
                Technical Highlights
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {(project.keyFeatures || project.highlights).map(
                  (feature, i) => (
                    <div
                      key={i}
                      className="group p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-indigo-500/20 transition-all flex gap-3 md:gap-5"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                        <Zap className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-slate-200 font-bold block mb-1 text-sm md:text-base">
                          Module {i + 1}
                        </span>
                        <span className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium break-words">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* SIDEBAR: ARCHITECTURE & SPECS */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 md:top-32 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md shadow-2xl">
                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-6 md:mb-10">
                  SYSTEM_MANIFEST
                </h4>

                <div className="space-y-8 md:space-y-10">
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase block mb-3 md:mb-4 tracking-widest">
                      Logic Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.techStack.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-black/50 border border-white/5 text-[10px] font-black text-white whitespace-nowrap"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 md:pt-10 border-t border-white/5">
                    <span className="text-[10px] font-black text-slate-500 uppercase block mb-3 md:mb-4 tracking-widest">
                      Infrastructure
                    </span>
                    <p className="text-xs font-bold text-slate-400 leading-relaxed break-words">
                      {project.technicalDetails?.architecture ||
                        project.technicalDetails?.frontend ||
                        "Modular System Architecture"}
                    </p>
                  </div>

                  <div className="pt-6 md:pt-10 border-t border-white/5">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <Github className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">
                          Access Source
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SETUP TERMINAL */}
      {project.installation && (
        <section className="bg-[#050505] py-16 md:py-32 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-8 md:mb-16">
              <h3 className="text-xs font-black text-indigo-500 uppercase tracking-[0.4em] mb-4 text-center">
                Development Environment
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter italic text-center uppercase">
                Execute_Deployment
              </h2>
            </div>

            <div className="relative group">
              <button
                onClick={() => copyToClipboard(project.installation)}
                className="absolute top-10 md:top-14 right-4 md:right-6 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-lg md:rounded-xl backdrop-blur-md border border-white/10 transition-all active:scale-90"
                aria-label="Copy code"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-white" />
                )}
              </button>

              <div className="rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                <div className="h-10 md:h-12 bg-white/5 border-b border-white/5 flex items-center px-4 md:px-6 gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                  <span className="ml-3 md:ml-4 text-[10px] font-mono text-slate-600 tracking-[0.3em] uppercase truncate">
                    terminal — session_active
                  </span>
                </div>
                <pre className="p-4 md:p-8 lg:p-12 font-mono text-indigo-300 text-xs sm:text-sm md:text-base overflow-x-auto leading-relaxed scrollbar-hide whitespace-pre-wrap">
                  <code>{project.installation}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. ROADMAP / CHALLENGES GRID */}
      {project.challenges && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32 border-b border-white/5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter mb-8 md:mb-16 italic uppercase">
            Critical Challenges
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {project.challenges.map((challenge, i) => (
              <div
                key={i}
                className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all"
              >
                <div className="text-red-500 font-mono text-xs mb-3 md:mb-4">
                  LOG_ERROR_0{i + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER CTA */}
      <footer className="py-20 md:py-40 text-center px-4 sm:px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter mb-8 md:mb-12 leading-[0.9] uppercase">
            Ready to build the <br className="hidden sm:block" />{" "}
            <span className="text-indigo-500 italic">Next Generation?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link
              to="/more-projects"
              className="px-8 md:px-12 py-4 md:py-5 rounded-full border border-white/10 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all whitespace-nowrap"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default ProjectDetail;