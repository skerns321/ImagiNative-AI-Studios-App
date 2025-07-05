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
      
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: formData.message,
          services: formData.services?.join(', ') || 'None selected',
        }).toString(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
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
      } else {
        // Handle form submission errors
        setErrors({ 
          email: 'Failed to send message. Please try again or contact us directly.' 
        });
        console.error('Form submission error:', error);
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
    <section id="contact" className="py-6 sm:py-8 lg:py-12 bg-primary-black relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-primary-black to-primary-black/80 border-2 border-primary-white p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-primary-red" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary-yellow animate-pulse" />
              <h2 className="font-mono text-xl sm:text-2xl lg:text-3xl uppercase relative z-10">
                <span className="text-primary-red">[</span>
                Contact
                <span className="text-primary-red">]_</span>
              </h2>
              <p className="font-mono text-sm text-primary-white/70 mt-2 relative z-10">
                &gt; await sendMessage(yourIdeas);
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'hello@imaginative.studio', href: 'mailto:hello@imaginative.studio' },
                { icon: Phone, label: 'Phone', value: '+1 (910) 827-9846', href: 'tel:+19108279846' },
                { icon: MapPin, label: 'Location', value: 'Red Springs, NC', href: null }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  variants={itemVariants}
                  className="group"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center space-x-3 p-3 border border-primary-white/20 
                             hover:border-primary-red hover:bg-primary-red/5 transition-all duration-200
                             transform hover:translate-x-1 hover:-translate-y-0.5">
                      <div className="flex-shrink-0 p-2 border border-primary-red group-hover:border-primary-yellow group-hover:bg-primary-yellow/10 transition-all">
                        <item.icon className="w-4 h-4 text-primary-red group-hover:text-primary-yellow transition-colors" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-primary-white/60 uppercase">{item.label}</p>
                        <p className="font-mono text-sm text-primary-white group-hover:text-primary-yellow transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 p-3 border border-primary-white/20">
                      <div className="flex-shrink-0 p-2 border border-primary-red">
                        <item.icon className="w-4 h-4 text-primary-red" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-primary-white/60 uppercase">{item.label}</p>
                        <p className="font-mono text-sm text-primary-white">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            {isSuccess ? (
              <div className="border-2 border-primary-green p-6 relative bg-gradient-to-br from-green-900/20 to-primary-black">
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-green animate-pulse" />
                <h3 className="font-mono text-xl text-primary-green mb-3">MESSAGE_SENT!</h3>
                <p className="font-mono text-sm text-primary-white/80">
                  &gt; Thank you for reaching out. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-4 bg-gradient-to-br from-primary-black to-primary-black/95 p-4 sm:p-6 border border-primary-white/10"
              >
                {/* Netlify spam protection */}
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                {/* Name Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-red translate-x-1 translate-y-1 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="_Name"
                    className="w-full p-3 font-mono text-sm bg-primary-black border-2 border-primary-white 
                             text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                             focus:border-primary-yellow transition-all duration-200
                             group-focus-within:shadow-lg"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-mono text-primary-red">
                      &gt; {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-red translate-x-1 translate-y-1 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="_Email"
                    className="w-full p-3 font-mono text-sm bg-primary-black border-2 border-primary-white 
                             text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                             focus:border-primary-yellow transition-all duration-200
                             group-focus-within:shadow-lg"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-mono text-primary-red">
                      &gt; {errors.email}
                    </p>
                  )}
                </div>

                {/* Company Field (Optional) */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-yellow translate-x-1 translate-y-1 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="_Company (Optional)"
                    className="w-full p-3 font-mono text-sm bg-primary-black border-2 border-primary-white 
                             text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                             focus:border-primary-yellow transition-all duration-200
                             group-focus-within:shadow-lg"
                  />
                </div>

                {/* Services Checkboxes */}
                <div className="space-y-3">
                  <label className="block font-mono text-sm text-primary-white">
                    _Services of Interest:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {services.map((service) => (
                      <label key={service.id} className="flex items-center space-x-2 cursor-pointer touch-manipulation 
                                                           p-2 border border-primary-white/20 hover:border-primary-yellow/50 
                                                           hover:bg-primary-yellow/5 transition-all duration-200 group">
                        <input
                          type="checkbox"
                          value={service.id}
                          checked={formData.services?.includes(service.id)}
                          onChange={handleServiceChange}
                          className="w-4 h-4 border-2 border-primary-white bg-primary-black 
                                   checked:bg-primary-red focus:outline-none"
                        />
                        <span className="font-mono text-xs text-primary-white group-hover:text-primary-yellow transition-colors">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-red translate-x-1 translate-y-1 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="_Your Message"
                    rows={4}
                    className="w-full p-3 font-mono text-sm bg-primary-black border-2 border-primary-white 
                             text-primary-white relative placeholder:text-primary-white/50 focus:outline-none
                             focus:border-primary-yellow transition-all duration-200 resize-vertical
                             group-focus-within:shadow-lg"
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-mono text-primary-red">
                      &gt; {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-black border-2 border-primary-white p-3 font-mono 
                           text-sm uppercase relative hover:translate-x-1 hover:-translate-y-1 
                           transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed
                           touch-manipulation hover:border-primary-yellow disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                >
                  <span className="relative z-10 group-hover:text-primary-yellow transition-colors">
                    {isSubmitting ? 'SENDING...' : 'SEND_MESSAGE_'}
                  </span>
                  <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                                translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                                transition-transform group-hover:bg-primary-yellow/80" />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 