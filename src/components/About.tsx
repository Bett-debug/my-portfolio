import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">YN</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building Digital Experiences
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 mb-6">
              With a strong foundation in both frontend and backend development, I create 
              seamless user experiences backed by robust and scalable architectures.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <p className="text-gray-600 text-sm">React, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <p className="text-gray-600 text-sm">Node.js, Python, PostgreSQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                <p className="text-gray-600 text-sm">Git, Docker, AWS</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Design</h4>
                <p className="text-gray-600 text-sm">Figma, Adobe XD</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
