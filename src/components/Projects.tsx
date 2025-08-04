import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Eye, Filter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = ['All', 'Full Stack', 'Frontend'];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger for smoother performance
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced movement for smoother animation
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Faster animation
        ease: "easeOut" // Simpler easing for better performance
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative gpu-accelerated will-change-transform" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Title Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.h2
              className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6 text-shadow"
              style={{ color: 'var(--text-primary)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              whileHover={{ scale: 1.02 }}
            >
              Here are some of the projects I've worked on. Each one represents a unique challenge
              and showcases different aspects of my development skills.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="glassmorphism p-2 rounded-full">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 magnetic ${
                    filter === category
                      ? 'text-white'
                      : ''
                  }`}
                  style={{
                    backgroundColor: filter === category ? 'var(--text-primary)' : 'transparent',
                    color: filter === category ? 'var(--bg-primary)' : 'var(--text-secondary)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="glassmorphism rounded-2xl overflow-hidden hover-lift relative">
                    {/* Project Image */}
                    <motion.div
                      className="relative overflow-hidden h-48"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Overlay Effects */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg,
                            rgba(255,255,255,0.1) 0%,
                            transparent 50%,
                            rgba(0,0,0,0.2) 100%)`
                        }}
                      />

                      {/* Floating Action Buttons */}
                      <motion.div
                        className="absolute top-4 right-4 flex space-x-2"
                        initial={{ opacity: 0, y: -20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.liveDemo && (
                          <motion.a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glassmorphism p-2 rounded-full"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} style={{ color: 'var(--text-primary)' }} />
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glassmorphism p-2 rounded-full"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} style={{ color: 'var(--text-primary)' }} />
                          </motion.a>
                        )}
                      </motion.div>

                      {/* Category Badge */}
                      <motion.div
                        className="absolute bottom-4 left-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="glassmorphism px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
                          {project.category}
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className="p-6 relative z-10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        className="font-space-grotesk text-xl font-bold mb-2"
                        style={{ color: 'var(--text-primary)' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.name}
                      </motion.h3>

                      <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: 'var(--text-primary)',
                              color: 'var(--bg-primary)'
                            }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glassmorphism rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              <div className="relative">
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 glassmorphism p-2 rounded-full hover-lift magnetic"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} style={{ color: 'var(--text-primary)' }} />
                </motion.button>
              </div>

              <div className="p-8">
                <motion.div
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.h3
                    className="font-space-grotesk text-3xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {selectedProject.name}
                  </motion.h3>
                  <motion.span
                    className="glassmorphism px-3 py-1 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {selectedProject.category}
                  </motion.span>
                </motion.div>

                <motion.p
                  className="mb-6 leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.fullDescription}
                </motion.p>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-space-grotesk text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        style={{ color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: 'var(--text-primary)' }}
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-space-grotesk text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: 'var(--text-primary)',
                          color: 'var(--bg-primary)'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {selectedProject.liveDemo && (
                    <motion.a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 rounded-full font-semibold hover-lift magnetic flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-6 py-3 rounded-full font-semibold hover-lift magnetic flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
