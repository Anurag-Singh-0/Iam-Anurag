import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Filter,
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
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      {/* Glass Header */}
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover:border-blue-500/50">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Portfolio</span>
              </Link>
              <div className="h-6 w-px bg-white/10 hidden sm:block" />
              <h1 className="text-xl font-bold tracking-tight">
                ALL{" "}
                <span className="bg-gradient-to-r from-white to-green-600 bg-clip-text text-transparent font-semibold group-hover:scale-105 transition-transform">
                  {filteredProjects.length > 1 ? "Project's" : "Project"}
                </span>
              </h1>
            </div>
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {filteredProjects.length}{" "}
              {filteredProjects.length > 1
                ? "Total Project's"
                : "Total Project"}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters Section */}
        <section className="mb-16 space-y-8">
          <div className="grid lg:grid-cols-12 gap-6 items-end">
            {/* Professional Search Bar */}
            <div className="lg:col-span-5 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="text"
                placeholder="Search by tech, name, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-white/20 transition-all"
              />
            </div>

            {/* Category Chips */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3 text-gray-500">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Filter Category
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-white/10 border-white/40 text-white "
                        : "bg-black border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Improved Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className="h-full bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-indigo-500/50">
                  {/* MacBook Style Top Bar */}
                  <div className="h-8 bg-gray-900/80 flex items-center px-4 border-b border-gray-800">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                    </div>
                  </div>

                  {/* High-End Image Container with Blur Hover */}
                  <div className="relative h-48 overflow-hidden bg-black">
                    <img
                      src={project.images[0]}
                      alt={project.alt}
                      className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-110"
                    />

                    {/* Centered Premium Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <div className="absolute inset-0 bg-indigo-900/20 backdrop-blur-[4px]" />
                      <div className="relative z-10 flex flex-col items-center gap-2 p-5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all">
                        <div className="p-2 bg-indigo-500 rounded-full">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                          Case Study
                        </span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      {project.status === "complete" ? (
                        <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md border border-green-500/30 rounded-full">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          <span className="text-[9px] font-black text-green-500 uppercase">
                            Live
                          </span>
                        </div>
                      ) : (
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-indigo-500/30 rounded-full text-[9px] font-black text-indigo-400 uppercase">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                        {project.category === "Full-stack" ? (
                          <Server className="w-4 h-4 text-indigo-400" />
                        ) : (
                          <Layout className="w-4 h-4 text-indigo-400" />
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        {project.category}{" "}
                        {project.subcategory && `• ${project.subcategory}`}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-xs mb-6 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack - Minimalist Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-gray-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Integrated Action Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex gap-3">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-500 hover:text-indigo-400 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-500 hover:text-indigo-400 transition-colors"
                            title="Source Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <button className="flex items-center gap-1 text-[10px] font-bold text-indigo-500 uppercase tracking-widest group-hover:gap-2 transition-all">
                        Details <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl mb-6">
              <Search className="w-8 h-8 text-indigo-500/50" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No matching units found
            </h3>
            <p className="text-gray-500 max-w-xs mx-auto text-sm">
              We couldn't find any projects matching your current filter or
              search criteria.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default MoreProjects;
