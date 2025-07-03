'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { projects } from '@/lib/data/projects';
import CyberpunkBackground from '@/components/CyberpunkBackground';

const categories = ['All', 'Branding', 'Development', 'AI', 'Web3', 'Strategy', 'Design'];

export default function WorkPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on category and search term
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || 
        project.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
      const matchesSearch = searchTerm === '' ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

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

  return (
    <main className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary-black relative">
      <CyberpunkBackground intensity="medium" />
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-white hover:text-primary-red 
                     transition-colors mb-6 sm:mb-8 font-mono text-sm touch-manipulation"
          >
            <ArrowLeft size={16} />
            BACK_TO_HOME
          </Link>
          
          <div className="border-4 border-primary-white p-6 sm:p-8 relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-red" />
            <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase relative z-10 text-primary-white">
              <span className="text-primary-red">[</span>
              ALL_WORK
              <span className="text-primary-red">]_</span>
            </h1>
            <p className="font-mono text-sm sm:text-base text-primary-white/70 mt-4 relative z-10">
              &gt; Explore our complete portfolio of digital innovations
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-white/50" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-primary-black border-2 border-primary-white pl-12 pr-4 py-3 
                       text-primary-white font-mono placeholder-primary-white/50 
                       focus:border-primary-yellow focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center gap-2 text-primary-white font-mono text-sm mb-2 sm:mb-0">
              <Filter size={16} />
              FILTER:
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 border font-mono text-xs sm:text-sm uppercase 
                          transition-colors touch-manipulation ${
                  selectedCategory === category
                    ? 'border-primary-yellow bg-primary-yellow text-primary-black'
                    : 'border-primary-white text-primary-white hover:border-primary-yellow hover:text-primary-yellow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 sm:mb-8">
          <p className="font-mono text-sm text-primary-white/70">
            &gt; Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group"
              layout
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black 
                              to-transparent opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-mono text-primary-white mb-1 sm:mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary-white/80 font-mono mb-2 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          className="px-1.5 py-0.5 bg-primary-red text-primary-white 
                                   text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs text-primary-white/60 font-mono">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 sm:py-16 lg:py-20"
          >
            <div className="border-2 border-primary-white/30 p-6 sm:p-8 inline-block">
              <h3 className="font-mono text-xl sm:text-2xl text-primary-white mb-4">
                NO_PROJECTS_FOUND_
              </h3>
              <p className="font-mono text-sm text-primary-white/70 mb-6">
                &gt; Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-primary-black border-2 border-primary-white px-4 sm:px-6 py-2 sm:py-3 
                         font-mono text-sm uppercase hover:border-primary-yellow 
                         hover:text-primary-yellow transition-colors touch-manipulation"
              >
                RESET_FILTERS
              </button>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 sm:mt-16 lg:mt-20 text-center"
          >
            <div className="border-2 border-primary-white p-6 sm:p-8 inline-block relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-12 sm:h-12 bg-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4 relative z-10">
                READY_TO_START_YOUR_PROJECT?
              </h3>
              <Link
                href="/#contact"
                className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                         font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                         transition-transform group touch-manipulation"
              >
                <span className="relative z-10 text-sm sm:text-base">GET_IN_TOUCH</span>
                <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                              translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                              transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
} 