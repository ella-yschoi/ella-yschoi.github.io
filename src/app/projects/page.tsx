'use client';

import ProjectCard from '../../components/ProjectCard';
import { motion } from 'framer-motion';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const projects = [
  {
    slug: 'vience-datahub',
    title: 'VIENCE - DataHub',
    description:
      'Cloud-based service for managing and processing large-scale pathology image data using React and TypeScript',
    image: `${prefix}/images/project/datahub-desktop-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    period: 'Sep 2024 - Aug 2025',
  },
  {
    slug: 'vience-workspace',
    title: 'VIENCE - Workspace',
    description:
      'Visual programming platform for image processing workflows using React and TypeScript',
    image: `${prefix}/images/project/workspace-viewer-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    period: 'Sep 2024 - Aug 2025',
  },
  {
    slug: 'peer-connect',
    title: 'P2P Video Chat - PeerConnect',
    description:
      'WebRTC-based video chat with room codes and real-time connection monitoring',
    image: `${prefix}/images/project/peer-connect-thumbnail.png`,
    tech: [
      'TypeScript',
      'React',
      'WebRTC',
      'Socket.io',
      'Express.js',
      'Tailwind CSS',
    ],
    period: 'Oct 2025 - Present',
  },
  {
    slug: 'github-pulse',
    title: 'Dashboard - GitHub Pulse',
    description:
      'GitHub activity dashboard with AI-powered insights and automated PDF reports',
    image: `${prefix}/images/project/github-pulse-thumbnail.png`,
    tech: [
      'TypeScript',
      'Next.js',
      'React',
      'Express.js',
      'Tailwind CSS',
      'NextAuth.js',
      'TanStack Query',
      'Recharts',
      'OpenAI',
    ],
    period: 'Sep 2025 - Present',
  },
  {
    slug: 'datepicker-calendar',
    title: 'Open Source - DatePicker Calendar',
    description:
      'Published npm package with 200+ weekly downloads and WCAG 2.1 AA accessibility compliance',
    image: `${prefix}/images/project/calendar-thumbnail.jpeg`,
    tech: ['TypeScript', 'React', 'Vite'],
    period: 'Mar 2024 - Present',
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description:
      'Accessible portfolio with Lighthouse scores of 100/100/100/99 and fast load performance',
    image: `${prefix}/images/project/portfolio-home.png`,
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    period: 'Jun 2025',
  },
  {
    slug: 'random-picker',
    title: 'Open Source - Random Picker',
    description:
      'Simple random selection tool with clean UI and smooth user experience',
    image: `${prefix}/images/project/random-picker-thumbnail.png`,
    tech: ['TypeScript', 'React', 'Vite', 'Emotion'],
    period: 'Feb 2024',
  },
];

export default function ProjectsPage() {
  const professionalProjects = projects.filter(
    (p) => p.slug === 'vience-datahub' || p.slug === 'vience-workspace'
  );
  const personalProjects = projects.filter(
    (p) => p.slug !== 'vience-datahub' && p.slug !== 'vience-workspace'
  );

  return (
    <section
      className='py-16 w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 min-h-screen'
      data-scrollable
    >
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <motion.div
          className='pt-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'>Projects</h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            This collection of projects showcases my ability to build efficient,
            scalable, and user-centric web applications, with a strong focus on
            clean code, performance, and accessibility.
          </p>
        </motion.div>

        <div className='space-y-16'>
          {/* Professional Projects Section */}
          <motion.section
            aria-labelledby='professional-projects-heading'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='flex items-center gap-3 mb-8'>
              <div className='p-2 bg-blue-100 rounded-lg'></div>
              <h2
                id='professional-projects-heading'
                className='text-2xl font-bold text-gray-900'
              >
                Professional Projects
              </h2>
            </div>

            <div className='space-y-8'>
              {professionalProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} variant='large' />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Personal Projects Section */}
          <motion.section
            aria-labelledby='personal-projects-heading'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='flex items-center gap-3 mb-8'>
              <div className='p-2 bg-indigo-100 rounded-lg'></div>
              <h2
                id='personal-projects-heading'
                className='text-2xl font-bold text-gray-900'
              >
                Personal Projects
              </h2>
            </div>

            <div className='space-y-8'>
              {personalProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} variant='large' />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
