'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { z } from 'zod';
import { MapPin, Mail, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import CyberpunkBackground from '@/components/CyberpunkBackground';

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

export default function ContactPage() {
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
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
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
    <main className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary-black relative">
      <CyberpunkBackground intensity="high" />

      <div className="max-w-7xl mx-auto relative">
        {/* Back Navigation */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-white hover:text-primary-red 
                     transition-colors font-mono text-sm touch-manipulation"
          >
            <ArrowLeft size={16} />
            BACK_TO_HOME
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div className="border-2 sm:border-4 border-primary-white p-4 sm:p-6 lg:p-8 relative">
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary-red" />
              <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl uppercase relative z-10">
                <span className="text-primary-red">[</span>
                Contact
                <span className="text-primary-red">]_</span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-primary-white/70 mt-2 sm:mt-4 relative z-10">
                &gt; await sendMessage(yourIdeas);
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@imaginative.studio' },
                { icon: Phone, label: 'Phone', value: '+1 (910) 827-9846' },
                { icon: MapPin, label: 'Location', value: 'Red Springs, NC' }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  variants={itemVariants}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 border border-primary-white/20 
                           hover:border-primary-white/40 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 border border-primary-red">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-red" />
                  </div>
                  <div>
                    <p className="font-mono text-xs sm:text-sm text-primary-white/60 uppercase">{item.label}</p>
                    <p className="font-mono text-sm sm:text-base text-primary-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            {isSuccess ? (
              <div className="border-2 border-primary-green p-6 sm:p-8">
                <h3 className="font-mono text-xl sm:text-2xl text-primary-green mb-4">MESSAGE_SENT!</h3>
                <p className="font-mono text-sm sm:text-base text-primary-white/80">
                  &gt; Thank you for reaching out. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-red translate-x-1 translate-y-1" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="_Name"
                    className="w-full p-3 sm:p-4 font-mono text-sm sm:text-base bg-primary-black border-2 border-primary-white 
                             text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                             focus:border-primary-yellow transition-colors"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs sm:text-sm font-mono text-primary-red">
                      &gt; {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-red translate-x-1 translate-y-1" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="_Email"
                    className="w-full p-3 sm:p-4 font-mono text-sm sm:text-base bg-primary-black border-2 border-primary-white 
                             text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                             focus:border-primary-yellow transition-colors"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs sm:text-sm font-mono text-primary-red">
                      &gt; {errors.email}
                    </p>
                  )}
                </div>

                {/* Company Field (Optional) */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-yellow translate-x-1 translate-y-1" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="_Company (Optional)"
                    className="w-full p-3 sm:p-4 font-mono text-sm sm:text-base bg-primary-black border-2 border-primary-white 
                             text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                             focus:border-primary-yellow transition-colors"
                  />
                </div>

                {/* Services Checkboxes */}
                <div className="space-y-3">
                  <label className="block font-mono text-sm sm:text-base text-primary-white">
                    _Services of Interest:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {services.map((service) => (
                      <label key={service.id} className="flex items-center space-x-2 cursor-pointer touch-manipulation">
                        <input
                          type="checkbox"
                          value={service.id}
                          checked={formData.services?.includes(service.id)}
                          onChange={handleServiceChange}
                          className="w-4 h-4 border-2 border-primary-white bg-primary-black 
                                   checked:bg-primary-red focus:outline-none"
                        />
                        <span className="font-mono text-xs sm:text-sm text-primary-white">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-red translate-x-1 translate-y-1" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="_Your Message"
                    rows={5}
                    className="w-full p-3 sm:p-4 font-mono text-sm sm:text-base bg-primary-black border-2 border-primary-white 
                             text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                             focus:border-primary-yellow transition-colors resize-vertical"
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm font-mono text-primary-red">
                      &gt; {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-black border-2 border-primary-white p-3 sm:p-4 font-mono 
                           text-sm sm:text-base uppercase relative hover:translate-x-1 hover:-translate-y-1 
                           transition-transform group disabled:opacity-50 disabled:cursor-not-allowed
                           touch-manipulation"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'SENDING...' : 'SEND_MESSAGE_'}
                  </span>
                  <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                                translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                                transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 