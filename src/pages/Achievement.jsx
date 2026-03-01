import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X, ArrowRight, CalendarDays } from "lucide-react";
import achievementData from "../data/achievement";

// --- Custom Draggable & Auto-Sliding Image Carousel ---
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Auto-slide Effect
  useEffect(() => {
    if (images.length <= 1) return; 

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); 

    return () => clearInterval(timer); 
  }, [images.length]);

  // 2. Manual Drag/Swipe Handler
  const handleDragEnd = (e, { offset }) => {
    if (offset.x < -50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (offset.x > 50) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center group cursor-pointer">
      <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-900">
        <motion.div
          className="flex h-full w-full cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i}`}
              className="h-full w-full shrink-0 object-cover pointer-events-none" 
            />
          ))}
        </motion.div>
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-4 mb-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? "bg-white w-4" : "bg-white/30 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

function Achievement() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedAchievement]);

  return (
    <section
      id="achievements"
      className="relative z-10 min-h-screen w-full bg-black px-4 py-24 text-white md:pb-24"
    >
      <div className="mx-auto max-w-7xl space-y-20">
        
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400"
          >
            <Trophy className="h-4 w-4" />
            Milestones
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My Achievements
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Highlights of my academic, personal, and professional journey so far.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {achievementData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              onClick={() => setSelectedAchievement(item)}
              // ADDED: flex flex-col h-full to stretch the card
              className="group cursor-pointer flex flex-col h-full rounded-3xl border border-white/10 bg-neutral-900/30 p-4 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-neutral-900/60"
            >
              <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
                 <ImageSlider images={item.images} />
              </div>

              {/* ADDED: flex-1 flex flex-col to push the bottom element down */}
              <div className="mt-2 px-2 pb-2 flex-1 flex flex-col">
                <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="mb-4 text-sm text-gray-400 line-clamp-2">
                  {item.shortDesc}
                </p>
                
                {/* ADDED: mt-auto to align this strictly to the bottom */}
                <div className="mt-auto flex items-center text-sm font-semibold text-white transition-transform group-hover:translate-x-1 cursor-pointer">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4 text-blue-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedAchievement && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedAchievement(null)}
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl flex flex-col max-h-[85vh] cursor-default"
                >
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="absolute right-4 top-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-red-500"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="overflow-y-auto w-full no-scrollbar">
                    <div className="w-full bg-neutral-900 border-b border-white/5 p-6 pb-2">
                      <ImageSlider images={selectedAchievement.images} />
                    </div>

                    <div className="px-6 py-6 md:px-10">
                      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-blue-400">
                        <CalendarDays className="h-4 w-4" />
                        <span>{selectedAchievement.date}</span>
                      </div>

                      <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl leading-tight">
                        {selectedAchievement.title}
                      </h3>

                      <div className="h-px w-full bg-white/10 mb-6"></div>

                      <p className="text-base leading-relaxed text-gray-300 whitespace-pre-line">
                        {selectedAchievement.fullDesc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}

export default Achievement;