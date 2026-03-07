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
    section: 'professional' as const,
  },
  {
    slug: 'vience-workspace',
    title: 'VIENCE - Workspace',
    description:
      'Visual programming platform for image processing workflows using React and TypeScript',
    image: `${prefix}/images/project/workspace-viewer-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    period: 'Sep 2024 - Aug 2025',
    section: 'professional' as const,
  },
  {
    slug: 'agentic-dev-pipeline',
    title: 'Agentic Dev Pipeline',
    description:
      'Open-source AI-driven automation skill: code, lint/test/security gates, triangular verification (blind review + discrepancy report), and self-correction loop. Zero human intervention.',
    image: `${prefix}/images/project/agentic-dev-pipeline-thumbnail.png`,
    tech: ['Bash', 'Claude Code', 'GitHub Actions'],
    period: 'Feb 2026 - Present',
    section: 'ai' as const,
  },
  {
    slug: 'renewal-review',
    title: 'Renewal Review',
    description:
      'Insurance renewal review pipeline combining rule-based analysis with LLM (Claude) intelligence. Processes 8,000 policies in under 10 seconds with 23 risk flags.',
    image: `${prefix}/images/project/renewal-review-thumbnail.png`,
    tech: ['Python', 'FastAPI', 'Claude API', 'PostgreSQL', 'Docker'],
    period: 'Feb 2026 - Present',
    section: 'ai' as const,
  },
  {
    slug: 'refridge-go',
    title: 'RefridgeGO',
    description:
      'AI-powered recipe recommendation app. Users select ingredients, cooking tools, and difficulty, then receive personalized recipes via OpenAI. Cross-platform with local history.',
    image: `${prefix}/images/project/refridge-go-thumbnail.png`,
    tech: ['Flutter', 'Dart', 'OpenAI API', 'Vercel'],
    period: 'Jan 2026 - Present',
    section: 'ai' as const,
  },
  {
    slug: 'tailwind-class-grouper',
    title: 'Tailwind Class Grouper',
    description:
      'VSCode extension that organizes Tailwind CSS classes into 13 categorized groups with clsx() output. Published on VSCode Marketplace.',
    image: `${prefix}/images/project/tailwind-class-grouper-thumbnail.png`,
    tech: ['TypeScript', 'VSCode Extension API'],
    period: 'Dec 2025 - Present',
    section: 'opensource' as const,
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
    section: 'opensource' as const,
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
    section: 'opensource' as const,
  },
  {
    slug: 'datepicker-calendar',
    title: 'Open Source - DatePicker Calendar',
    description:
      'Published npm package with 200+ weekly downloads and WCAG 2.1 AA accessibility compliance',
    image: `${prefix}/images/project/calendar-thumbnail.jpeg`,
    tech: ['TypeScript', 'React', 'Vite'],
    period: 'Mar 2024 - Present',
    section: 'opensource' as const,
  },
];

const sections = [
  {
    id: 'professional',
    heading: 'Professional',
    headingId: 'professional-projects-heading',
    color: 'bg-blue-100',
  },
  {
    id: 'ai',
    heading: 'AI & Automation',
    headingId: 'ai-projects-heading',
    color: 'bg-indigo-100',
  },
  {
    id: 'opensource',
    heading: 'Open Source & Side Projects',
    headingId: 'opensource-projects-heading',
    color: 'bg-purple-100',
  },
] as const;

export default function ProjectsPage() {
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
          <h1 className='text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'>
            Projects
          </h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            A collection of projects showcasing responsive web development,
            AI-powered automation, and full-stack engineering, built with a
            focus on performance, clean code, and real-world impact.
          </p>
        </motion.div>

        <div className='space-y-16'>
          {sections.map((section, sectionIndex) => {
            const sectionProjects = projects.filter(
              (p) => p.section === section.id
            );
            if (sectionProjects.length === 0) return null;

            return (
              <motion.section
                key={section.id}
                aria-labelledby={section.headingId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.2 }}
              >
                <div className='flex items-center gap-3 mb-8'>
                  <div className={`p-2 ${section.color} rounded-lg`}></div>
                  <h2
                    id={section.headingId}
                    className='text-2xl font-bold text-gray-900'
                  >
                    {section.heading}
                  </h2>
                </div>

                <div className='space-y-8'>
                  {sectionProjects.map((project, index) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
