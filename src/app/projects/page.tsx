import ProjectCard from '../../components/ProjectCard';

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
      'Express',
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
  return (
    <section className='py-16 w-full bg-gray-50 min-h-screen' data-scrollable>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <div className='pt-8'>
          <h1 className='text-3xl font-bold mb-6 text-black'>Projects</h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            This collection of projects showcases my ability to build efficient,
            scalable, and user-centric web applications, with a strong focus on
            clean code, performance, and accessibility.
          </p>
        </div>
        <div className='space-y-12'>
          <section aria-labelledby='professional-projects-heading'>
            <h2
              id='professional-projects-heading'
              className='text-2xl font-medium mb-6 text-gray-700'
            >
              Professional Projects
            </h2>
            <div className='grid gap-8'>
              {projects
                .filter(
                  (p) =>
                    p.slug === 'vience-datahub' || p.slug === 'vience-workspace'
                )
                .map((project) => (
                  <ProjectCard
                    key={project.slug}
                    {...project}
                    variant='large'
                  />
                ))}
            </div>
          </section>

          <section aria-labelledby='personal-projects-heading'>
            <h2
              id='personal-projects-heading'
              className='text-2xl font-medium mb-6 text-gray-700'
            >
              Personal Projects
            </h2>
            <div className='grid gap-8'>
              {projects
                .filter(
                  (p) =>
                    p.slug !== 'vience-datahub' && p.slug !== 'vience-workspace'
                )
                .map((project) => (
                  <ProjectCard
                    key={project.slug}
                    {...project}
                    variant='large'
                  />
                ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
