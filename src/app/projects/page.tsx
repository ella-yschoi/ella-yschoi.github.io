import ProjectCard from '../../components/ProjectCard';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const projects = [
  {
    slug: 'vience-datahub',
    title: 'DataHub',
    description:
      'A cloud-based pathology data management service built with React and TypeScript. Optimized for 1,000+ SVS files and large-scale medical data. Reduced data prep time by 90% (6h→30m), enabling $1M+ in enterprise leads. Automated CI/CD (10+ steps→1, CI 3m→50s), resolved 2,200+ issues, and delivered a no-training UI for medical staff.',
    image: `${prefix}/images/project/datahub-desktop-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite'],
  },
  {
    slug: 'vience-workspace',
    title: 'Workspace',
    description:
      'A visual programming platform for building image processing workflows. Migrated from CRA to Vite in 2 days (build 110s→20s), enabled stable weekly releases, and introduced Vitest-based unit testing to improve reliability. Prioritized 150+ issues and launched beta in 4 weeks.',
    image: `${prefix}/images/project/workspace-viewer-lightmode.png`,
    tech: ['TypeScript', 'React', 'Vite'],
  },
  {
    slug: 'github-pulse',
    title: 'GitHub Pulse',
    description:
      'A GitHub repository analytics dashboard with OAuth login, KPI cards, charts, AI activity summaries, and weekly PDF report generation.',
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
    slug: 'peer-connect',
    title: 'PeerConnect - WebRTC P2P Video Chat',
    description:
      'P2P video chat built with WebRTC, using Express + Socket.io for signaling. Supports local/remote streams, room codes, and real-time connection status.',
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
    slug: 'datepicker-calendar',
    title: 'Simple DatePicker Calendar',
    description:
      'Built and published a customizable Headless UI–based date picker calendar on npm in 2 weeks. Achieved 200+ weekly downloads, shipped 1 minor and 10 patch updates based on feedback from 20+ developers (avg. 3-day turnaround), and implemented full WCAG 2.1 AA accessibility.',
    image: `${prefix}/images/project/calendar-thumbnail.jpeg`,
    tech: ['TypeScript', 'React', 'Vite'],
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description:
      'Built and deployed an accessible and responsive portfolio with Next.js and React in 3 days. Achieved Lighthouse scores of 100 in accessibility, best practices, and SEO (performance 99), and fast load performance (FCP 0.6s, LCP 0.7s, TBT 10ms, Speed Index 1.1s).',
    image: `${prefix}/images/project/portfolio-home.png`,
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'random-picker',
    title: 'Random Picker',
    description:
      'A simple and accessible random selection tool with clean UI and quick interactions.',
    image: undefined,
    tech: ['TypeScript', 'React', 'Vite', 'Emotion'],
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
              className='text-2xl font-medium mb-6 text-black'
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
              className='text-2xl font-medium mb-6 text-black'
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
