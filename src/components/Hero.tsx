import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Bett-debug', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/samuel-kiplangat-6165832b1/', label: 'LinkedIn' },
    { icon: Mail, href: 'sam3bett@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-white/20 shadow-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5">
              <img 
                src="./src/components/DSC02685.jpg" 
                alt="Profile Picture" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="gradient-text">Sam</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              I build beautiful, functional web applications with modern technologies. 
              Passionate about creating exceptional user experiences and clean, maintainable code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
