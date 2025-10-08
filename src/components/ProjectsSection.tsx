'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const projects = [
  {
    slug: 'vience-datahub',
    title: 'VIENCE - DataHub',
    description:
      'Cloud-based service for managing and processing large-scale pathology image data using React and TypeScript',
    image: `${prefix}/images/project/datahub-desktop-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
  },
  {
    slug: 'vience-workspace',
    title: 'VIENCE - Workspace',
    description:
      'Visual programming platform for image processing workflows using React and TypeScript',
    image: `${prefix}/images/project/workspace-viewer-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
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
  },
  {
    slug: 'datepicker-calendar',
    title: 'Open Source - DatePicker Calendar',
    description:
      'Published npm package with 200+ weekly downloads and WCAG 2.1 AA accessibility compliance',
    image: `${prefix}/images/project/calendar-thumbnail.jpeg`,
    tech: ['TypeScript', 'React', 'Vite'],
  },
  {
    slug: 'random-picker',
    title: 'Open Source - Random Picker',
    description:
      'Simple random selection tool with clean UI and smooth user experience',
    image: `${prefix}/images/project/random-picker-thumbnail.png`,
    tech: ['TypeScript', 'React', 'Vite', 'Emotion'],
  },
];

const ViewAllButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className='group inline-flex items-center text-black text-base font-normal transition-all relative hover:text-gray-700'
  >
    <span className='transition-transform duration-300 group-hover:translate-x-1'>
      {children}
    </span>
    <span
      aria-hidden
      className='ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1'
    >
      →
    </span>
  </Link>
);

const ProjectsSection = () => (
  <section
    id='projects'
    className='w-full bg-white rounded-2xl shadow py-16 px-0'
  >
    <div className='max-w-5xl mx-auto px-8'>
      <motion.h2
        className='text-3xl font-bold mb-12 text-center text-black'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className='grid gap-8 md:grid-cols-2'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className='flex justify-end mt-12'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <ViewAllButton href='/projects'>View All Projects</ViewAllButton>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
