export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  technologies: string[];
  timeline: string;
  client: string;
  website?: string;
}

export const projects: Project[] = [
  {
    id: 'digital-brand',
    slug: 'digital-brand-transformation',
    title: 'DIGITAL BRAND TRANSFORMATION_',
    description: 'Strategic digital brand evolution for modern businesses',
    fullDescription: `Our digital brand transformation service helps businesses evolve their brand identity for the modern digital landscape. We focus on creating cohesive brand experiences across all digital touchpoints while maintaining brand authenticity and recognition.`,
    tags: ['Branding', 'Strategy', 'Digital'],
    image: '/projects/digital-brand.jpg',
    technologies: ['Adobe Creative Suite', 'Figma', 'React', 'Next.js'],
    timeline: 'Q1 2024',
    client: 'Various Enterprise Clients',
    website: 'https://example.com/brand-transformation'
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions-development',
    title: 'AI SOLUTIONS DEVELOPMENT_',
    description: 'Custom AI solutions for enterprise applications',
    fullDescription: `We develop cutting-edge AI solutions that help businesses automate processes, gain insights, and enhance decision-making capabilities. Our AI implementations are tailored to specific business needs and integrate seamlessly with existing systems.`,
    tags: ['AI', 'Machine Learning', 'Development'],
    image: '/projects/ai-solutions.jpg',
    technologies: ['TensorFlow', 'PyTorch', 'Python', 'AWS'],
    timeline: 'Q2 2024',
    client: 'Tech Industry Leaders',
    website: 'https://example.com/ai-solutions'
  },
  {
    id: 'web3',
    slug: 'web3-integration',
    title: 'WEB3 INTEGRATION_',
    description: 'Blockchain and Web3 technology implementation',
    fullDescription: `Our Web3 integration services help businesses transition into the decentralized web. We implement blockchain solutions, smart contracts, and decentralized applications that prepare organizations for the future of the internet.`,
    tags: ['Web3', 'Blockchain', 'DApps'],
    image: '/projects/web3.jpg',
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS'],
    timeline: 'Q3 2024',
    client: 'Blockchain Innovators',
    website: 'https://example.com/web3'
  }
]; 