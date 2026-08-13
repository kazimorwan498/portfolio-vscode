import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className={`py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={itemVariants} className={`text-4xl font-bold mb-12 text-center ${isDark ? "text-white" : "text-slate-900"}`}>
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className={`text-lg mb-6 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                I'm a passionate frontend developer with a keen interest in creating beautiful, responsive, and user-friendly web experiences. Currently pursuing my education at
                Feni Polytechnic Institute while continuously expanding my knowledge in modern web technologies.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                I'm a self-learner who thrives on challenges and is constantly seeking new opportunities to grow. With a strong foundation in HTML, CSS, and JavaScript, I've
                mastered React and TailwindCSS to build modern, scalable applications.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                My passion lies in converting design mockups into interactive, performant web applications and exploring innovative solutions to complex problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className={`p-8 rounded-lg ${isDark ? "bg-slate-800" : "bg-white border border-slate-200"}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>Quick Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className={isDark ? "text-slate-400" : "text-slate-600"}>Institution:</span>
                  <span className={`font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>Feni Polytechnic Institute</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? "text-slate-400" : "text-slate-600"}>Location:</span>
                  <span className={`font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>Chhagalnaiya, Feni, Bangladesh</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? "text-slate-400" : "text-slate-600"}>Email:</span>
                  <a href="mailto:kazimdmorwan498@gmail.com" className={`font-semibold hover:underline ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                    kazimdmorwan498@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
