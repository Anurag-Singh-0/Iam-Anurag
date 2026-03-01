import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { useSmoothScroll } from "../../context/SmoothScrollContext";

function Footer() {
  const { scrollToSection } = useSmoothScroll();
  
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    scrollToSection("home");
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#030303] pt-16 pb-8 text-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-8">
          
          {/* Brand & Bio */}
          <div className="space-y-4 md:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Anurag <span className="text-blue-500">Singh</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              A passionate MERN Stack Developer building scalable, user-centric web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 md:col-span-1 md:items-center">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection("about")} className="transition-colors cursor-pointer hover:text-blue-400">About Me</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")} className="transition-colors cursor-pointer hover:text-blue-400">Skills</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="transition-colors cursor-pointer hover:text-blue-400">Projects</button>
              </li>
              {/* <li>
                <button onClick={() => scrollToSection("achievements")} className="transition-colors cursor-pointer hover:text-blue-400">Achievements</button>
              </li> */}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="space-y-4 md:col-span-1 md:text-right">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex gap-4 md:justify-end">
              <a 
                href="https://github.com/Anurag-Singh-0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2.5 text-gray-400 transition-all hover:bg-white hover:text-black"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/singhanurag2024/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2.5 text-gray-400 transition-all hover:bg-blue-500 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:singh.anurag2026@gmail.com" 
                className="rounded-full bg-white/5 p-2.5 text-gray-400 transition-all hover:bg-indigo-500 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              {/* <a 
                href="https://youtube.com/@yourchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2.5 text-gray-400 transition-all hover:bg-red-500 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {currentYear} Anurag Singh. All rights reserved.
          </p>
          
          <div className="mt-4 flex items-center gap-2 sm:mt-0">
            <span className="text-xs text-gray-500">Go to top</span>
            
            {/* Back to Top Button */}
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBackToTop}
              className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-blue-500 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;