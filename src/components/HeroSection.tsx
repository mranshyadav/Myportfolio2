import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Palette, 
  Zap, 
  Layers,
  Figma,
  Smartphone,
  Globe,
  ChevronDown
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const roles = [
    'UI/UX Designer',
    'Product Designer',
    'Visual Designer',
    'Design System Expert',
    'Creative Strategist'
  ];

  const skills = [
    { name: 'Figma', icon: <Figma className="w-4 h-4" />, x: 15, y: 10, delay: 0 },
    { name: 'UI Design', icon: <Palette className="w-4 h-4" />, x: 5, y: 50, delay: 0.2 },
    { name: 'Prototyping', icon: <Code2 className="w-4 h-4" />, x: 10, y: 80, delay: 0.4 },
    { name: 'Mobile', icon: <Smartphone className="w-4 h-4" />, x: 80, y: 80, delay: 0.6 },
    { name: 'Web', icon: <Globe className="w-4 h-4" />, x: 85, y: 40, delay: 0.8 },
    { name: 'Systems', icon: <Layers className="w-4 h-4" />, x: 75, y: 10, delay: 1 },
  ];

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cardRotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig);
  const cardRotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Typing effect for name
  const name = 'Ansh Yadav';
  const [displayedName, setDisplayedName] = useState('');
  const [nameComplete, setNameComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= name.length) {
        setDisplayedName(name.slice(0, index));
        index++;
      } else {
        setNameComplete(true);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 400 + '%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Text */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 glass px-5 py-3 rounded-full relative group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-purple-400" />
              </motion.div>
              <span className="text-sm text-purple-300">Available for freelance</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Main Heading with Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text inline-block">
                  {displayedName}
                  <motion.span
                    animate={{ opacity: nameComplete ? 0 : [1, 0] }}
                    transition={{ duration: 0.5, repeat: nameComplete ? 0 : Infinity }}
                    className="inline-block w-1 h-[0.8em] bg-purple-500 ml-1 align-middle"
                  />
                </span>
              </h1>
              
              {/* Animated Role Switcher */}
              <div className="h-12 md:h-16 overflow-hidden">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              Crafting digital experiences that blend{' '}
              <span className="text-purple-400">creativity</span> with{' '}
              <span className="text-pink-400">functionality</span>, turning complex problems into{' '}
              <span className="text-cyan-400">elegant solutions</span>.
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 md:gap-6 py-6"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '30+', label: 'Clients' },
                { number: '5+', label: 'Years' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: 'spring' }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl mb-1 gradient-text">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Magnetic Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton onClick={() => onNavigate('work')}>
                <div className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center gap-2 relative overflow-hidden">
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 text-sm md:text-base">View My Work</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </div>
              </MagneticButton>

              <MagneticButton onClick={() => onNavigate('contact')}>
                <div className="px-6 md:px-8 py-3 md:py-4 glass rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-xl text-sm md:text-base">
                  Get In Touch
                </div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column - 3D Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative lg:min-h-[600px] flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            {/* Container for floating badges - constrained */}
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                style={{
                  rotateX: cardRotateX,
                  rotateY: cardRotateY,
                }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                className="relative glass-card rounded-3xl p-6 md:p-8 overflow-hidden cursor-pointer"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-2xl opacity-0"
                  animate={{ opacity: isHovering ? 0.5 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-3xl" />
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* 3D Avatar/Display */}
                  <motion.div 
                    className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Animated rings */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-purple-500/20 rounded-full" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 border-2 border-pink-500/20 rounded-full" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-6xl md:text-8xl relative z-10"
                      animate={{ 
                        y: isHovering ? [-5, 5] : 0,
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: isHovering ? Infinity : 0,
                        repeatType: 'reverse' 
                      }}
                    >
                      👨‍💻
                    </motion.div>
                  </motion.div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="glass p-4 md:p-5 rounded-xl relative overflow-hidden group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <Zap className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mb-2" />
                        <div className="text-2xl md:text-3xl mb-1">100%</div>
                        <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="glass p-4 md:p-5 rounded-xl relative overflow-hidden group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <Layers className="w-5 h-5 md:w-6 md:h-6 text-pink-400 mb-2" />
                        <div className="text-2xl md:text-3xl mb-1">15+</div>
                        <div className="text-xs md:text-sm text-gray-400">Awards</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Experience badge */}
                  <motion.div 
                    className="glass p-4 md:p-6 rounded-xl text-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10" />
                    <div className="relative z-10">
                      <div className="text-xl md:text-2xl mb-2">5+ Years Experience</div>
                      <div className="text-xs md:text-sm text-gray-400">Designing for startups to enterprises</div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating orbs - inside card */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 right-2 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl pointer-events-none"
                />
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    x: [0, -8, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-2 left-2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl pointer-events-none"
                />
              </motion.div>

              {/* Floating Skill Badges - positioned relative to container */}
              {skills.map((skill, index) => (
                <FloatingSkill
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs md:text-sm text-gray-500">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-gray-500/30 flex items-start justify-center p-1.5 md:p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-purple-500"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Magnetic Button Component
function MagneticButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

// Floating Skill Badge Component
function FloatingSkill({ skill, index }: { skill: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
      className="absolute hidden xl:block pointer-events-none"
      style={{
        left: `${skill.x}%`,
        top: `${skill.y}%`,
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2 + index * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="glass px-3 py-2 rounded-full flex items-center gap-2 pointer-events-auto cursor-pointer group relative"
        whileHover={{ scale: 1.15, rotate: 3 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
        <div className="relative z-10 flex items-center gap-2">
          {skill.icon}
          <span className="text-xs md:text-sm whitespace-nowrap">{skill.name}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}