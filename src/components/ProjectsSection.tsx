'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    slug: 'vience-datahub',
    title: 'VIENCE DataHub',
    description:
      'A pathology data platform built with React and TypeScript. It supports the visualization of over 1,000 SVS files and features a high-resolution image viewer based on OpenSeadragon. Manages various data types including folders, datasets, and models, and provides an efficient data workflow through a real-time progress tracking system.',
    image: '/images/project/datahub_desktop_lightmode.png',
    tech: ['React', 'TypeScript', 'Vite'],
  },
  {
    slug: 'vience-workspace',
    title: 'VIENCE Workspace',
    description:
      'A visual programming platform based on Rete.js, enabling users to construct data analysis workflows via a drag-and-drop node editor. It offers diverse node types for data selection, image processing, patch generation, and custom tasks, while supporting real-time data flow execution and result visualization. An efficient research environment was built through workspace management, a template system, and collaboration features.',
    image: '/images/project/workspace_viewer_lightmode.png',
    tech: ['React', 'TypeScript', 'Vite'],
  },
  {
    slug: 'datepicker-calendar',
    title: 'Simple DatePicker Calendar',
    description:
      'Developed and published a fully customizable React date selection component to npm that complies with WCAG 2.1 AA accessibility standards, applies Headless UI patterns for design system flexibility, and has been continuously improved through 10 patch updates and 1 minor update based on feedback from over 20 developers.',
    image: '/images/project/calendar-thumbnail.jpeg',
    tech: ['React', 'TypeScript', 'Vite'],
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
        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
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
