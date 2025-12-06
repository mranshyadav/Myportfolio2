import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Code, 
  Palette, 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  Lightbulb,
  Layers,
  Search,
  Pencil,
  Smartphone,
  Monitor,
  Figma,
  Star,
  Quote,
  CheckCircle2,
  ArrowUpRight,
  Image,
  FileText,
  Layout,
  MessageSquare,
  PenTool,
  Share2,
  FileCode,
  Terminal,
  GitBranch,
  Workflow,
  Globe,
  Cpu,
  Database,
  Server,
  Boxes,
  Eye,
  Map,
  Users2,
  Accessibility,
  Bot,
  BrainCircuit,
  Sparkle,
  StickyNote,
  CheckSquare,
  Triangle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import HeroSection from './HeroSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onProjectSelect: (project: any) => void;
}

// Scroll animation wrapper component
function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage({ onNavigate, onProjectSelect }: HomePageProps) {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const [isPausedTech, setIsPausedTech] = useState(false);
  const [isPausedAI, setIsPausedAI] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Visual Design',
      description: 'Creating beautiful, intuitive interfaces that users love',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Prototyping',
      description: 'Building interactive prototypes to validate ideas',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'User Research',
      description: 'Understanding user needs through data-driven insights',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <Layers className="w-8 h-8" /> },
    { number: '30+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
    { number: '5+', label: 'Years Experience', icon: <TrendingUp className="w-8 h-8" /> },
    { number: '15+', label: 'Awards Won', icon: <Award className="w-8 h-8" /> },
  ];

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Responsive websites that work seamlessly across all devices and browsers.',
      features: ['Responsive Layouts', 'Modern UI/UX', 'Performance Optimized'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Design',
      description: 'Native and cross-platform mobile experiences that delight users.',
      features: ['iOS & Android', 'Intuitive Navigation', 'Touch Optimized'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Design Systems',
      description: 'Scalable design systems that ensure consistency across products.',
      features: ['Component Libraries', 'Style Guides', 'Documentation'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'UX Research',
      description: 'Data-driven insights that inform design decisions and strategy.',
      features: ['User Interviews', 'Usability Testing', 'Analytics'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understanding the problem space, user needs, and business objectives through research and stakeholder interviews.',
      icon: <Search className="w-6 h-6" />,
    },
    {
      number: '02',
      title: 'Define',
      description: 'Synthesizing research findings into clear problem statements, user personas, and design requirements.',
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      number: '03',
      title: 'Design',
      description: 'Creating wireframes, prototypes, and high-fidelity designs that bring solutions to life.',
      icon: <Pencil className="w-6 h-6" />,
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Testing designs with users, iterating based on feedback, and collaborating with developers for implementation.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'Web Application',
      description: 'A comprehensive financial analytics platform with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NTAwMjE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      duration: '3 months',
      team: 'Solo Project',
      role: 'UI/UX Designer & Developer',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Figma'],
    },
    {
      id: 2,
      title: 'Wellness Mobile App',
      category: 'Mobile Design',
      description: 'A mindfulness app designed to reduce stress and improve mental health.',
      image: 'https://images.unsplash.com/photo-1758770478140-e45dac838d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0OTE5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-500/20 to-pink-500/20',
      duration: '4 months',
      team: '3 people',
      role: 'Lead UX Designer',
      technologies: ['Figma', 'Sketch', 'React Native', 'Adobe XD'],
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'Product Design',
      description: 'Modern shopping experience with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW50ZXJmYWNlJTIwc2NyZWVufGVufDF8fHx8MTc2NTAwNzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-orange-500/20 to-red-500/20',
      duration: '6 months',
      team: '5 people',
      role: 'Product Designer',
      technologies: ['Figma', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      content: 'Alex transformed our product vision into an intuitive design that our users absolutely love. The attention to detail and user-centric approach was remarkable.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at InnovateCo',
      content: 'Working with Alex was a game-changer for our team. The design system created has saved us countless hours and improved consistency across all our products.',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder at HealthTech',
      content: 'The mobile app design exceeded all our expectations. User engagement increased by 150% after launch. Alex truly understands what makes great UX.',
      avatar: '👩‍⚕️',
      rating: 5,
    },
  ];

  const tools = [
    { name: 'Figma', icon: <Figma className="w-8 h-8" />, gradient: 'from-purple-500 to-pink-500' },
    { name: 'FigJam', icon: <PenTool className="w-8 h-8" />, gradient: 'from-pink-500 to-rose-500' },
    { name: 'Figma Make', icon: <Zap className="w-8 h-8" />, gradient: 'from-yellow-500 to-orange-500' },
    { name: 'Figma Slides', icon: <Layout className="w-8 h-8" />, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Figma Buzz', icon: <MessageSquare className="w-8 h-8" />, gradient: 'from-green-500 to-emerald-500' },
    { name: 'Adobe XD', icon: <Layers className="w-8 h-8" />, gradient: 'from-purple-600 to-pink-600' },
    { name: 'Photoshop', icon: <Image className="w-8 h-8" />, gradient: 'from-blue-600 to-cyan-600' },
    { name: 'Illustrator', icon: <PenTool className="w-8 h-8" />, gradient: 'from-orange-500 to-yellow-500' },
    { name: 'InDesign', icon: <FileText className="w-8 h-8" />, gradient: 'from-pink-600 to-rose-600' },
    { name: 'Adobe Express', icon: <Sparkles className="w-8 h-8" />, gradient: 'from-purple-500 to-violet-500' },
    { name: 'Canva', icon: <Palette className="w-8 h-8" />, gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Miro', icon: <Share2 className="w-8 h-8" />, gradient: 'from-yellow-400 to-orange-400' },
    { name: 'Notion', icon: <StickyNote className="w-8 h-8" />, gradient: 'from-gray-500 to-slate-600' },
    { name: 'Jira', icon: <CheckSquare className="w-8 h-8" />, gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Linear', icon: <Triangle className="w-8 h-8" />, gradient: 'from-purple-600 to-indigo-600' },
    { name: 'MS Office', icon: <FileText className="w-8 h-8" />, gradient: 'from-red-500 to-orange-600' },
    { name: 'VS Code', icon: <FileCode className="w-8 h-8" />, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'PyCharm', icon: <Terminal className="w-8 h-8" />, gradient: 'from-green-500 to-teal-500' },
    { name: 'GitHub', icon: <GitBranch className="w-8 h-8" />, gradient: 'from-gray-600 to-gray-800' },
    { name: 'Vercel', icon: <Zap className="w-8 h-8" />, gradient: 'from-black to-gray-900' },
    { name: 'Domain Mgmt', icon: <Globe className="w-8 h-8" />, gradient: 'from-green-400 to-emerald-500' },
    { name: 'Power Automate', icon: <Workflow className="w-8 h-8" />, gradient: 'from-blue-600 to-purple-600' },
  ];

  const technologies = [
    { name: 'HTML', icon: <Code className="w-6 h-6" />, gradient: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: <Palette className="w-6 h-6" />, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Python', icon: <Terminal className="w-6 h-6" />, gradient: 'from-yellow-500 to-blue-600' },
    { name: 'SaaS', icon: <Server className="w-6 h-6" />, gradient: 'from-purple-500 to-pink-500' },
    { name: 'PaaS', icon: <Database className="w-6 h-6" />, gradient: 'from-green-500 to-emerald-500' },
  ];

  const designSkills = [
    { name: 'User Interface Design', icon: <Monitor className="w-8 h-8" />, gradient: 'from-purple-500 to-indigo-600', description: 'Crafting beautiful interfaces' },
    { name: 'User Experience Design', icon: <Users2 className="w-8 h-8" />, gradient: 'from-pink-500 to-rose-600', description: 'Designing delightful experiences' },
    { name: 'Wireframing', icon: <Layout className="w-8 h-8" />, gradient: 'from-blue-500 to-cyan-500', description: 'Planning user flows' },
    { name: 'Prototyping', icon: <Boxes className="w-8 h-8" />, gradient: 'from-green-500 to-emerald-600', description: 'Building interactive models' },
    { name: 'Web App Design', icon: <Globe className="w-8 h-8" />, gradient: 'from-orange-500 to-amber-600', description: 'Creating web solutions' },
    { name: 'Mobile App Design', icon: <Smartphone className="w-8 h-8" />, gradient: 'from-violet-500 to-purple-600', description: 'Designing mobile first' },
    { name: 'Interaction Design', icon: <Zap className="w-8 h-8" />, gradient: 'from-yellow-500 to-orange-500', description: 'Micro-interactions matter' },
    { name: 'Design Systems', icon: <Layers className="w-8 h-8" />, gradient: 'from-teal-500 to-cyan-600', description: 'Building scalable systems' },
    { name: 'Visual Communication', icon: <Eye className="w-8 h-8" />, gradient: 'from-red-500 to-pink-600', description: 'Telling visual stories' },
    { name: 'Usability Testing', icon: <CheckCircle2 className="w-8 h-8" />, gradient: 'from-indigo-500 to-blue-600', description: 'Validating with users' },
    { name: 'Information Architecture', icon: <Map className="w-8 h-8" />, gradient: 'from-emerald-500 to-green-600', description: 'Structuring content' },
    { name: 'User Research', icon: <Search className="w-8 h-8" />, gradient: 'from-fuchsia-500 to-pink-600', description: 'Understanding users deeply' },
    { name: 'Journey Mapping', icon: <TrendingUp className="w-8 h-8" />, gradient: 'from-cyan-500 to-blue-600', description: 'Mapping user paths' },
    { name: 'Responsive Design', icon: <Monitor className="w-8 h-8" />, gradient: 'from-lime-500 to-green-600', description: 'Adapting to all screens' },
    { name: 'Accessibility', icon: <Accessibility className="w-8 h-8" />, gradient: 'from-rose-500 to-red-600', description: 'Designing for everyone' },
  ];

  const aiTools = [
    { name: 'ChatGPT', icon: <Bot className="w-6 h-6" />, gradient: 'from-green-500 to-teal-500' },
    { name: 'Gemini', icon: <Sparkle className="w-6 h-6" />, gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Claude', icon: <BrainCircuit className="w-6 h-6" />, gradient: 'from-orange-500 to-amber-500' },
    { name: 'Blackbox AI', icon: <Cpu className="w-6 h-6" />, gradient: 'from-gray-600 to-gray-900' },
    { name: 'NotebookLM', icon: <FileText className="w-6 h-6" />, gradient: 'from-purple-500 to-violet-600' },
    { name: 'Notion AI', icon: <Lightbulb className="w-6 h-6" />, gradient: 'from-pink-500 to-rose-500' },
  ];

  const achievements = [
    { title: 'Awwwards Site of the Day', year: '2023', icon: <Award className="w-6 h-6" /> },
    { title: 'CSS Design Awards Winner', year: '2023', icon: <Star className="w-6 h-6" /> },
    { title: 'Dribbble Top Designer', year: '2022', icon: <TrendingUp className="w-6 h-6" /> },
    { title: 'UX Design Awards Nominee', year: '2022', icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <div className="pb-20">
      {/* Enhanced Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* Rest of the homepage content */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-32"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-12 mb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-4">
                  Impact By <span className="gradient-text">Numbers</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Delivering measurable results through design excellence
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl mb-2 gradient-text">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Services Section */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                What I <span className="gradient-text">Offer</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive design services tailored to your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.1}>
                  <div className="glass-card rounded-3xl p-8 group hover:bg-white/10 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle2 className="w-4 h-4 text-purple-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Process Section */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                My Design <span className="gradient-text">Process</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A structured approach to creating exceptional user experiences
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="glass-card rounded-2xl p-8 relative group hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                    <div className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors">
                      {step.number}
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                        {step.icon}
                      </div>
                      <h3 className="text-xl mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm flex-grow">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Projects */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl mb-4">
                  Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-gray-400">Some of my best work</p>
              </div>
              <button
                onClick={() => onNavigate('work')}
                className="group px-6 py-3 glass rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 0.1}>
                  <div 
                    onClick={() => onProjectSelect(project)}
                    className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                      <h3 className="text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials Section */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                Client <span className="gradient-text">Testimonials</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                What people are saying about working with me
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                  <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <Quote className="w-10 h-10 text-purple-400 mb-6 opacity-50" />
                    <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div>{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tools I Use Section */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                Tools I <span className="gradient-text">Use</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Software I use to design, prototype, and collaborate
              </p>
            </div>
            <div className="space-y-8 overflow-hidden">
              {/* First Row - Left to Right */}
              <div 
                className="relative overflow-hidden"
                onMouseEnter={() => setIsPausedRow1(true)}
                onMouseLeave={() => setIsPausedRow1(false)}
              >
                <motion.div
                  className="flex gap-6"
                  animate={isPausedRow1 ? {} : {
                    x: [0, -2244],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    },
                  }}
                  style={{ willChange: 'transform' }}
                >
                  {/* Original items */}
                  {tools.slice(0, 11).map((tool, index) => (
                    <motion.div
                      key={`row1-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: 10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      {/* Animated gradient background */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Animated border glow */}
                      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      
                      {/* Floating animation for icon */}
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                  {/* Duplicated items for seamless loop */}
                  {tools.slice(0, 11).map((tool, index) => (
                    <motion.div
                      key={`row1-dup-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: 10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                  {/* Third set for extra smoothness */}
                  {tools.slice(0, 11).map((tool, index) => (
                    <motion.div
                      key={`row1-dup2-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: 10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Second Row - Right to Left */}
              <div 
                className="relative overflow-hidden"
                onMouseEnter={() => setIsPausedRow2(true)}
                onMouseLeave={() => setIsPausedRow2(false)}
              >
                <motion.div
                  className="flex gap-6"
                  animate={isPausedRow2 ? {} : {
                    x: [-2244, 0],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    },
                  }}
                  style={{ willChange: 'transform' }}
                >
                  {/* Original items */}
                  {tools.slice(11).map((tool, index) => (
                    <motion.div
                      key={`row2-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: -10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                  {/* Duplicated items for seamless loop */}
                  {tools.slice(11).map((tool, index) => (
                    <motion.div
                      key={`row2-dup-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: -10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                  {/* Third set for extra smoothness */}
                  {tools.slice(11).map((tool, index) => (
                    <motion.div
                      key={`row2-dup2-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: -10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Technologies & AI Tools Section */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                Technologies & <span className="gradient-text">AI Tools</span>
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Core technologies and AI tools I leverage for development, testing, and enhancing workflow efficiency — supporting creativity and innovation
              </p>
            </div>
            
            <div className="space-y-8 overflow-hidden">
              {/* Technologies Row - Left to Right */}
              <div 
                className="relative overflow-hidden"
                onMouseEnter={() => setIsPausedTech(true)}
                onMouseLeave={() => setIsPausedTech(false)}
              >
                <motion.div
                  className="flex gap-6"
                  animate={isPausedTech ? {} : {
                    x: [0, -1224],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 25,
                      ease: "linear",
                    },
                  }}
                  style={{ willChange: 'transform' }}
                >
                  {/* Original items */}
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={`tech-${tech.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: 10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tech.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tech.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                  {/* Duplicated items */}
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={`tech-dup-${tech.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: 10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tech.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tech.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                  {/* Third set */}
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={`tech-dup2-${tech.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: 10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tech.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tech.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* AI Tools Row - Right to Left */}
              <div 
                className="relative overflow-hidden"
                onMouseEnter={() => setIsPausedAI(true)}
                onMouseLeave={() => setIsPausedAI(false)}
              >
                <motion.div
                  className="flex gap-6"
                  animate={isPausedAI ? {} : {
                    x: [-1428, 0],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                  style={{ willChange: 'transform' }}
                >
                  {/* Original items */}
                  {aiTools.map((tool, index) => (
                    <motion.div
                      key={`ai-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: -10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                  {/* Duplicated items */}
                  {aiTools.map((tool, index) => (
                    <motion.div
                      key={`ai-dup-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: -10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                  {/* Third set */}
                  {aiTools.map((tool, index) => (
                    <motion.div
                      key={`ai-dup2-${tool.name}`}
                      className="relative glass-card rounded-3xl p-8 flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0 w-[180px] h-[180px] justify-center overflow-hidden"
                      whileHover={{ 
                        rotateY: -10,
                        rotateX: 10,
                        z: 50
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.gradient} blur-xl`} />
                      </div>
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <motion.div 
                          className="group-hover:scale-125 transition-transform duration-500"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tool.icon}
                        </motion.div>
                      </motion.div>
                      <span className="relative z-10 text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Design Skills Section */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                Design <span className="gradient-text">Skills</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The capabilities I bring to every project
              </p>
            </div>

            {/* Interactive Bento Grid */}
            <div 
              className="relative"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top
                });
              }}
            >
              {/* Spotlight Effect */}
              <div 
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1), transparent 40%)`
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {designSkills.map((skill, index) => {
                  const isWide = index === 0 || index === 7 || index === 13;
                  return (
                    <ScrollReveal key={skill.name} delay={index * 0.05}>
                      <motion.div
                        className={`relative glass-card rounded-3xl p-8 cursor-pointer overflow-hidden group ${isWide ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ 
                          y: -8,
                          scale: 1.02
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        {/* Animated Gradient Background */}
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${skill.gradient} blur-2xl opacity-50`} />
                        </div>

                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full min-h-[200px] justify-between">
                          <div>
                            {/* Icon */}
                            <motion.div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 relative`}
                              animate={hoveredSkill === skill.name ? {
                                rotate: [0, -5, 5, -5, 0],
                                scale: [1, 1.05, 1]
                              } : {
                                y: [0, -5, 0]
                              }}
                              transition={{
                                duration: hoveredSkill === skill.name ? 0.5 : 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1
                              }}
                            >
                              <div className="absolute inset-0 rounded-2xl bg-black/20" />
                              <div className="relative text-white">
                                {skill.icon}
                              </div>
                            </motion.div>

                            {/* Skill Name */}
                            <h3 className="text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                              {skill.name}
                            </h3>

                            {/* Description */}
                            <motion.p 
                              className="text-gray-400 text-sm"
                              initial={{ opacity: 0.6 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {skill.description}
                            </motion.p>
                          </div>

                          {/* Hover Indicator */}
                          <motion.div 
                            className={`mt-4 h-1 rounded-full bg-gradient-to-r ${skill.gradient}`}
                            initial={{ width: '0%', opacity: 0 }}
                            animate={hoveredSkill === skill.name ? { 
                              width: '100%', 
                              opacity: 1 
                            } : { 
                              width: '0%', 
                              opacity: 0 
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>

                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                          animate={hoveredSkill === skill.name ? {
                            x: ['-100%', '200%']
                          } : {}}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                          }}
                          style={{ transform: 'skewX(-20deg)' }}
                        />

                        {/* Corner Accent */}
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`} />
                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Awards Section */}
        <ScrollReveal>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                Awards & <span className="gradient-text">Recognition</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Honored to be recognized for design excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <ScrollReveal key={achievement.title} delay={index * 0.1}>
                  <div className="glass-card rounded-2xl p-8 flex items-center gap-6 group hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{achievement.title}</h3>
                      <p className="text-gray-400">{achievement.year}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Final CTA Section */}
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl mb-6">
                Ready to Start Your <span className="gradient-text">Next Project?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's collaborate and create something extraordinary together. I'm just one message away.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="px-8 py-4 glass rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </div>
  );
}