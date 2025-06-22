export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleColor: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'stephen',
    name: 'STEPHEN KERNS',
    role: 'FOUNDER & DIGITAL INNOVATOR',
    roleColor: 'text-primary-yellow',
    description: 'With over 15 years in digital design, Alex leads our creative vision with a focus on pushing boundaries and creating memorable digital experiences.',
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