import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Code2,
  Server,
  Layout,
  Eye,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { getFeaturedProjects } from "../data/projects";
import { useNavigate } from "react-router-dom";

function Projects() {
  const featuredProjects = getFeaturedProjects();
  const navigate = useNavigate();

  const handleProjectClick = (projectSlug) => {
    navigate(`/projects/${projectSlug}`);
  };

  return (
    <section
      id="projects"
      className="relative bg-[#030303] py-32 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.8]"
            >
              Featured{" "}
              <span className="text-transparent stroke-text">Work</span>
            </motion.h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/more-projects")}
            className="group flex items-center gap-4 px-8 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 italic"
          >
            Explore_Projects <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid lg:grid-cols-2 gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
              onClick={() => handleProjectClick(project.slug)}
            >
              <div className="relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-[#080808] border border-white/5 transition-all duration-700 group-hover:border-indigo-500/30">
                {/* IMAGE COMPONENT */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.alt}
                    className="h-full w-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* OVERLAY LOGIC */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                  {/* FLOATING CATEGORY BADGE */}
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                      <span className="text-[9px] font-black text-white uppercase tracking-widest italic">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* INTERACTIVE EYE (CENTERED) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-20 h-20 bg-indigo-500 text-black rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.4)]">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.status === "complete" && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">
                          Live_Module
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-slate-500 text-base font-medium leading-relaxed max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-[10px] text-slate-400 font-bold uppercase tracking-tighter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BLUEPRINT DECOR (SIDE DECOR) */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 h-2/3 w-[1px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA DECOR */}
        <div className="mt-32 flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-indigo-500 to-transparent mb-8" />
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-[1em] mb-4">
            End_of_Selection
          </p>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
        .group:hover .stroke-text {
          -webkit-text-stroke: 1px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </section>
  );
}

export default Projects;
