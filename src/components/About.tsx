import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette, Mail, Phone, Instagram, Twitter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { name: 'Frontend Development', icon: Code, level: 95, description: 'React, TypeScript, Next.js' },
    { name: 'Backend Development', icon: Server, level: 90, description: 'Node.js, Express, Python' },
    { name: 'Database Design', icon: Database, level: 85, description: 'MongoDB, PostgreSQL' },
    { name: 'Web Technologies', icon: Globe, level: 92, description: 'HTML5, CSS3, JavaScript' },
    { name: 'Mobile Development', icon: Smartphone, level: 80, description: 'React Native, Flutter' },
    { name: 'UI/UX Design', icon: Palette, level: 88, description: 'Figma, Adobe XD' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kommidruthendra2005@gmail.com', href: 'mailto:kommidruthendra2005@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6300188412', href: 'tel:+916300188412' },
    { icon: Twitter, label: 'Twitter', value: '@Druthendra', href: 'https://x.com/Druthendra' },
    { icon: Instagram, label: 'Instagram', value: '@i__am__hack_er', href: 'https://instagram.com/i__am__hack_er' },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      },
    },
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Title */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-16"
          >
            <motion.h2 
              className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6 text-shadow"
              style={{ color: 'var(--text-primary)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              whileHover={{ scale: 1.01 }}
            >
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I love creating innovative solutions that bridge the gap between design and functionality.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div 
                className="glassmorphism p-8 rounded-2xl hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-space-grotesk text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      variants={itemVariants}
                      className="flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 magnetic group"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div 
                        className="p-2 rounded-full"
                        style={{ backgroundColor: 'var(--text-primary)' }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <info.icon size={20} style={{ color: 'var(--bg-primary)' }} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{info.label}</h4>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div 
                className="glassmorphism p-8 rounded-2xl hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-space-grotesk text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                  My Story
                </h3>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    My journey in programming started with curiosity and has evolved into a deep passion 
                    for solving complex problems through elegant code. I specialize in creating seamless 
                    user experiences that combine beautiful design with robust functionality.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    With expertise spanning both frontend and backend development, I enjoy working on 
                    projects that challenge me to learn new technologies and push the boundaries of 
                    what's possible on the web.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="font-space-grotesk text-3xl font-bold text-center mb-12 text-shadow"
              style={{ color: 'var(--text-primary)' }}
              whileHover={{ scale: 1.02 }}
            >
              Skills & Expertise
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glassmorphism p-6 rounded-xl hover-lift"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'var(--text-primary)' }}>
                      <skill.icon size={24} style={{ color: 'var(--bg-primary)' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{skill.name}</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{skill.description}</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Progress</span>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: 'var(--text-primary)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;