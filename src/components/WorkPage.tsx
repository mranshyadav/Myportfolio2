import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WorkPageProps {
  onProjectSelect: (project: any) => void;
}

export default function WorkPage({ onProjectSelect }: WorkPageProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'branding'];

  const projects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'web',
      description: 'A comprehensive financial analytics platform with real-time data visualization.',
      tags: ['UI Design', 'Data Viz', 'SaaS'],
      image: 'https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MjQzNTMzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      duration: '3 months',
      team: 'Solo Project',
      role: 'UI/UX Designer & Developer',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Figma'],
    },
    {
      id: 2,
      title: 'Wellness Mobile App',
      category: 'mobile',
      description: 'A mindfulness and meditation app designed to reduce stress and improve mental health.',
      tags: ['Mobile', 'Health', 'UX Research'],
      image: 'https://images.unsplash.com/photo-1504548840739-580b10ae7715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MjQ2Mzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-500/20 to-pink-500/20',
      duration: '4 months',
      team: '3 people',
      role: 'Lead UX Designer',
      technologies: ['Figma', 'Sketch', 'React Native', 'Adobe XD'],
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern shopping experience with personalized recommendations and seamless checkout.',
      tags: ['E-Commerce', 'Personalization', 'Conversion'],
      image: 'https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI1MzkyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-orange-500 to-red-500',
      gradient: 'from-orange-500/20 to-red-500/20',
      duration: '6 months',
      team: '5 people',
      role: 'Product Designer',
      technologies: ['Figma', 'Next.js', 'Tailwind CSS', 'Motion'],
    },
    {
      id: 4,
      title: 'Brand Identity System',
      category: 'branding',
      description: 'Complete brand identity including logo, color palette, and design guidelines.',
      tags: ['Branding', 'Identity', 'Guidelines'],
      image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50fGVufDF8fHx8MTc2MjUzOTIxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-500 to-emerald-500',
      gradient: 'from-green-500/20 to-emerald-500/20',
      duration: '2 months',
      team: 'Solo Project',
      role: 'Brand Designer',
      technologies: ['Illustrator', 'Photoshop', 'Figma', 'InDesign'],
    },
    {
      id: 5,
      title: 'Task Management Tool',
      category: 'web',
      description: 'Collaborative workspace for teams to organize projects and track progress.',
      tags: ['Productivity', 'Collaboration', 'SaaS'],
      image: 'https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MjUwMDEwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-violet-500 to-purple-500',
      gradient: 'from-violet-500/20 to-purple-500/20',
      duration: '5 months',
      team: '4 people',
      role: 'Lead Product Designer',
      technologies: ['Figma', 'React', 'TypeScript', 'REST API'],
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Intuitive food ordering experience with real-time tracking and smart recommendations.',
      tags: ['Mobile', 'Food Tech', 'Maps'],
      image: 'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjI0ODc2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-yellow-500 to-orange-500',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      duration: '4 months',
      team: '6 people',
      role: 'Senior UX Designer',
      technologies: ['Figma', 'React Native', 'Google Maps API', 'Firebase'],
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
            Featured <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my approach to solving design challenges and creating impactful user experiences.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full capitalize transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'glass hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onProjectSelect(project)}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full glass capitalize">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center glass-card rounded-3xl p-12"
        >
          <h2 className="text-3xl mb-4">Interested in collaborating?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button
            onClick={() => {
              // Create a link element and trigger download
              const link = document.createElement('a');
              link.href = '/portfolio.pdf'; // You'll need to add your portfolio PDF to the public folder
              link.download = 'Ansh_Yadav_Portfolio.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Download Portfolio
          </button>
        </motion.div>
      </div>
    </div>
  );
}