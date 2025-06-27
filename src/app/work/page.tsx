import { Metadata } from 'next';
import WorkPageClient from './WorkPageClient';

export const metadata: Metadata = {
  title: 'All Work | ImagiNative AI Studios',
  description: 'Explore our complete portfolio of digital innovations, AI solutions, and creative projects.',
};

export default function WorkPage() {
  return <WorkPageClient />;
} 