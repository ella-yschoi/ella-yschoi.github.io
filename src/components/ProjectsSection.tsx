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
      'A cloud-based pathology data management service built with React and TypeScript. Supports efficient organization of large-scale files through features like drag-and-drop upload, folder management, and list/grid view switching. Provides a performant interface for navigating deeply nested directory structures and displaying metadata for high-resolution image datasets.',
    image: `${prefix}/images/project/datahub-desktop-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite'],
  },
  {
    slug: 'vience-workspace',
    title: 'VIENCE - Workspace',
    description:
      'A visual programming platform that enables researchers to construct image processing workflows through a drag-and-drop node editor. Includes core nodes such as Data Selector, Patch Generator, and High-Resolution Viewer, allowing users to configure and preview data pipelines in real time within a single interface.',
    image: `${prefix}/images/project/workspace-viewer-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite'],
  },
  {
    slug: 'peer-connect',
    title: 'P2P Video Chat - PeerConnect',
    description:
      'A peer-to-peer video chat app exploring WebRTC with real-time signaling via Socket.io and an Express server.',
    image: undefined,
    tech: [
      'TypeScript',
      'React',
      'WebRTC',
      'Socket.io',
      'Express',
      'Tailwind CSS',
    ],
    href: 'https://peer-cnct.vercel.app',
  },
  {
    slug: 'github-pulse',
    title: 'Dashboard - GitHub Pulse',
    description:
      'A personal GitHub analytics dashboard with OAuth, OG image sharing, AI activity summaries, charts, and weekly PDF reports.',
    image: undefined,
    tech: [
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'NextAuth.js',
      'TanStack Query',
      'Recharts',
      'OpenAI',
    ],
    href: 'https://github-pulse.vercel.app',
  },
  {
    slug: 'datepicker-calendar',
    title: 'Open Source - DatePicker Calendar',
    description:
      'Developed and published a fully customizable React date selection component to npm that complies with WCAG 2.1 AA accessibility standards, applies Headless UI patterns for design system flexibility, and has been continuously improved through 10 patch updates and 1 minor update based on feedback from over 20 developers.',
    image: `${prefix}/images/project/calendar-thumbnail.jpeg`,
    tech: ['TypeScript', 'React', 'Vite'],
  },
  {
    slug: 'random-picker',
    title: 'Open Source - Random Picker',
    description:
      'A lightweight random selection utility app for quick choices with a simple, accessible UI.',
    image: undefined,
    tech: ['TypeScript', 'React', 'Vite', 'Emotion'],
    href: 'https://random-picker-zeta.vercel.app',
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
