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
    title: 'PeerConnect',
    description:
      'WebRTC-based video chat with room codes and real-time connection monitoring',
    image: `${prefix}/images/project/peer-connect-thumbnail.png`,
    tech: [
      'WebRTC',
      'Socket',
      'Express.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
  {
    slug: 'github-pulse',
    title: 'GitHub Pulse',
    description:
      'GitHub activity dashboard with AI-powered insights and automated PDF reports',
    image: `${prefix}/images/project/github-pulse-thumbnail.png`,
    tech: [
      'Next.js',
      'Recharts',
      'OpenAI',
      'Express.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'NextAuth.js',
      'TanStack Query',
    ],
  },
  {
    slug: 'datepicker-calendar',
    title: 'Open Source - DatePicker',
    description:
      'Published npm package with 200+ weekly downloads and WCAG 2.1 AA accessibility compliance',
    image: `${prefix}/images/project/calendar-thumbnail.jpeg`,
    tech: ['TypeScript', 'React', 'Vite'],
  },
  {
    slug: 'random-picker',
    title: 'Random Picker',
    description:
      'Simple random selection tool with clean UI and smooth user experience',
    image: `${prefix}/images/project/random-picker-thumbnail.png`,
    tech: ['TypeScript', 'React', 'Emotion', 'Vite'],
  },
];

const ProjectsSection = () => (
  <section
    id='projects'
    className='w-full bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100/50 py-16 px-0 backdrop-blur-sm'
  >
    <div className='max-w-6xl mx-auto px-8'>
      <motion.div
        className='text-center mb-16'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.p>
      </motion.div>

      <motion.div
        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='group'
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='flex justify-center mt-16'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href='/projects'
            className='px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold
              hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
          >
            View All Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
