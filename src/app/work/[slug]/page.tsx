import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | ImagiNative AI Studios`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-primary-black">
      <article className="max-w-6xl mx-auto">
        {/* Project Header */}
        <div className="relative h-[60vh] mb-12 border-2 border-primary-white">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <div className="mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 mr-2 mb-2 border-2 border-primary-white 
                           text-primary-white font-mono text-sm"
                >
                  {tag}_
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-mono text-primary-white">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-mono text-primary-white">
                _Project_Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                {project.description}
              </div>
            </div>
            
            {/* Technologies Used */}
            <div className="mt-12">
              <h3 className="text-xl font-mono mb-4 text-primary-white">
                _Technologies_Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border-2 border-primary-white text-primary-white
                             hover:border-primary-red hover:text-primary-red transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Info Sidebar */}
          <div className="border-2 border-primary-white p-6 h-fit">
            <h3 className="text-xl font-mono mb-4 text-primary-white">
              _Project_Details
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-primary-white/60">Client</dt>
                <dd className="text-primary-white">{project.client}</dd>
              </div>
              <div>
                <dt className="text-primary-white/60">Timeline</dt>
                <dd className="text-primary-white">{project.timeline}</dd>
              </div>
              {project.website && (
                <div>
                  <dt className="text-primary-white/60">Website</dt>
                  <dd>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-red hover:underline"
                    >
                      Visit Site →
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </article>
    </main>
  );
} 