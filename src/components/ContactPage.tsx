import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Calendar } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create form data for submission
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    // Submit to FormSubmit.co which will forward to your email
    fetch('https://formsubmit.co/mranshyadav74@gmail.com', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      setIsSubmitting(false);
      if (response.ok) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('There was an error sending your message. Please try again or email me directly.');
      }
    })
    .catch(error => {
      setIsSubmitting(false);
      alert('There was an error sending your message. Please try again or email me directly.');
    });
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ansh001/',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/mranshyadav',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      href: '#',
      color: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:mranshyadav74@gmail.com',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'mranshyadav74@gmail.com',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'New Delhi 110044',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Availability',
      value: 'Open for projects',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-400">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-400">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-400">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p>{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl mb-6">Follow Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-xl p-4 flex flex-col items-center gap-3 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                      {social.icon}
                    </div>
                    <span className="text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400">Available for Work</span>
                </div>
                <p className="text-gray-400">
                  I'm currently accepting new projects and freelance opportunities. Let's create something amazing together!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}