import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Cpu, Bot, Brain, Target, Zap } from 'lucide-react';
import CyberpunkBackground from '@/components/CyberpunkBackground';

export const metadata: Metadata = {
  title: 'AI Business Solutions | ImagiNative AI Studios',
  description: 'Custom AI solutions including ChatGPT integrations, prompt engineering, and AI strategy consultation.',
};

export default function AIBusinessSolutionsPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary-black relative">
      <CyberpunkBackground intensity="medium" />
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-primary-white hover:text-primary-red 
                     transition-colors mb-6 sm:mb-8 font-mono text-sm touch-manipulation"
          >
            <ArrowLeft size={16} />
            BACK_TO_SERVICES
          </Link>
          
          <div className="border-4 border-primary-white p-6 sm:p-8 relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-red" />
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border-2 border-primary-red">
                <Cpu className="w-8 h-8 text-primary-red" />
              </div>
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase relative z-10 text-primary-white">
                <span className="text-primary-red">[</span>
                AI_BUSINESS_SOLUTIONS
                <span className="text-primary-red">]_</span>
              </h1>
            </div>
            <p className="font-mono text-sm sm:text-base text-primary-white/70 relative z-10">
              &gt; Harness the power of AI to transform your business operations
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Custom ChatGPT Integrations */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">CHATGPT_INTEGRATIONS</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Seamlessly integrate ChatGPT into your existing workflows and applications.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Custom API implementations</li>
              <li>&gt; Workflow automation</li>
              <li>&gt; Data processing and analysis</li>
              <li>&gt; Customer service chatbots</li>
            </ul>
          </div>

          {/* Prompt Engineering Training */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">PROMPT_ENGINEERING</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Master the art of prompt engineering to maximize AI effectiveness.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Team training workshops</li>
              <li>&gt; Best practices documentation</li>
              <li>&gt; Custom prompt libraries</li>
              <li>&gt; Performance optimization</li>
            </ul>
          </div>

          {/* Tailored AI Solutions */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">CUSTOM_AI_SOLUTIONS</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Bespoke AI solutions designed specifically for your business needs.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Machine learning models</li>
              <li>&gt; Natural language processing</li>
              <li>&gt; Computer vision applications</li>
              <li>&gt; Predictive analytics</li>
            </ul>
          </div>

          {/* AI Strategy & Consultation */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">AI_STRATEGY</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Strategic guidance to implement AI effectively across your organization.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; AI readiness assessment</li>
              <li>&gt; Implementation roadmaps</li>
              <li>&gt; ROI analysis and planning</li>
              <li>&gt; Change management support</li>
            </ul>
          </div>
        </div>

        {/* AI Technologies */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl text-primary-white mb-6 border-l-4 border-primary-red pl-4">
            AI_TECHNOLOGIES_WE_WORK_WITH
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {['OpenAI GPT', 'Claude', 'Anthropic', 'Hugging Face', 'TensorFlow', 'PyTorch', 'LangChain', 'Pinecone'].map((tech) => (
              <div key={tech} className="border border-primary-white/30 p-3 text-center">
                <span className="font-mono text-sm text-primary-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl text-primary-white mb-6 border-l-4 border-primary-red pl-4">
            WHY_CHOOSE_AI_SOLUTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'EFFICIENCY_BOOST', desc: 'Automate repetitive tasks and increase productivity by up to 300%' },
              { title: 'COST_REDUCTION', desc: 'Reduce operational costs while improving service quality' },
              { title: 'COMPETITIVE_EDGE', desc: 'Stay ahead of the competition with cutting-edge AI technology' }
            ].map((benefit) => (
              <div key={benefit.title} className="border border-primary-white/30 p-4">
                <h3 className="font-mono text-lg text-primary-yellow mb-3">{benefit.title}</h3>
                <p className="font-mono text-sm text-primary-white/80">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="border-2 border-primary-white p-6 sm:p-8 inline-block relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-12 sm:h-12 bg-primary-yellow" />
            <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4 relative z-10">
              READY_TO_IMPLEMENT_AI_SOLUTIONS?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                       font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                       transition-transform group touch-manipulation"
            >
              <span className="relative z-10 text-sm sm:text-base text-primary-black">CONSULT_WITH_US</span>
              <div className="absolute inset-0 bg-primary-yellow -z-0 translate-x-2 
                            translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                            transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 