import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Youtube, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const myAccessKey = import.meta.env.VITE_CONTACT_ACCESS_TOKEN;

  // Web3Forms AJAX Submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", myAccessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          style: {
            background: '#fff', 
            color: '#333',     
            border: '1px solid #3b82f6',
            fontWeight: '500'
          },
        });
        event.target.reset();
      } else {
        console.error("Error", data);
        toast.error("Something went wrong. Please try again later.", {
          style: {
            background: '#fff', 
            color: '#333',     
            border: '1px solid #ef4444',
            fontWeight: '500'
          },
        });
      }
    } catch (error) {
      console.error("Submission failed", error);
      toast.error("Network error. Please try again later.", {
        style: {
          background: '#fff', 
          color: '#333',     
          border: '1px solid #ef4444',
          fontWeight: '500'
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen w-full bg-[#030303] px-4 py-24 text-white md:py-32 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 mx-auto max-w-6xl space-y-20"
      >
        {/* ================= HEADER ================= */}
        <div className="text-center space-y-6">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400"
          >
            <Mail className="h-4 w-4" />
            Get In Touch
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Together</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Whether you have a project in mind, want to discuss a collaboration, or just want to say hi, my inbox is always open.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-8 items-start">

          {/* ================= LEFT COLUMN: CONTACT INFO ================= */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-blue-500/10 p-3 text-blue-400 border border-blue-500/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">Email</p>
                    <a href="mailto:singh.anurag2026@gmail.com" className="text-lg font-semibold hover:text-blue-400 transition-colors">
                      singh.anurag2026@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-blue-500/10 p-3 text-blue-400 border border-blue-500/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">Location</p>
                    <p className="text-lg font-semibold">Lucknow, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm font-medium text-gray-400 mb-4">Follow my work</p>
                <div className="flex gap-4">
                  <a href="https://github.com/Anurag-Singh-0" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/5 p-3 text-gray-300 transition-all hover:bg-white hover:text-black">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/singhanurag2024/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/5 p-3 text-gray-300 transition-all hover:bg-blue-500 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  {/* <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/5 p-3 text-gray-300 transition-all hover:bg-red-500 hover:text-white">
                    <Youtube className="h-5 w-5" />
                  </a> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: WEB3FORMS ================= */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-8 backdrop-blur-sm md:p-10">
              <form onSubmit={onSubmit} className="space-y-6">

                {/* Honeypot Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Alex"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:bg-white/5 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:bg-white/5 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:bg-white/5 focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-8 py-4 font-bold text-black transition-all hover:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;