import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailProps {
  project: {
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
  };
  onBack: () => void;
}

export default function ProjectDetail({
  project,
  onBack,
}: ProjectDetailProps) {
  // Default data if not provided
  const overview =
    project.overview ||
    `${project.description} This project showcases modern design principles combined with cutting-edge technology to deliver an exceptional user experience.`;

  const challenge =
    project.challenge ||
    "The main challenge was creating an intuitive interface that could handle complex data while maintaining a clean and modern aesthetic. We needed to balance functionality with usability.";

  const solution =
    project.solution ||
    "We implemented a user-centered design approach, conducting extensive user research and iterative testing. The result is a seamless experience that simplifies complex workflows while maintaining powerful functionality.";

  const features = project.features || [
    "Intuitive user interface with modern design patterns",
    "Real-time data synchronization and updates",
    "Responsive design for all device sizes",
    "Advanced analytics and reporting",
    "Seamless integration with third-party services",
    "Robust security and data protection",
  ];

  const technologies = project.technologies || [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
    "Motion",
    "REST API",
  ];

  const results = project.results || [
    "45% increase in user engagement",
    "60% reduction in task completion time",
    "95% positive user feedback rating",
    "30% increase in conversion rate",
  ];

  const gallery = project.gallery || [
    project.image,
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjUwMDc2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTAwNzYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjUwMDc2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 rounded-full glass text-sm text-purple-400">
              {project.category}
            </span>
            {project.duration && (
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {project.duration}
                </span>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span className="text-sm">{project.team}</span>
              </div>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative aspect-video rounded-3xl overflow-hidden mb-20 bg-gradient-to-br ${project.gradient}`}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            Project{" "}
            <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-4xl">
            {overview}
          </p>
          {project.role && (
            <div className="mt-6 glass-card rounded-2xl p-6 inline-block">
              <p className="text-sm text-gray-400 mb-1">
                My Role
              </p>
              <p className="text-lg">{project.role}</p>
            </div>
          )}
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-2xl mb-4">The Challenge</h3>
            <p className="text-gray-400 leading-relaxed">
              {challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl mb-4">The Solution</h3>
            <p className="text-gray-400 leading-relaxed">
              {solution}
            </p>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8">
            Key <span className="gradient-text">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + index * 0.1,
                }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-400 mb-4" />
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8">
            Technologies{" "}
            <span className="gradient-text">Used</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.9 + index * 0.05,
                }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 glass rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8">
            Project{" "}
            <span className="gradient-text">Gallery</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.1 + index * 0.1,
                }}
                whileHover={{ scale: 1.02 }}
                className="aspect-video rounded-2xl overflow-hidden glass-card"
              >
                <ImageWithFallback
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="glass-card rounded-3xl p-12 mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl">
              Results &{" "}
              <span className="gradient-text">Impact</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.3 + index * 0.1,
                }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-lg">{result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            Interested in working together?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}