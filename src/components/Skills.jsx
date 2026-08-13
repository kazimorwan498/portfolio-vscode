import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiGitBranch,
  FiGithub,
} from "react-icons/fi";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiFigma,
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();

  const skillGroups = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: FiCode },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React.js", icon: SiReact },
      ],
    },
    {
      category: "Styling",
      skills: [
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "SASS", icon: SiSass },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: FiGitBranch },
        { name: "GitHub", icon: FiGithub },
        { name: "Figma", icon: SiFigma },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className={`py-20 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className={`text-4xl font-bold mb-16 text-center ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-8 rounded-lg ${
                  isDark
                    ? "bg-slate-800 border border-slate-700"
                    : "bg-slate-50 border border-slate-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-6 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {group.skills.map((skill, i) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`flex flex-col items-center gap-3 p-4 rounded-lg transition ${
                          isDark
                            ? "hover:bg-slate-700 text-slate-300"
                            : "hover:bg-white text-slate-600"
                        }`}
                      >
                        <IconComponent size={28} className="text-blue-500" />
                        <span className="text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
