import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-100"} border-b backdrop-blur-md bg-opacity-95`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className={`text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent`}>
            KM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition ${isDark ? "text-slate-300 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"}`}>
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition ${isDark ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <FiX size={24} className={isDark ? "text-white" : "text-slate-900"} /> : <FiMenu size={24} className={isDark ? "text-white" : "text-slate-900"} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          className="md:hidden overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  isDark ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"
                }`}>
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
