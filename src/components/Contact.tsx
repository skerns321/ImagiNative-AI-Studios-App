'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { z } from 'zod';
import { MapPin, Mail, Phone } from 'lucide-react';
// Remove Firebase imports temporarily
// import { db } from '@/lib/firebase/firebase';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  services: z.array(z.string()).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { id: 'web-development', label: 'Web Development' },
  { id: 'ui-ux-design', label: 'UI/UX Design' },
  { id: 'digital-strategy', label: 'Digital Strategy' },
  { id: 'ai-integration', label: 'AI Integration' },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    services: [],
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...(prev.services || []), value] 
        : (prev.services || []).filter(service => service !== value)
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      // Clear any existing errors
      setErrors({});
      setIsSubmitting(true);
      
      // Simulating API call - temporarily disable Firebase
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      /* 
      // Firebase implementation for when env vars are set up
      try {
        await addDoc(collection(db, 'contactSubmissions'), {
          ...formData,
          createdAt: serverTimestamp(),
        });
      } catch (firebaseError) {
        console.error('Error submitting form to Firebase:', firebaseError);
      }
      */
      
      // Success state
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        services: [],
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const formattedErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          const path = err.path[0] as keyof ContactFormData;
          formattedErrors[path] = err.message;
        });
        setErrors(formattedErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary-black relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
        {Array(12).fill(0).map((_, i) => (
          <div key={i} className="border-l-2 border-primary-white h-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
          <h2 className="font-mono text-4xl uppercase">
            <span className="text-primary-red">[</span>
            Contact
            <span className="text-primary-red">]_</span>
          </h2>
          <p className="font-mono text-primary-white/70 mt-4">
            &gt; await sendMessage(yourIdeas);
          </p>

          <form className="mt-8 space-y-6">
            {['name', 'email', 'message'].map((field) => (
              <div key={field} className="relative">
                <div className="absolute inset-0 bg-primary-red translate-x-1 translate-y-1" />
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={`_${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className="w-full p-4 font-mono bg-primary-black border-2 border-primary-white 
                           text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                           focus:border-primary-yellow"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-primary-black border-2 border-primary-white p-4 font-mono 
                       uppercase relative hover:translate-x-1 hover:-translate-y-1 
                       transition-transform group"
            >
              <span className="relative z-10">Send Message_</span>
              <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                            translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                            transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 