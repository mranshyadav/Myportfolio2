import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Left - Copyright */}
          <div className="flex items-center gap-2 text-gray-400 order-2 md:order-1">
            <span>© {currentYear} Ansh Yadav. Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>and Coffee</span>
          </div>

          {/* Center - Hindi Devotional Lines */}
          <div className="text-center order-1 md:order-2">
            <div className="text-purple-400/80 text-sm mb-1">
              || जय जय राधावल्लभ श्री हरिवंश ||
            </div>
            <div className="text-purple-400/80 text-sm">
              || जय जय श्री वृन्दावन श्री वनचंद ||
            </div>
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400 order-3">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}