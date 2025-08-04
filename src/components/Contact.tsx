import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobile, setIsMobile] = useState(false);

  // Intersection observer for animations
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Optimize window resize checking - only check once and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        staggerChildren: 0.05, // Reduced from 0.1 for better performance
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced from y: 30
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.6 for better performance
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative gpu-accelerated will-change-transform" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold font-space-grotesk sm:text-4xl md:text-5xl md:mb-6 text-shadow">
              <span style={{ color: 'var(--text-primary)' }}>Let's Work Together</span>
            </h2>
            <p className="max-w-3xl px-4 mx-auto text-base leading-relaxed md:text-lg" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring your ideas to life? I'm always excited to discuss new projects
              and opportunities. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 md:gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
              <div className="p-6 glassmorphism md:p-8 rounded-2xl hover-lift">
                <h3 className="mb-4 text-xl font-bold font-space-grotesk md:text-2xl md:mb-6" style={{ color: 'var(--text-primary)' }}>
                  Get In Touch
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      className="flex items-center space-x-3 md:space-x-4"
                    >
                      <div className="flex-shrink-0 p-2 rounded-full md:p-3" style={{ backgroundColor: 'var(--text-primary)' }}>
                        <info.icon size={isMobile ? 18 : 20} style={{ color: 'var(--bg-primary)' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold md:text-base" style={{ color: 'var(--text-primary)' }}>{info.title}</h4>
                        <a
                          href={info.href}
                          className="text-sm break-all transition-colors magnetic md:text-base"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div variants={itemVariants} className="p-6 glassmorphism md:p-8 rounded-2xl hover-lift">
                <h3 className="mb-4 text-xl font-bold font-space-grotesk md:text-2xl md:mb-6" style={{ color: 'var(--text-primary)' }}>
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
                      className="p-3 rounded-full glassmorphism hover-lift magnetic"
                      aria-label={social.label}
                    >
                      <social.icon size={isMobile ? 20 : 24} style={{ color: 'var(--text-primary)' }} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="p-6 glassmorphism md:p-8 rounded-2xl hover-lift">
              <h3 className="mb-4 text-xl font-bold font-space-grotesk md:text-2xl md:mb-6" style={{ color: 'var(--text-primary)' }}>
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium md:text-base" style={{ color: 'var(--text-primary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm transition-all duration-200 border rounded-lg md:px-4 md:py-3 focus:outline-none focus:ring-2 magnetic md:text-base"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium md:text-base" style={{ color: 'var(--text-primary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm transition-all duration-200 border rounded-lg md:px-4 md:py-3 focus:outline-none focus:ring-2 magnetic md:text-base"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium md:text-base" style={{ color: 'var(--text-primary)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={isMobile ? 4 : 5}
                    className="w-full px-3 py-2 text-sm transition-all duration-200 border rounded-lg md:px-4 md:py-3 focus:outline-none focus:ring-2 resize-vertical magnetic md:text-base"
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
                  className="flex items-center justify-center w-full py-2 space-x-2 text-sm font-semibold rounded-lg btn-primary md:py-3 hover-lift magnetic disabled:opacity-50 disabled:cursor-not-allowed md:text-base"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-current rounded-full md:w-5 md:h-5 border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Send size={isMobile ? 18 : 20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-center text-green-500 md:text-base"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-center text-red-500 md:text-base"
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
