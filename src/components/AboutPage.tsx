import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'motion/react';
import { 
  Briefcase, 
  Award, 
  Heart, 
  Target,
  Sparkles,
  Coffee,
  Music,
  Camera,
  Code2,
  Palette,
  Figma,
  Layers,
  Zap,
  Users,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Globe,
  MessageSquare
} from 'lucide-react';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <BackgroundElements scrollProgress={scrollYProgress} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section with Interactive Profile */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Bento Grid - About Me */}
        <BentoAboutGrid />

        {/* Skills Visualization */}
        <SkillsSection />

        {/* Journey Timeline */}
        <JourneyTimeline />

        {/* Tools & Technologies */}
        <ToolsSection />

        {/* Philosophy & Approach */}
        <PhilosophySection />

        {/* Fun Facts */}
        <FunFactsSection />
      </div>
    </div>
  );
}

// Background animated elements
function BackgroundElements({ scrollProgress }: { scrollProgress: any }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, 200]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
      />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-32"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Interactive Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute inset-8 border-2 border-purple-500/20 rounded-full" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute inset-16 border-2 border-pink-500/20 rounded-full" />
            </motion.div>

            {/* Main card */}
            <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
              
              {/* Avatar */}
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-8xl"
                >
                  👨‍💻
                </motion.div>
              </div>

              {/* Info badges */}
              <div className="space-y-3">
                <div className="glass p-4 rounded-xl text-center">
                  <div className="text-2xl mb-1">Ansh Yadav</div>
                  <div className="text-sm text-purple-400">Senior UI/UX Designer</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="glass p-3 rounded-xl text-center">
                    <div className="text-xl mb-1">📍</div>
                    <div className="text-xs text-gray-400">New Delhi</div>
                  </div>
                  <div className="glass p-3 rounded-xl text-center">
                    <div className="text-xl mb-1">☕</div>
                    <div className="text-xs text-gray-400">Coffee Lover</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <FloatingBadge delay={0} x={-20} y={20}>
              <Sparkles className="w-4 h-4" />
            </FloatingBadge>
            <FloatingBadge delay={0.5} x={100} y={-10}>
              <Zap className="w-4 h-4" />
            </FloatingBadge>
          </div>
        </motion.div>

        {/* Right - Introduction */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Ansh</span>
          </h1>

          <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
            <p>
              A passionate <span className="text-purple-400">UI/UX Designer</span> with over 5 years of experience crafting digital experiences that users love. I blend creativity with data-driven insights to solve complex problems.
            </p>
            <p>
              My mission is to create <span className="text-pink-400">intuitive</span>, <span className="text-cyan-400">accessible</span>, and <span className="text-purple-400">delightful</span> experiences that make a real impact on people's lives.
            </p>
          </div>

          {/* Quick highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: <CheckCircle2 className="w-5 h-5" />, text: 'User-Centered' },
              { icon: <Lightbulb className="w-5 h-5" />, text: 'Innovative' },
              { icon: <Rocket className="w-5 h-5" />, text: 'Fast Learner' },
              { icon: <Users className="w-5 h-5" />, text: 'Team Player' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                className="glass p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors"
              >
                <div className="text-purple-400">{item.icon}</div>
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Animated Stats Counter
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed', icon: <Briefcase className="w-6 h-6" /> },
    { number: 30, suffix: '+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: 15, suffix: '+', label: 'Awards Won', icon: <Award className="w-6 h-6" /> },
    { number: 98, suffix: '%', label: 'Satisfaction Rate', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group hover:bg-white/10 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 text-purple-400">
                {stat.icon}
              </div>
              <div className="text-4xl mb-2 gradient-text">
                {isInView && <AnimatedNumber value={stat.number} suffix={stat.suffix} />}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Animated Number Component
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}{suffix}</>;
}

// Bento Grid About
function BentoAboutGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2 className="text-4xl md:text-5xl mb-12 text-center">
        Get to <span className="gradient-text">Know Me</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {/* Large card - My Story */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-purple-400">My Story</span>
            </div>
            <h3 className="text-2xl md:text-3xl mb-4">The Journey</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              My design journey began over 5 years ago when I discovered the power of design to solve real-world problems. What started as curiosity evolved into a passion for creating intuitive, beautiful experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I believe great design is invisible—it seamlessly guides users to their goals while delighting them along the way. My approach combines user research, data analysis, and creative thinking.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <Target className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl mb-4">Core Values</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                User-centered design
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                Continuous learning
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Attention to detail
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Collaborative mindset
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <Award className="w-10 h-10 text-pink-400 mb-4" />
            <h3 className="text-2xl mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <div className="mb-1">BA in Design</div>
                <div className="text-sm text-gray-400">Art Institute</div>
                <div className="text-xs text-gray-500">2012 - 2016</div>
              </div>
              <div className="pt-3 border-t border-white/10">
                <div className="mb-1 text-sm">Certifications</div>
                <div className="text-xs text-gray-400">• Google UX Design</div>
                <div className="text-xs text-gray-400">• Nielsen Norman Group</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Approach */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-2xl md:text-3xl mb-6">My Approach</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3 text-2xl">
                  🔍
                </div>
                <div className="mb-2">Research</div>
                <div className="text-sm text-gray-400">Understanding user needs and pain points</div>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-3 text-2xl">
                  ✨
                </div>
                <div className="mb-2">Ideate</div>
                <div className="text-sm text-gray-400">Brainstorm creative solutions</div>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3 text-2xl">
                  🚀
                </div>
                <div className="mb-2">Execute</div>
                <div className="text-sm text-gray-400">Deliver polished experiences</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Skills with circular progress
function SkillsSection() {
  const skills = [
    { name: 'UI Design', level: 95, icon: <Palette className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { name: 'UX Research', level: 90, icon: <Users className="w-6 h-6" />, color: 'from-pink-500 to-rose-500' },
    { name: 'Prototyping', level: 88, icon: <Code2 className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' },
    { name: 'Design Systems', level: 92, icon: <Layers className="w-6 h-6" />, color: 'from-purple-500 to-indigo-500' },
    { name: 'User Testing', level: 85, icon: <CheckCircle2 className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Motion Design', level: 80, icon: <Zap className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2 className="text-4xl md:text-5xl mb-12 text-center">
        Skills & <span className="gradient-text">Expertise</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

// Individual Skill Card
function SkillCard({ skill, index }: { skill: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-1 transition-opacity`} />
      
      <div className="relative z-10">
        {/* Circular progress */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-white/10"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="40"
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
              animate={isInView ? {
                strokeDashoffset: 251.2 - (251.2 * skill.level) / 100
              } : {}}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="text-purple-500" stopColor="currentColor" />
                <stop offset="100%" className="text-pink-500" stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Icon in center */}
          <div className="absolute inset-0 flex items-center justify-center text-purple-400">
            {skill.icon}
          </div>
        </div>

        <div className="mb-2">{skill.name}</div>
        <div className="text-sm text-gray-400">{skill.level}%</div>
      </div>
    </motion.div>
  );
}

// Journey Timeline
function JourneyTimeline() {
  const experiences = [
    {
      year: 'May 2025 - Present',
      role: 'UI/UX Designer',
      company: 'Neuromotion Systems',
      type: 'Full-time',
      location: 'Noida, Uttar Pradesh, India',
      description: 'Leading UI/UX design initiatives for innovative products with a focus on user-centered design and testing.',
      achievements: ['Testing and Selenium integration', 'Design system development', 'User research and testing'],
      icon: '💼',
    },
    {
      year: 'Nov 2024 - Mar 2025',
      role: 'UI/UX Designer || Product Designer',
      company: 'MachFox Group of Companies',
      type: 'Full-time',
      location: 'New Delhi, Delhi, India',
      description: 'Designed and developed comprehensive product experiences with focus on testing and frontend development.',
      achievements: ['Manual Testing implementation', 'HTML/CSS development', 'Product design workflows'],
      icon: '🎨',
    },
    {
      year: 'Aug 2023 - Nov 2024',
      role: 'Junior UI/UX Designer',
      company: 'Nityom',
      type: 'Full-time',
      location: 'New Delhi, Delhi, India',
      description: 'Crafted user-centric web applications with expertise in wireframing and interaction design.',
      achievements: ['Wireframing and prototyping', 'Web application design', 'User interface development', 'Conducted user research'],
      icon: '🚀',
    },
    {
      year: 'Feb 2023 - Jul 2023',
      role: 'UI/UX Design Intern',
      company: 'Nityom',
      type: 'Internship',
      location: 'Remote',
      description: 'Designed intuitive user interfaces and created interactive prototypes for digital products.',
      achievements: ['Figma design projects', 'Adobe XD prototyping', 'Design collaboration'],
      icon: '✨',
    },
    {
      year: 'Aug 2022 - Jan 2023',
      role: 'Graphic Design Intern',
      company: 'Nityom',
      type: 'Internship',
      location: 'New Delhi, Delhi, India',
      description: 'Created visual designs and brand assets using industry-standard design tools.',
      achievements: ['Adobe Illustrator projects', 'Adobe Photoshop design work', 'Brand identity creation'],
      icon: '🎯',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2 className="text-4xl md:text-5xl mb-12 text-center">
        My <span className="gradient-text">Journey</span>
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem key={`${exp.company}-${exp.year}-${index}`} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Timeline Item
function TimelineItem({ experience, index }: { experience: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative md:grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`${isEven ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="glass-card rounded-2xl p-6 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-sm mb-4">
              <Briefcase className="w-4 h-4" />
              {experience.year}
            </div>
            
            <h3 className="text-2xl mb-2">{experience.role}</h3>
            <div className="text-purple-400 mb-4">{experience.company}</div>
            <p className="text-gray-400 mb-4">{experience.description}</p>
            
            <div className="space-y-2">
              {experience.achievements.map((achievement: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.2, type: 'spring' }}
          viewport={{ once: true }}
          className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-black"
        />
      </div>
    </motion.div>
  );
}

// Tools Section
function ToolsSection() {
  const tools = [
    { name: 'Figma', icon: <Figma className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Adobe XD', icon: <Layers className="w-8 h-8" />, color: 'from-pink-500 to-rose-500' },
    { name: 'Sketch', icon: <Palette className="w-8 h-8" />, color: 'from-orange-500 to-yellow-500' },
    { name: 'Illustrator', icon: <Sparkles className="w-8 h-8" />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Photoshop', icon: <Camera className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Framer', icon: <Code2 className="w-8 h-8" />, color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2 className="text-4xl md:text-5xl mb-12 text-center">
        Tools & <span className="gradient-text">Technologies</span>
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotate: 5 }}
            className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
            <div className="relative z-10">
              <div className="mb-3 text-purple-400">{tool.icon}</div>
              <div className="text-sm">{tool.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Philosophy Section
function PhilosophySection() {
  const principles = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Empathy First',
      description: 'Understanding users deeply to create meaningful solutions',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Simplicity Wins',
      description: 'Making complex things simple and intuitive',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Iterate Fast',
      description: 'Rapid prototyping and continuous improvement',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Accessible Design',
      description: 'Creating inclusive experiences for everyone',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2 className="text-4xl md:text-5xl mb-12 text-center">
        Design <span className="gradient-text">Philosophy</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 text-purple-400">
                {principle.icon}
              </div>
              <h3 className="text-xl mb-3">{principle.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{principle.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Fun Facts
function FunFactsSection() {
  const facts = [
    { emoji: '☕', label: 'Coffee', value: '5 cups/day' },
    { emoji: '🎵', label: 'Music', value: 'Always on' },
    { emoji: '📚', label: 'Books', value: '12/year' },
    { emoji: '✈️', label: 'Countries', value: '15 visited' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-4xl md:text-5xl mb-12 text-center">
        Fun <span className="gradient-text">Facts</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, rotate: -10, scale: 0 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-4xl mb-3">{fact.emoji}</div>
              <div className="text-sm text-gray-400 mb-1">{fact.label}</div>
              <div className="gradient-text">{fact.value}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Floating Badge Component
function FloatingBadge({ children, delay, x, y }: { children: React.ReactNode; delay: number; x: number; y: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring' }}
      className="absolute hidden lg:block"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="glass px-4 py-2 rounded-full text-purple-400"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}