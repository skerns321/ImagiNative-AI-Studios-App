'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { X, ArrowLeft } from 'lucide-react';
import { teamMembers, TeamMember } from '@/lib/data/team';
import CyberpunkBackground from './CyberpunkBackground';

export default function About() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Brutalist Style */}
        <div className="mb-16 border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
          <h2 className="font-mono text-fluid-4xl uppercase relative z-10">
            <span className="text-primary-red">[</span>
            ABOUT
            <span className="text-primary-red">]_</span>
          </h2>
          <p className="font-mono text-fluid-sm text-primary-white/70 mt-4">
            &gt; SELECT * FROM team_members JOIN company_info ON team.id;
          </p>
        </div>
        <div className="mb-10">
          <p className="font-body text-primary-white/80 mb-4 text-base sm:text-lg leading-relaxed">
            ImagiNative Studios is a forward-thinking digital innovation studio dedicated to blending creativity with cutting-edge technology. Our mission is to empower brands and individuals to realize their boldest ideas through the power of artificial intelligence, design, and strategic thinking. With a passion for pushing boundaries, we craft digital experiences that are not only visually stunning but also deeply impactful.
          </p>
          <p className="font-body text-primary-white/80 text-base sm:text-lg leading-relaxed">
            Our multidisciplinary team brings together expertise in AI, design, development, and strategy to deliver solutions that drive real results. Whether you're a startup looking to disrupt your industry or an established brand seeking a fresh perspective, ImagiNative Studios is your partner in digital transformation. We believe in the power of collaboration, curiosity, and relentless innovation to shape the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Member Card */}
              <div className="border-2 border-primary-white p-4 relative">
                {/* Role Tag */}
                <div className="absolute -top-3 left-4 bg-primary-black px-2">
                  <span className="font-mono text-sm text-primary-yellow">
                    {member.role}
                  </span>
                </div>

                {/* Member Image */}
                <div className="relative aspect-square mb-4 bg-primary-black border-2 border-primary-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="font-mono text-lg sm:text-xl text-primary-white">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-primary-white/70 leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* More Button for members with fullBio */}
                  {member.fullBio && (
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="mt-4 inline-block bg-primary-black border-2 border-primary-white px-4 py-2 
                               font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                               transition-transform group touch-manipulation text-xs"
                    >
                      <span className="relative z-10 text-primary-white group-hover:text-primary-black">
                        VIEW_PROFILE
                      </span>
                      <div className="absolute inset-0 bg-primary-red -z-0 translate-x-1 
                                    translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 
                                    transition-transform" />
                    </button>
                  )}
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-red" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Profile Card Modal */}
        <AnimatePresence>
          {selectedMember && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                onClick={() => setSelectedMember(null)}
              />
              
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-20 xl:inset-24 
                         bg-gradient-to-br from-primary-black via-primary-black to-gray-900/90
                         border-2 border-primary-white z-50 overflow-hidden shadow-2xl
                         max-w-6xl mx-auto"
              >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-6 right-6 w-2 h-2 bg-primary-yellow animate-pulse" />
                  <div className="absolute top-10 right-12 w-1 h-1 bg-primary-red animate-ping" />
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-primary-red/30" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-red via-primary-yellow to-primary-red opacity-40" />
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-2 text-primary-white hover:text-primary-red 
                           border border-primary-white hover:border-primary-red transition-colors z-20
                           hover:bg-primary-red/10 backdrop-blur-sm"
                  aria-label="Close profile"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Card Content */}
                <div className="h-full flex flex-col lg:flex-row">
                  {/* Left Side - Profile Image */}
                  <div className="lg:w-2/5 bg-gradient-to-br from-primary-black to-gray-900/80 
                               border-r-0 lg:border-r-2 lg:border-primary-white/20 
                               p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden">
                    
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary-red rotate-45" />
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary-yellow rotate-12" />
                    </div>

                    {/* Profile Image Container */}
                    <div className="relative group mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-red/20 to-primary-yellow/20 
                                   blur-2xl group-hover:blur-3xl transition-all duration-700" />
                      <div className="relative aspect-square bg-primary-black border-2 border-primary-white 
                                   shadow-2xl overflow-hidden">
                        <Image
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        
                        {/* Image Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/40 via-transparent to-transparent" />
                        <div className="absolute bottom-3 right-3 w-4 h-4 bg-primary-red animate-pulse" />
                        <div className="absolute top-3 left-3 w-2 h-2 bg-primary-yellow" />
                      </div>
                    </div>
                    
                    {/* Name & Role */}
                    <div className="relative z-10 text-center">
                      <h2 className="font-mono text-2xl lg:text-3xl text-primary-white mb-2">
                        {selectedMember.name}
                      </h2>
                      <div className="inline-block border-2 border-primary-yellow bg-primary-black/90 
                                   backdrop-blur-sm px-4 py-2">
                        <div className="font-mono text-sm text-primary-yellow font-bold">
                          {selectedMember.role}
                        </div>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="font-mono text-xs text-primary-white/60">
                        ONLINE
                      </span>
                    </div>
                  </div>
                  
                  {/* Right Side - Bio Content */}
                  <div className="lg:w-3/5 p-6 lg:p-8 xl:p-10 overflow-y-auto relative">
                    
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-1 h-6 bg-primary-red" />
                        <h3 className="font-mono text-lg text-primary-yellow">
                          ./about.md
                        </h3>
                      </div>
                      <div className="h-px bg-gradient-to-r from-primary-red via-primary-yellow to-transparent" />
                    </div>
                    
                    {/* Bio Content */}
                    <div className="space-y-6">                      
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b 
                                     from-primary-yellow via-primary-red to-primary-yellow opacity-60" />
                        <div className="pl-5">
                          <div className="font-body text-primary-white/95 text-base lg:text-lg 
                                       leading-relaxed whitespace-pre-line">
                            {selectedMember.fullBio}
                          </div>
                        </div>
                      </div>
                      
                      {/* Terminal Prompt */}
                      <div className="mt-8 p-4 bg-primary-black/60 border border-primary-white/20 
                                   backdrop-blur-sm">
                        <div className="font-mono text-sm space-y-1">
                          <div className="text-primary-white/70">
                            <span className="text-primary-yellow">user@imaginative:</span>
                            <span className="text-primary-white">~$ </span>
                            <span className="text-primary-white/80">whoami</span>
                          </div>
                          <div className="text-primary-white/90">
                            {selectedMember.name.toLowerCase().replace(' ', '_')}
                          </div>
                          <div className="text-primary-white/70 mt-2">
                            <span className="text-primary-yellow">user@imaginative:</span>
                            <span className="text-primary-white">~$ </span>
                            <span className="text-primary-green animate-pulse">█</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="mt-8 pt-4 border-t border-primary-white/20">
                      <div className="flex items-center justify-between">
                        <div className="font-mono text-xs text-primary-white/50">
                          &gt; profile_loaded_
                          <span className="animate-blink text-primary-red">_</span>
                        </div>
                        <div className="font-mono text-xs text-primary-white/40">
                          {new Date().toISOString().split('T')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 