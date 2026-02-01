import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tornado, X } from "lucide-react";
import { useSmoothScroll } from "../../context/SmoothScrollContext";
import { images } from "../../Images";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Me", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Achievement", to: "achievements" },
    { name: "Contact", to: "contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        animate={{ y: [-100, 10] }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
        className="fixed -top-4 md:top-4 left-1/2 z-[100] w-full md:w-[95%] md:max-w-6xl -translate-x-1/2
      md:rounded-full border border-white/10 bg-black/50 backdrop-blur-md"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between px-3 py-6 md:py-2 relative">
          {/* Logo / Name */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <img
              onClick={() => setShowImageModal(true)}
              src={images.profile}
              alt="profile"
              className="w-10 rounded-full"
            />
            <span className="text-md md:text-lg font-semibold uppercase">
              Anurag
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => handleNavClick(link.to)}
                  className="text-gray-400 text-sm transition-all duration-300 hover:text-white cursor-pointer"
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Let's connect button  */}
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden md:flex items-center gap-5">
              <motion.button
                animate={{ x: [0, 4, -4, 0] }}
                transition={{ delay: 1, repeat: Infinity }}
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 5 }}
                onClick={() => handleNavClick("contact")}
                className="text-sm font-light outline z-[100] outline-white/30 px-5 py-2 rounded-full cursor-pointer bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors"
              >
                Let's Connect
              </motion.button>
            </div>
            {/* <motion.button
              animate={{ x: [0, 4, -4, 0] }}
              transition={{ delay: 1, repeat: Infinity }}
              drag
              whileDrag={{
                scale: 0.8,
              }}
              dragConstraints={{
                top: -0,
                left: -0,
                right: 0,
                bottom: 0,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 5 }}
              onClick={() => handleNavClick("contact")}
              className="text-sm font-light outline z-[100] outline-white/30 px-5 py-2 rounded-full cursor-pointer bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors"
            >
              Let's Connect
            </motion.button> */}

            <motion.div whileTap={{ scale: 0.9 }}>
              {open ? (
                <X
                  onClick={() => setOpen(false)}
                  className="w-6 h-6 text-white cursor-pointer md:hidden"
                />
              ) : (
                <Tornado
                  onClick={() => setOpen(true)}
                  className="w-6 h-6 text-gray-200 cursor-pointer md:hidden"
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 rounded-b-lg overflow-hidden z-50"
              style={{ marginTop: "1px" }}
            >
              <div className="px-6 py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.to)}
                      className="block py-3 text-sm transition-all duration-300 text-gray-300 hover:text-white hover:pl-3 w-full text-left"
                    >
                      {link.name}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Image Model */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowImageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-w-4xl max-h-[80vh] m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images.profile}
                alt="Full size profile"
                className="w-full h-full object-contain rounded-lg"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowImageModal(false)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 border border-white/20"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
