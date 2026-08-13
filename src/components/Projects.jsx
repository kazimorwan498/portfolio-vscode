import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: "C4U-Upskill",
      description: "A responsive educational platform built with modern UI/UX principles.",
      technologies: ["Tailwind CSS", "HTML5", "CSS3"],
      link: "https://github.com/kazimorwan498",
    },
    {
      title: "C4U-About",
      description: "A clean and minimal portfolio-style about page with smooth animations.",
      technologies: ["Tailwind CSS", "React", "JavaScript"],
      link: "https://github.com/kazimorwan498",
    },
    {
      title: "Finance",
      description: "A financial dashboard application with data visualization and analytics.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      link: "https://github.com/kazimorwan498",
    },
    {
      title: "Degic_React-UI",
      description: "A comprehensive UI component library built with React and Material Design.",
      technologies: ["React", "Material UI", "JavaScript"],
      link: "https://github.com/kazimorwan498",
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
    <section id="projects" className={`py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={itemVariants} className={`text-4xl font-bold mb-12 text-center ${isDark ? "text-white" : "text-slate-900"}`}>
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ translateY: -5 }}
                className={`rounded-lg overflow-hidden transition ${
                  isDark ? "bg-slate-800 border border-slate-700 hover:border-blue-500" : "bg-white border border-slate-200 hover:border-blue-500"
                }`}>
                {/* Project Header */}
                <div className={`p-6 ${isDark ? "bg-slate-700/50" : "bg-slate-100"}`}>
                  <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{project.title}</h3>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <p className={`mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full ${isDark ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-700"}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                      isDark ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}>
                    <FiGithub size={18} />
                    View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
