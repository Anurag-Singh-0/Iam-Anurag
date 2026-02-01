// ProjectDetail.jsx - Redesigned without cyan
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
  Code2,
  Calendar,
  Users,
  Cpu,
  Database,
  Shield,
  Zap,
  Terminal,
  Download,
  Copy,
  Check,
  GitBranch,
  Layers,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { getProjectBySlug } from "../data/projects";
import { motion } from "framer-motion";

function ProjectDetail() {
  const { projectName } = useParams();
  const project = getProjectBySlug(projectName);
  const [copied, setCopied] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/more-projects" className="text-purple-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/more-projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/70 border border-gray-800 rounded-lg hover:bg-gray-800/70 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              <h1 className="text-2xl font-bold">
                {project.title}{" "}
                <span className="bg-gradient-to-r from-yellow-100 to-green-600 bg-clip-text text-transparent ">
                  Technical Details
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-bold ${
                  project.status === "complete"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : project.status === "coming soon"
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                }`}
              >
                {project.status}
              </span>

              <div className="flex gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Project Images */}
          <div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-black mb-4">
              <img
                src={project.images[activeImage]}
                alt={project.alt}
                className="w-full h-96 object-contain p-4"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-3">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-20 rounded-lg overflow-hidden border transition-all ${
                    activeImage === index
                      ? "border-blue-500"
                      : "border-gray-800 hover:border-gray-600"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      activeImage === index ? "bg-blue-500/20" : "bg-black/40"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <Rocket className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-blue-400 font-medium">
                  Project Overview
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-900/70 border border-gray-800 rounded-xl hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <Layers className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-400">Category</span>
                </div>
                <div className="text-xl font-bold text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-4 bg-gray-900/70 border border-gray-800 rounded-xl hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-400">Technologies</span>
                </div>
                <div className="text-xl font-bold text-white">
                  {project.techStack.length} Used
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-6">
              {project.problemStatement && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-red-400" />
                    Problem Statement
                  </h3>
                  <p className="text-gray-300 bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-green-400" />
                    Technical Solution
                  </h3>
                  <p className="text-gray-300 bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {/* Key Features */}
          {project.keyFeatures && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Key Features</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/30 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg mt-1 group-hover:bg-blue-500/20 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2">
                          Feature {index + 1}
                        </h3>
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack Details */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <Terminal className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Technical Implementation
              </h2>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:border-blue-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                {project.technicalDetails?.architecture && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Architecture
                    </h3>
                    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                      <p className="text-gray-300">
                        {project.technicalDetails.architecture}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Installation Guide */}
          {project.installation && (
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <Download className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Setup Instructions
                  </h2>
                </div>

                <button
                  onClick={() => copyToClipboard(project.installation)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>

              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <pre className="p-8 pt-12 overflow-x-auto text-gray-300 text-sm">
                  <code>{project.installation}</code>
                </pre>
              </div>
            </section>
          )}

          {/* Challenges & Learnings */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            {project.challenges && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Technical Challenges
                  </h3>
                </div>

                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-red-500/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-red-400 font-bold">
                          #{index + 1}
                        </span>
                        <p className="text-gray-300">{challenge}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Learnings */}
            {project.learnings && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <Database className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Key Learnings
                  </h3>
                </div>

                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <p className="text-gray-300">{learning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Future Enhancements */}
          {project.futureEnhancements && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Future Roadmap
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.futureEnhancements.map((enhancement, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gray-900/50 border border-gray-800 rounded-xl group hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-gray-400 text-sm">
                        Planned Enhancement
                      </span>
                    </div>
                    <p className="text-gray-300">{enhancement}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
