'use client';

import { motion } from 'framer-motion';
import { Play, Headphones, Monitor, Code } from 'lucide-react';

// Media showcase items (no actual media files)
type MediaShowcase = {
  id: string;
  title: string;
  type: 'audio' | 'video' | 'interactive';
  icon: any;
  description: string;
  status: 'coming-soon' | 'in-development' | 'concept';
  date: string;
};

const mediaShowcases: MediaShowcase[] = [
  {
    id: '1',
    title: 'AI_SYMPHONY_GENERATOR',
    type: 'audio',
    icon: Headphones,
    description: 'Neural network-powered music composition with real-time synthesis',
    status: 'in-development',
    date: '2024-Q2'
  },
  {
    id: '2',
    title: 'INTERACTIVE_CODE_VISUALIZER',
    type: 'interactive',
    icon: Code,
    description: 'Live code execution with 3D visualization and terminal aesthetics',
    status: 'concept',
    date: '2024-Q3'
  },
  {
    id: '3',
    title: 'CYBERPUNK_MOTION_GRAPHICS',
    type: 'video',
    icon: Monitor,
    description: 'Terminal-themed animation sequences with glitch effects',
    status: 'coming-soon',
    date: '2024-Q2'
  },
  {
    id: '4',
    title: 'GENERATIVE_AUDIO_LANDSCAPES',
    type: 'audio',
    icon: Headphones,
    description: 'Procedural soundscapes generated from data patterns',
    status: 'in-development',
    date: '2024-Q3'
  }
];

const statusColors = {
  'coming-soon': 'text-primary-yellow',
  'in-development': 'text-primary-red',
  'concept': 'text-primary-white/60'
};

const statusLabels = {
  'coming-soon': 'COMING_SOON',
  'in-development': 'IN_DEVELOPMENT',
  'concept': 'CONCEPT_PHASE'
};

export default function Media() {
  return (
    <section id="media" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary-black relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-16 border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-yellow" />
          <h2 className="font-mono text-fluid-4xl uppercase relative z-10">
            <span className="text-primary-red">[</span>
            MEDIA LAB
            <span className="text-primary-red">]_</span>
          </h2>
          <p className="font-mono text-fluid-sm text-primary-white/70 mt-4">
            &gt; SELECT * FROM media_projects WHERE status != 'archived';
          </p>
        </div>

        {/* Media Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {mediaShowcases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Offset background */}
              <div className="absolute inset-0 bg-primary-red translate-x-2 translate-y-2 
                           group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
              
              {/* Media Card */}
              <div className="border-2 border-primary-white bg-primary-black p-6 relative">
                {/* Media Preview Area */}
                <div className="relative aspect-video mb-6 border-2 border-primary-white/20 
                             bg-primary-black flex items-center justify-center overflow-hidden">
                  {/* Terminal-style visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1 opacity-20">
                      {Array(32).fill(0).map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-primary-red"
                          style={{
                            animation: `pulse ${1 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Icon and Status */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="p-4 border-2 border-primary-white bg-primary-black">
                      <item.icon className="w-8 h-8 text-primary-white" />
                    </div>
                    <div className="text-center">
                      <div className={`font-mono text-sm ${statusColors[item.status]} mb-2`}>
                        {statusLabels[item.status]}
                      </div>
                      <div className="font-mono text-xs text-primary-white/60">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                               opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="border-2 border-primary-yellow bg-primary-black p-3">
                      <Play className="w-6 h-6 text-primary-yellow" />
                    </div>
                  </div>
                </div>

                {/* Media Info */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-mono text-lg sm:text-xl text-primary-white">
                      {item.title}_
                    </h3>
                    <span className="font-mono text-xs text-primary-yellow uppercase px-2 py-1 
                                   border border-primary-yellow/30 whitespace-nowrap">
                      {item.type}
                    </span>
                  </div>
                  
                  <p className="font-body text-sm sm:text-base text-primary-white/80 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-2 border-t border-primary-white/10">
                    <p className="font-mono text-xs text-primary-white/50">
                      &gt; status: {item.status.replace('-', '_')}
                    </p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-yellow" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="border-2 border-primary-white p-6 sm:p-8 relative max-w-2xl mx-auto">
            <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-primary-yellow" />
            <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4">
              INTERACTIVE_DEMOS_LOADING...
            </h3>
            <p className="font-body text-sm sm:text-base text-primary-white/70 mb-4 leading-relaxed">
              Our media lab is currently developing cutting-edge interactive experiences. 
              Check back soon for live demos and playable prototypes.
            </p>
            <div className="font-mono text-xs text-primary-yellow">
              &gt; Expected deployment: Q2-Q3 2024
            </div>
          </div>
        </motion.div>
      </div>

      {/* Brutalist Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 border-t-4 border-l-4 border-primary-yellow" />
      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 border-b-4 border-r-4 border-primary-red" />
    </section>
  );
}