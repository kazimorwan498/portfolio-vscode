import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiYoutube, FiFacebook, FiInstagram, FiCode } from "react-icons/fi";
import { SiFigma } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    { icon: FiGithub, label: "GitHub", url: "https://github.com/kazimorwan498" },
    { icon: FiYoutube, label: "YouTube", url: "https://youtube.com" },
    { icon: FiFacebook, label: "Facebook", url: "https://facebook.com" },
    { icon: FiInstagram, label: "Instagram", url: "https://instagram.com" },
    { icon: SiFigma, label: "Figma", url: "https://figma.com" },
    { icon: FiCode, label: "CodePen", url: "https://codepen.io" },
  ];

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "kazimdmorwan498@gmail.com",
      link: "mailto:kazimdmorwan498@gmail.com",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Chhagalnaiya, Feni, Bangladesh",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:kazimdmorwan498@gmail.com?subject=${encodeURIComponent(`Message from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

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
    <section id="contact" className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={itemVariants} className={`text-4xl font-bold mb-4 text-center ${isDark ? "text-white" : "text-slate-900"}`}>
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className={`text-center mb-12 text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Have a question or want to work together? I'd love to hear from you!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className={`p-8 rounded-lg ${isDark ? "bg-slate-800 border border-slate-700" : "bg-slate-50 border border-slate-200"}`}>
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                  }`}
                />
              </div>

              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                  }`}
                />
              </div>

              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                  }`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition">
                Send Message
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ translateX: 5 }}
                    className={`flex gap-4 p-6 rounded-lg transition ${isDark ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-50 hover:bg-slate-100"}`}>
                    <div className="shrink-0">
                      <IconComponent size={24} className="text-blue-500 mt-1" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className={`text-lg font-semibold hover:underline ${isDark ? "text-white" : "text-slate-900"}`}>
                          {info.value}
                        </a>
                      ) : (
                        <p className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Social Links */}
              <div>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Connect With Me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        className={`p-4 rounded-lg flex items-center justify-center transition ${
                          isDark ? "bg-slate-800 text-blue-400 hover:bg-blue-600/20" : "bg-slate-100 text-blue-600 hover:bg-blue-100"
                        }`}>
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
