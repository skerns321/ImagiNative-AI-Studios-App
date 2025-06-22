import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | ImagiNative AI Studios',
  description: 'Get in touch with us for your next digital project',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-primary-black">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
          <h1 className="font-mono text-5xl uppercase relative z-10">
            <span className="text-primary-red">[</span>
            CONTACT
            <span className="text-primary-red">]_</span>
          </h1>
        </div>

        <ContactForm />
      </div>
    </main>
  );
} 