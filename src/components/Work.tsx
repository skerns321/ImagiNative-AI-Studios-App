'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';

// Define the project type
interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

// Define sample projects
const featuredProjects: Project[] = [
  {
    id: 'digital-brand',
    slug: 'digital-brand-transformation',
    title: 'DIGITAL BRAND TRANSFORMATION_',
    description: 'Strategic digital brand evolution for modern businesses',
    tags: ['Branding', 'Strategy', 'Digital'],
    image: '/projects/digital-brand.jpg'
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions-development',
    title: 'AI SOLUTIONS DEVELOPMENT_',
    description: 'Custom AI solutions for enterprise applications',
    tags: ['AI', 'Machine Learning', 'Development'],
    image: '/projects/ai-solutions.svg'
  },
  {
    id: 'web3',
    slug: 'web3-integration',
    title: 'WEB3 INTEGRATION_',
    description: 'Blockchain and Web3 technology implementation',
    tags: ['Web3', 'Blockchain', 'DApps'],
    image: '/projects/web3.svg'
  }
  // Add more projects as needed
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDetailsVisible(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setDetailsVisible(false);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };
  
  // Modal content variants
  const modalContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (custom * 0.1),
        duration: 0.4
      }
    })
  };

  return (
    <section id="work" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-mono mb-12 text-primary-white">
          _FEATURED_WORK
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group relative block aspect-square overflow-hidden border-2 
                       border-primary-white hover:border-primary-red transition-colors"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 
                         group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 
                            to-transparent opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-mono text-primary-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-white/80 font-mono">
                    {project.tags.join(' • ')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Project Details Modal */}
      <AnimatePresence>
        {detailsVisible && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-primary-black/95 backdrop-blur-sm"
          >
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] rounded-lg"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-primary-white hover:text-primary-red transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              
              <div className="relative h-[300px] w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
              </div>
              
              <div className="p-8">
                {/* Header info */}
                <motion.h3
                  custom={0}
                  variants={modalContentVariants}
                  initial="hidden"
                  animate="visible" 
                  className="text-3xl font-heading font-bold text-primary-white mb-2"
                >
                  {selectedProject.title}
                </motion.h3>
                
                <motion.p
                  custom={1}
                  variants={modalContentVariants}
                  initial="hidden"
                  animate="visible" 
                  className="text-primary-yellow text-sm uppercase tracking-wider mb-6"
                >
                  {selectedProject.description}
                </motion.p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    custom={2}
                    variants={modalContentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4 className="text-primary-white/50 text-xs uppercase tracking-wider mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-primary-black border border-primary-white/10 text-xs text-primary-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Project details */}
                <div className="space-y-6">
                  <motion.div
                    custom={3}
                    variants={modalContentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4 className="text-primary-red font-heading font-medium text-lg mb-2">Description</h4>
                    <p className="text-primary-white/80">{selectedProject.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 