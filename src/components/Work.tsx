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
    <section id="work" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header with Brutalist Style */}
          <div className="mb-16 border-4 border-primary-white p-8 relative">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
            <h2 className="font-mono text-5xl uppercase relative z-10">
              <span className="text-primary-red">[</span>
              FEATURED WORK
              <span className="text-primary-red">]_</span>
            </h2>
            <p className="font-mono text-primary-white/70 mt-4">
              &gt; SELECT * FROM projects ORDER BY created_date DESC LIMIT 6;
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative aspect-square overflow-hidden border-2 
                           border-primary-white hover:border-primary-red transition-colors
                           touch-manipulation"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 
                             group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black 
                                to-transparent opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 p-3 sm:p-4 lg:p-6">
                      <h3 className="text-sm sm:text-base lg:text-xl font-mono text-primary-white mb-1 sm:mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-primary-white/80 font-mono">
                        {project.tags.slice(0, 2).join(' • ')}
                        {project.tags.length > 2 && '...'}
                      </p>
                    </div>
                  </div>
                </Link>
                
                {/* Mobile-friendly details button */}
                <button
                  onClick={() => handleProjectClick(project)}
                  className="sm:hidden w-full mt-2 py-2 bg-primary-black border border-primary-white 
                           text-primary-white font-mono text-sm hover:border-primary-red 
                           hover:text-primary-red transition-colors touch-manipulation"
                >
                  VIEW_DETAILS_
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div 
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="border-2 border-primary-white p-6 sm:p-8 relative max-w-2xl mx-auto">
            <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-primary-red" />
            <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4">
              EXPLORE_MORE_WORK?
            </h3>
            <p className="font-body text-sm sm:text-base text-primary-white/70 mb-6 leading-relaxed">
              Browse our complete portfolio and case studies
            </p>
            <Link
              href="/work"
              className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                       font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                       transition-transform group touch-manipulation"
            >
              <span className="relative z-10 text-sm sm:text-base font-bold">VIEW_ALL_WORK</span>
              <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                            translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                            transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Project Details Modal */}
      <AnimatePresence>
        {detailsVisible && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-black/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-primary-black 
                         border-2 border-primary-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 text-primary-white hover:text-primary-red 
                         transition-colors border border-primary-white hover:border-primary-red
                         touch-manipulation"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              <div className="relative h-48 sm:h-64 lg:h-80 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-black"></div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Header info */}
                <motion.h3
                  custom={0}
                  variants={modalContentVariants}
                  initial="hidden"
                  animate="visible" 
                  className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-primary-white mb-2"
                >
                  {selectedProject.title}
                </motion.h3>
                
                <motion.p
                  custom={1}
                  variants={modalContentVariants}
                  initial="hidden"
                  animate="visible" 
                  className="text-primary-yellow text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6"
                >
                  {selectedProject.description}
                </motion.p>
                
                <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <motion.div
                    custom={2}
                    variants={modalContentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4 className="text-primary-white/50 text-xs uppercase tracking-wider mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-2 sm:px-3 py-1 border border-primary-white/20 
                                                 text-xs text-primary-white font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Project details */}
                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    custom={3}
                    variants={modalContentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4 className="text-primary-red font-mono font-medium text-base sm:text-lg mb-2">Description</h4>
                    <p className="text-primary-white/80 text-sm sm:text-base leading-relaxed">{selectedProject.description}</p>
                  </motion.div>
                  
                  <motion.div
                    custom={4}
                    variants={modalContentVariants}
                    initial="hidden"
                    animate="visible"
                    className="pt-4 border-t border-primary-white/20"
                  >
                    <Link
                      href={`/work/${selectedProject.slug}`}
                      className="inline-block bg-primary-black border-2 border-primary-white px-4 sm:px-6 py-2 sm:py-3 
                               font-mono text-sm sm:text-base uppercase relative hover:translate-x-1 hover:-translate-y-1 
                               transition-transform group touch-manipulation"
                    >
                      <span className="relative z-10">VIEW_FULL_PROJECT</span>
                      <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                                    translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                                    transition-transform" />
                    </Link>
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