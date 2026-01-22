import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payments, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.',
      technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Socket.io'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.',
      technologies: ['Vue.js', 'Express', 'Chart.js', 'OpenWeather API'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media performance tracking with custom dashboards and automated reporting.',
      technologies: ['React', 'Python', 'Django', 'D3.js'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and optimized performance.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chat assistant powered by machine learning with natural language processing capabilities.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents different skills and technologies I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-emerald-500/20 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg card-hover border border-emerald-500/30"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-emerald-600/80 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
