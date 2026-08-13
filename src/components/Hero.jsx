import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={`min-h-screen pt-20 flex items-center ${isDark ? "bg-slate-950" : "bg-white"}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute top-20 -left-40 w-80 h-80 rounded-full ${isDark ? "bg-blue-500/10" : "bg-blue-500/5"} blur-3xl`}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className={`absolute bottom-20 -right-40 w-80 h-80 rounded-full ${isDark ? "bg-purple-500/10" : "bg-purple-500/5"} blur-3xl`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          {/* Name */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Kazi Morwan</h1>
            <p className={`text-xl md:text-2xl font-semibold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>
              Frontend Developer | Self Learner | Speed Learner
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.p variants={itemVariants} className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Building beautiful and interactive web experiences. Passionate about React, TailwindCSS, and modern web technologies. Currently learning at{" "}
            <span className="font-semibold">Feni Polytechnic Institute</span>.
          </motion.p>

          {/* Location */}
          <motion.p variants={itemVariants} className={`text-sm md:text-base mb-12 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            📍 Chhagalnaiya, Feni, Bangladesh
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("contact")}
              className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                isDark ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}>
              Contact Me <FiArrowRight size={20} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition border-2 ${
                isDark ? "border-blue-600 text-blue-400 hover:bg-blue-600/10" : "border-blue-600 text-blue-600 hover:bg-blue-600/10"
              }`}>
              Download Resume <FiDownload size={20} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-20">
            <p className={isDark ? "text-slate-400" : "text-slate-500"}>Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
