import { motion } from "framer-motion";
import { FiGithub, FiYoutube, FiFacebook, FiInstagram, FiArrowUp, FiCode } from "react-icons/fi";
import { SiFigma } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/kazimorwan498" },
    { icon: FiYoutube, url: "https://youtube.com" },
    { icon: FiFacebook, url: "https://facebook.com" },
    { icon: FiInstagram, url: "https://instagram.com" },
    { icon: SiFigma, url: "https://figma.com" },
    { icon: FiCode, url: "https://codepen.io" },
  ];

  return (
    <footer className={`${isDark ? "bg-slate-950 border-slate-800" : "bg-slate-900 text-white"} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-white"}`}>Kazi Morwan</h3>
              <p className={isDark ? "text-slate-400" : "text-slate-300"}>Frontend Developer | Self Learner | Speed Learner</p>
            </motion.div>

            {/* Quick Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h4 className={`font-bold mb-4 ${isDark ? "text-white" : "text-white"}`}>Quick Links</h4>
              <nav className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className={`block transition hover:text-blue-400 ${isDark ? "text-slate-400" : "text-slate-300"}`}>
                    {link}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h4 className={`font-bold mb-4 ${isDark ? "text-white" : "text-white"}`}>Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition ${
                        isDark ? "bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white" : "bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white"
                      }`}>
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className={`h-px ${isDark ? "bg-slate-800" : "bg-slate-700"} mb-8`} />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={isDark ? "text-slate-400 text-sm" : "text-slate-300 text-sm"}>&copy; {currentYear} Kazi Morwan. All rights reserved.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isDark ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}>
              Back to Top <FiArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
