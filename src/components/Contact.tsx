import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: `From: ${formData.email}\nName: ${formData.name}\n\nMessage:\n${formData.message}`,
          to_email: import.meta.env.VITE_PORTFOLIO_EMAIL,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: import.meta.env.VITE_PORTFOLIO_EMAIL,
      href: `mailto:${import.meta.env.VITE_PORTFOLIO_EMAIL}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: import.meta.env.VITE_PORTFOLIO_PHONE,
      href: `tel:${import.meta.env.VITE_PORTFOLIO_PHONE.replace(/\s+/g, '')}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: import.meta.env.VITE_GITHUB_URL, label: 'GitHub' },
    { icon: Linkedin, href: import.meta.env.VITE_LINKEDIN_URL, label: 'LinkedIn' },
    { icon: Twitter, href: import.meta.env.VITE_TWITTER_URL, label: 'Twitter' },
    { icon: Instagram, href: import.meta.env.VITE_INSTAGRAM_URL, label: 'Instagram' },
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
      },
    },
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-shadow">
              <span style={{ color: 'var(--text-primary)' }}>Let's Work Together</span>
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring your ideas to life? I'm always excited to discuss new projects
              and opportunities. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
              <div className="glassmorphism p-6 md:p-8 rounded-2xl hover-lift">
                <h3 className="font-space-grotesk text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>
                  Get In Touch
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      className="flex items-center space-x-3 md:space-x-4"
                    >
                      <div className="p-2 md:p-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--text-primary)' }}>
                        <info.icon size={window.innerWidth < 768 ? 18 : 20} style={{ color: 'var(--bg-primary)' }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>{info.title}</h4>
                        <a
                          href={info.href}
                          className="transition-colors magnetic text-sm md:text-base break-all"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div variants={itemVariants} className="glassmorphism p-6 md:p-8 rounded-2xl hover-lift">
                <h3 className="font-space-grotesk text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>
                  Follow Me
                </h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      className="glassmorphism p-3 rounded-full hover-lift magnetic"
                      aria-label={social.label}
                    >
                      <social.icon size={window.innerWidth < 768 ? 20 : 24} style={{ color: 'var(--text-primary)' }} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="glassmorphism p-6 md:p-8 rounded-2xl hover-lift">
              <h3 className="font-space-grotesk text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2 text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 magnetic text-sm md:text-base"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-2 text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 magnetic text-sm md:text-base"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-2 text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={window.innerWidth < 768 ? 4 : 5}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 resize-vertical magnetic text-sm md:text-base"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary py-2 md:py-3 rounded-lg font-semibold hover-lift magnetic flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={window.innerWidth < 768 ? 18 : 20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-center font-medium text-sm md:text-base"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-center font-medium text-sm md:text-base"
                  >
                    Sorry, there was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
