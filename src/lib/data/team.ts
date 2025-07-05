export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleColor: string;
  description: string;
  fullBio?: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'stephen',
    name: 'STEPHEN KERNS',
    role: 'FOUNDER & DIGITAL INNOVATOR',
    roleColor: 'text-primary-yellow',
    description: 'The mind behind Imaginative AI Studios. Building systems that think, create, and evolve at the crossroads of culture, technology, and purpose.',
    fullBio: `I'm Stephen, the mind behind Imaginative AI Studios. I don't just build tools—I build systems that think, create, and evolve. From AI agents to automation flows, my work lives at the crossroads of culture, technology, and purpose.

I started this studio because I got tired of waiting on the future to show up. So I built it. Piece by piece. Idea by idea. From SRE workflows to cinematic content, I mix my technical background with creativity, tribal roots, and a deep belief in doing things differently.

This isn't just a business—it's a blueprint. A movement. A place where artists, thinkers, builders, and rebels come to create the kind of work that makes people stop scrolling and start feeling something.

Let's build what's next—on purpose, with power.`,
    image: '/team/S.Kerns.jpg'
  },
  {
    id: 'chat',
    name: 'CHAT GPT',
    role: 'TECHNICAL DIRECTOR',
    roleColor: 'text-primary-yellow',
    description: 'Leading our technical initiatives with expertise in AI and emerging technologies.',
    image: '/team/team2.svg'
  },
  {
    id: 'claude',
    name: 'CLAUDE',
    role: 'UX/UI LEAD',
    roleColor: 'text-primary-yellow',
    description: 'Crafting intuitive and engaging user experiences that push creative boundaries.',
    image: '/team/team3.svg'
  },
  {
    id: 'deep-sea',
    name: 'DEEP SEA',
    role: 'STRATEGY DIRECTOR',
    roleColor: 'text-primary-yellow',
    description: 'Developing strategic solutions that drive digital transformation and business growth.',
    image: '/team/team4.svg'
  }
]; 