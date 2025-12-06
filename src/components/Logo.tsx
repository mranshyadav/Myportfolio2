import { motion } from 'motion/react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-lg' },
    md: { container: 'w-12 h-12', text: 'text-xl' },
    lg: { container: 'w-16 h-16', text: 'text-2xl' },
  };

  return (
    <div className="flex items-center gap-3">
      {/* Logo Mark */}
      <motion.div
        className={`${sizes[size].container} relative flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50" />
        
        {/* Main container */}
        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 overflow-hidden">
          {/* Inner background */}
          <div className="w-full h-full rounded-[10px] bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
            />
            
            {/* Letters */}
            <div className="relative z-10">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* A */}
                <motion.path
                  d="M12 30 L12 15 L17 10 L18 11 L18 30"
                  stroke="url(#gradient1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M12 22 L18 22"
                  stroke="url(#gradient1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
                />
                
                {/* Y */}
                <motion.path
                  d="M22 10 L25 18 L25 30"
                  stroke="url(#gradient2)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M28 10 L25 18"
                  stroke="url(#gradient2)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col"
        >
          <div className={`${sizes[size].text} font-bold leading-none gradient-text`}>
            Ansh Yadav
          </div>
          <div className="text-xs text-gray-400 leading-none mt-1">
            UI/UX Designer
          </div>
        </motion.div>
      )}
    </div>
  );
}
