import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Search,
  ChevronRight,
  Server,
  Layout,
  ArrowLeft,
  Eye,
} from "lucide-react";
import { getAllCategories, getProjectsByCategory } from "../data/projects";
import { useNavigate, Link } from "react-router-dom";

function MoreProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const categories = getAllCategories();

  const filteredProjects = getProjectsByCategory(selectedCategory).filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  const handleProjectClick = (projectSlug) => {
    navigate(`/projects/${projectSlug}`);
  };

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* 1. INDUSTRIAL HEADER */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
              <Link
                to="/"
                className="group flex items-center gap-2 text-[11px] tracking-widest font-black text-slate-500 hover:text-white transition-all uppercase"
              >
                <ArrowLeft className="w-4 h-4 text-indigo-500" />
                <span className="hidden sm:inline">Back to portfolio</span>
              </Link>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <h1 className="text-sm md:text-xl font-black text-white tracking-tighter uppercase italic">
                All <span className="text-indigo-500"> Projects</span>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-1 bg-indigo-500 text-black text-[10px] font-black rounded-full uppercase italic">
                {filteredProjects.length} Total
                {filteredProjects.length > 1 ? " Projects" : " Project"}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 2. QUERY INTERFACE (SEARCH & FILTERS) */}
        <section className="mb-20 space-y-12">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            {/* Search Input */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search by name & description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 transition-all text-xs"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all duration-500 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        : "bg-transparent border-white/10 text-slate-500 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. MODULAR PROJECT GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className="h-full bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 group-hover:border-indigo-500/40 group-hover:shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)]">
                  {/* Image Matrix */}
                  <div className="relative h-52 overflow-hidden bg-black">
                    <img
                      src={project.images[0]}
                      alt={project.alt}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                    />

                    {/* Technical Overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute inset-0 bg-indigo-950/40 backdrop-blur-sm" />
                      <div className="relative flex flex-col items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center">
                          <Eye className="w-5 h-5" />
                        </div>
                        <span className="text-white text-[9px] font-black uppercase tracking-[0.4em] italic">
                          Project Overview
                        </span>
                      </div>
                    </div>

                    {/* Floating Status Badge */}
                    <div className="absolute top-4 right-4 z-30">
                      {project.status === "complete" ? (
                        <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-emerald-500/30 rounded-full">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">
                            Live
                          </span>
                        </div>
                      ) : (
                        <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-indigo-500/30 rounded-full text-[8px] font-black text-indigo-400 uppercase tracking-widest">
                          {project.status}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Terminal */}
                  <div className="p-8 space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-white/5 border border-white/10 rounded-lg">
                        {project.category === "Full-stack" ? (
                          <Server className="w-3.5 h-3.5 text-indigo-400" />
                        ) : (
                          <Layout className="w-3.5 h-3.5 text-indigo-400" />
                        )}
                      </div>
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tighter group-hover:text-indigo-400 transition-colors italic">
                      {project.title}
                    </h3>

                    <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Matrix Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded text-[9px] text-slate-400 font-bold uppercase tracking-tighter"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[9px] font-black text-indigo-500">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Matrix */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex gap-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-500 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-500 hover:text-white transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <button className="flex items-center gap-2 text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em] group-hover:gap-3 transition-all italic">
                        Details <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 4. ERROR PHASE */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 border-2 border-dashed border-white/5 rounded-[3rem]"
          >
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">
              No_Matches_Found
            </h3>
            <p className="text-slate-500 max-w-xs mx-auto text-xs font-bold uppercase tracking-[0.2em] mt-2">
              Please refine search parameters or adjust filters.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default MoreProjects;