import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import ContactPage from "./components/ContactPage";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

type Page = "home" | "about" | "work" | "contact";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  gradient: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  features?: string[];
  technologies?: string[];
  duration?: string;
  team?: string;
  role?: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromProject = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (selectedProject) {
      return (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackFromProject}
        />
      );
    }

    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onNavigate={handleNavigate}
            onProjectSelect={handleProjectSelect}
          />
        );
      case "about":
        return <AboutPage />;
      case "work":
        return (
          <WorkPage onProjectSelect={handleProjectSelect} />
        );
      case "contact":
        return <ContactPage />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onProjectSelect={handleProjectSelect}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Premium Background System */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

        {/* Animated mesh gradient background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        />

        {/* Main animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Secondary accent orbs */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 70, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Floating particles with better distribution */}
        {[...Array(40)].map((_, i) => {
          const randomSize = Math.random() * 2 + 1;
          const randomDuration = Math.random() * 15 + 20;
          const randomDelay = Math.random() * 5;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;

          return (
            <motion.div
              key={i}
              initial={{
                x: `${randomX}vw`,
                y: `${randomY}vh`,
              }}
              animate={{
                y: [
                  `${randomY}vh`,
                  `${randomY - 20}vh`,
                  `${randomY}vh`,
                ],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: randomDelay,
              }}
              className="absolute rounded-full bg-white"
              style={{
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                boxShadow: `0 0 ${randomSize * 3}px rgba(255, 255, 255, 0.4)`,
              }}
            />
          );
        })}

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Animated light rays */}
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom right, transparent 40%, rgba(139, 92, 246, 0.03) 50%, transparent 60%),
              linear-gradient(to bottom left, transparent 40%, rgba(59, 130, 246, 0.03) 50%, transparent 60%)
            `,
          }}
        />

        {/* Top edge glow */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), transparent)",
          }}
        />

        {/* Bottom edge glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent)",
          }}
        />

        {/* Noise texture for grain */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            mixBlendMode: "overlay",
          }}
        />

        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(10, 10, 15, 0.8) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={
              selectedProject
                ? `project-${selectedProject.id}`
                : currentPage
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        <Footer />
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-purple-500/50 pointer-events-none z-50 hidden lg:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-purple-500 pointer-events-none z-50 hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
        }}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}