import { motion } from "framer-motion";
import { ChevronRight, Code2, Server, Layout, Eye } from "lucide-react";
import { getFeaturedProjects } from "../data/projects";
import { useNavigate } from "react-router-dom";

function Projects() {
  const featuredProjects = getFeaturedProjects();
  const navigate = useNavigate();

  const handleProjectClick = (projectSlug) => {
    navigate(`/projects/${projectSlug}`);
  };

  const handleViewMore = () => {
    navigate("/more-projects");
  };

  return (
    <section id="projects" className="relative min-h-screen bg-black py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-yellow-200 to-green-500 bg-clip-text text-transparent">Work</span>
            </h2>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => handleProjectClick(project.slug)}
            >
              {/* MacBook Style Card */}
              <div className="relative bg-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]">
                {/* MacBook Top Bar */}
                <div className="h-8 bg-black/30 flex items-center px-4 border-b border-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                </div>

                {/* Image Section with Eye Hover & Blur */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Centered Eye & Background Blur Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Eye className="w-6 h-6 text-white" />
                      <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                        View Case Study
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {project.category === "Full-stack" ? (
                        <div className="p-1.5 bg-white/10 border border-blue-500/20 rounded-lg">
                          <Server className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="p-1.5 bg-white/10 border border-purple-500/20 rounded-lg">
                          <Layout className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Animated Green Status for Complete */}
                    {project.status === "complete" && (
                      <div className="flex items-center gap-2 px-2 py-1 bg-green-500/5 border border-green-500/10 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span className="text-[10px] font-bold text-green-500 uppercase">
                          Complete
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 mb-5 leading-relaxed">
                    {project.highlights[0]}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 rounded-md text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button
            onClick={handleViewMore}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-indigo-500/30 text-white rounded-full font-bold hover:bg-indigo-500/5 hover:border-indigo-500 transition-all duration-300 group cursor-pointer"
          >
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span>View All Projects</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
