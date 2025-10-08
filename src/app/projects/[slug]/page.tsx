import Image from 'next/image';
import ImageGallery from './ImageGallery';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all project slugs
export async function generateStaticParams() {
  return [
    { slug: 'vience-datahub' },
    { slug: 'vience-workspace' },
    { slug: 'peer-connect' },
    { slug: 'github-pulse' },
    { slug: 'datepicker-calendar' },
    { slug: 'personal-portfolio' },
    { slug: 'random-picker' },
  ];
}

const projects = {
  'vience-datahub': {
    title: 'VIENCE - DataHub',
    subtitle:
      'Note: Currently in closed beta service, so the images above have been reconstructed using AI.',
    projectURL: 'https://vience.io/',
    period: 'Sep 2024 - Aug 2025',
    tech: [
      'TypeScript',
      'React',
      'Zustand',
      'TailwindCSS',
      'Vitest',
      'Vite',
      'GitHub Actions',
      'Husky',
      'lint-staged',
    ],
    images: [
      `${prefix}/images/project/datahub-desktop-lightmode.png`,
      `${prefix}/images/project/datahub-desktop-darkmode.png`,
      `${prefix}/images/project/datahub-mobile-darkmode.png`,
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'At medical AI startup VIENCE, developed a cloud-based service for managing and processing large-scale pathology image data using React and TypeScript.',
        'This internal service supports over 1,000 SVS (slide image) files and enables pathology researchers and medical staff at university hospitals to manage files and process data efficiently.',
        'Reduced pathology data preparation time by 90% (6 hours to 30 minutes), enabling demo meetings with 2 major hospitals and generating $1M+ in enterprise leads.',
      ],
    },
    contributions: [
      {
        category: 'Frontend Development',
        items: [
          'Built a file management interface with features such as drag-and-drop upload, folder CRUD operations, and both list and grid views to support seamless organization of large-scale pathology datasets',
          'Implemented performant UI logic to render deeply nested directory structures and dynamically display metadata for large files, ensuring smooth interaction even with thousands of entries',
          'Designed reusable core logic applied across three features, reducing component development time by 67% and requiring no training for medical staff',
        ],
      },
      {
        category: 'UI/UX and Accessibility Improvements',
        items: [
          'Designed a dark mode UI and improved accessibility to meet WCAG AAA color contrast standards',
          'Implemented a responsive layout optimized for both desktop and mobile environments',
        ],
      },
      {
        category: 'Codebase Optimization',
        items: [
          'Refactored global and local state management using Zustand → Reduced complexity and improved maintainability',
          'Removed 35+ deprecated packages and resolved 110+ security issues from legacy code',
          'Migrated from CRA to Vite → Achieved 82% faster build time (from 110s to 20s)',
        ],
      },
      {
        category: 'DevOps and Test Automation',
        items: [
          'Set up a CI/CD pipeline using GitHub Actions → Streamlined deployment process (10 steps → 1 step), reduced CI time from 3 minutes to 50 seconds',
          'Resolved over 2,200 lint, test, compile, and build errors across the codebase',
          'Enforced code style consistency with Husky + lint-staged at commit time, reducing style-related PR comments by 60%',
          'Adopted Vitest to introduce unit tests and reduce reliance on manual QA',
        ],
      },
      {
        category: 'Collaboration and Team Leadership',
        items: [
          'Co-led sprint planning with the CTO to deliver the beta version within 4 weeks, prioritizing and organizing 150+ issues under tight timelines',
          'Conducted 3 internal tech seminars and authored dev wiki documentation to share architectural decisions and recurring issue resolutions, improving team-wide knowledge sharing and onboarding efficiency',
        ],
      },
    ],
    result: {
      title: 'Project Results',
      content: [
        'Launched a high-resolution pathology data service tailored to the needs of medical researchers and practitioners',
        'Resolved legacy technical debt and dramatically improved developer experience and release stability',
        'As a junior developer, gained hands-on experience in the full E2E cycle from planning and design to development and deployment',
        'Enabled stable weekly releases and improved test reliability for all major UI modules by replacing manual QA with Vitest-based unit testing',
      ],
    },
  },

  'vience-workspace': {
    title: 'VIENCE - Workspace',
    subtitle:
      'Note: Currently in closed beta service, so the images above have been reconstructed using AI.',
    projectURL: 'https://vience.io/',
    period: 'Sep 2024 - Aug 2025',
    tech: [
      'TypeScript',
      'React',
      'Rete.js',
      'OpenSeadragon',
      'Vite',
      'TailwindCSS',
      'GitHub Actions',
    ],
    images: [
      `${prefix}/images/project/workspace-viewer-lightmode.png`,
      `${prefix}/images/project/workspace-patchgeneration-desktop-lightmode.png`,
      `${prefix}/images/project/workspace-dataselector-lightmode.png`,
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Developed a visual programming platform that allows researchers to build and customize data processing workflows using a node-based editor built with Rete.js.',
        'Supports interactive configuration of image preprocessing pipelines through components such as data selector, patch generator, and high-resolution slide viewer.',
        'Migrated from CRA to Vite in 2 days (build time 110s → 20s), enabling stable weekly releases and rapid feature delivery.',
      ],
    },
    contributions: [
      {
        category: 'Core Feature Development',
        items: [
          'Implemented a Data Selector node that enables users to browse and select pathology images and metadata stored in the cloud',
          'Developed a Patch Generation node that allows users to define patch size, overlap, and sampling strategies for SVS images',
          'Built a high-resolution pathology slide viewer using OpenSeadragon, supporting zoom, pan, and multi-layer overlays within workflow context',
          'Integrated all nodes into a dynamic drag-and-drop workflow system using Rete.js, enabling real-time data flow updates and step-by-step preview',
        ],
      },
      {
        category: 'UI/UX Enhancements',
        items: [
          'Designed responsive and intuitive node UI components to guide users through complex data preprocessing steps',
          'Enhanced user feedback with loading indicators, real-time node validation, and visual error states',
        ],
      },
      {
        category: 'Workflow Interactivity & State Management',
        items: [
          'Implemented context-aware state syncing between multiple nodes using centralized state logic',
          'Enabled inter-node communication to allow downstream updates (e.g., auto-refreshing viewer after patch generation)',
          'Prioritized 150+ issues with the CTO and launched beta in 4 weeks under tight timelines',
        ],
      },
    ],
    result: {
      title: 'Project Results',
      content: [
        'Successfully built a node-based visual programming interface tailored for pathology data processing',
        'Enabled researchers to intuitively configure data pipelines using Data Selector, Patch Generation, and Viewer nodes',
        'Improved experimentation efficiency by allowing real-time preview and flexible reconfiguration of workflows',
      ],
    },
  },

  'peer-connect': {
    title: 'PeerConnect - WebRTC P2P Video Chat',
    subtitle: undefined,
    projectURL: 'https://peer-cnct.vercel.app',
    period: 'Oct 2025 - Present',
    githubURL: 'https://github.com/ella-yschoi/peer-connect',
    tech: [
      'TypeScript',
      'React',
      'WebRTC',
      'Socket.io',
      'Express',
      'Tailwind CSS',
      'Vite',
    ],
    images: [
      `${prefix}/images/project/peer-connect-home.png`,
      `${prefix}/images/project/peer-connect-waiting.png`,
      `${prefix}/images/project/peer-connect-thumbnail.png`,
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Developed a peer-to-peer video chat application using WebRTC technology with Express and Socket.io for signaling.',
        'Built with TypeScript and React, featuring real-time video communication, room-based connection, and connection status monitoring.',
        'Implemented local and remote stream management with responsive design optimized for desktop and mobile devices.',
      ],
    },
    contributions: [
      {
        category: 'WebRTC Implementation',
        items: [
          'Implemented peer-to-peer video communication using WebRTC APIs for direct browser-to-browser connections',
          'Built signaling server with Express and Socket.io to facilitate connection establishment and room management',
          'Created connection state monitoring with real-time status updates and debugging capabilities',
          'Implemented STUN server configuration for NAT traversal and ICE candidate exchange',
        ],
      },
      {
        category: 'Real-Time Communication Features',
        items: [
          'Developed room-based connection system where users can join with custom room codes',
          'Implemented real-time connection status monitoring with visual indicators for connection quality',
          'Built local and remote stream management with proper media device handling and permissions',
          'Created offer/answer exchange mechanism for WebRTC peer connection establishment',
        ],
      },
      {
        category: 'Frontend Development',
        items: [
          'Built responsive React frontend with TypeScript for type-safe development and better maintainability',
          'Implemented modern UI components using Tailwind CSS with clean, intuitive design patterns',
          'Created responsive layouts that work seamlessly across desktop and mobile devices',
          'Developed custom useWebRTC hook for encapsulating WebRTC logic and state management',
        ],
      },
      {
        category: 'User Experience & Performance',
        items: [
          'Designed intuitive user interface with clear connection status indicators and room management',
          'Implemented proper error handling and user feedback for connection issues and media permissions',
          'Added comprehensive connection state monitoring and debugging capabilities',
          'Created responsive video grid layout with proper stream display and loading states',
        ],
      },
    ],
    result: undefined,
  },

  'github-pulse': {
    title: 'Dashboard - GitHub Pulse',
    subtitle: undefined,
    projectURL: 'https://github-pulse.vercel.app/',
    githubURL: 'https://github.com/ella-yschoi/github-pulse',
    period: 'Sep 2025 - Present',
    tech: [
      'TypeScript',
      'Next.js 15',
      'React 19',
      'Tailwind CSS',
      'NextAuth.js',
      'TanStack Query',
      'Recharts',
      'OpenAI GPT-4o-mini',
      'Express.js',
      'Puppeteer',
      'Vercel OG',
    ],
    images: [
      `${prefix}/images/project/github-pulse-ai.png`,
      `${prefix}/images/project/github-pulse-graph.png`,
      `${prefix}/images/project/github-pulse-report.png`,
      `${prefix}/images/project/github-pulse-share-modal.png`,
      `${prefix}/images/project/github-pulse-share-screen.png`,
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Developed a comprehensive GitHub repository analytics dashboard with OAuth authentication, real-time KPI visualization, AI-powered activity summaries, and automated PDF report generation.',
        'Built as a full-stack monorepo with Next.js frontend and Express.js backend, featuring secure GitHub API integration and intelligent data processing using OpenAI GPT-4o-mini.',
        'Implemented advanced features including interactive charts, shareable OG images, public sharing pages, and automated weekly report generation with Puppeteer.',
      ],
    },
    contributions: [
      {
        category: 'Frontend Development',
        items: [
          'Built responsive dashboard with real-time GitHub data visualization using Recharts and custom React components',
          'Implemented mobile-first responsive design with Tailwind CSS and modern UI patterns',
          'Created interactive KPI cards, line charts, and top repositories table with sparkline visualizations',
          'Developed reusable chart components with TypeScript interfaces for type safety and maintainability',
          'Implemented dynamic brand copy generation based on user metrics and activity patterns',
        ],
      },
      {
        category: 'Authentication & API Integration',
        items: [
          'Integrated NextAuth.js for secure GitHub OAuth authentication with 30-day session management',
          'Implemented TanStack Query for efficient data fetching, caching, and synchronization with GitHub REST API',
          'Built comprehensive data transformation utilities to process raw GitHub data into meaningful analytics',
          'Created robust error handling with graceful degradation for rate limits and API failures',
          'Implemented memory caching with 5-minute TTL for improved performance and reduced API calls',
        ],
      },
      {
        category: 'AI Integration & Analytics',
        items: [
          'Integrated OpenAI GPT-4o-mini API to generate intelligent activity summaries and coding pattern analysis',
          'Implemented automated weekly PDF report generation with comprehensive repository metrics using Puppeteer',
          'Created AI-powered insights that analyze recent issues, pull requests, and commits for productivity trends',
          'Built server-side AI processing with proper input validation and security measures',
          'Developed intelligent filtering to analyze only user-owned repositories excluding forks and organizations',
        ],
      },
      {
        category: 'Backend Development & PDF Generation',
        items: [
          'Built Express.js backend with TypeScript for robust API endpoints and data processing',
          'Implemented Puppeteer-based PDF generation with optimized HTML templates and responsive layouts',
          'Created comprehensive report service for weekly analytics aggregation and data processing',
          'Developed GitHub API service with proper error handling and rate limit management',
          'Implemented file system management for PDF storage and retrieval with proper cleanup',
        ],
      },
      {
        category: 'User Experience & Performance',
        items: [
          'Designed intuitive user interface with clear data hierarchy and interactive elements',
          'Implemented comprehensive loading states, error handling, and user feedback mechanisms',
          'Created shareable links with custom OG image generation using Vercel OG',
          'Built public sharing pages for external GitHub activity showcase',
          'Optimized bundle size and implemented code splitting for faster initial load times',
          'Implemented skeleton UI components for improved perceived performance',
        ],
      },
    ],
    result: undefined,
  },

  'datepicker-calendar': {
    title: 'Open Source - DatePicker Calendar',
    subtitle: undefined,
    projectURL:
      'https://www.npmjs.com/package/react-simple-datepicker-calendar',
    githubURL:
      'https://github.com/ella-yschoi/react-simple-datepicker-calendar',
    period: 'Mar 2024 - Present',
    tech: [
      'TypeScript',
      'React',
      'Styled Components',
      'Vite',
      'Headless UI',
      'WCAG 2.1 AA',
      'Semantic Versioning',
    ],
    images: [
      `${prefix}/images/project/calendar-thumbnail.jpeg`,
      `${prefix}/images/project/calendar-npm.png`,
      `${prefix}/images/project/calendar-features.png`,
      `${prefix}/images/project/calendar-props.png`,
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Built and published a customizable Headless UI–based date picker calendar on npm in 2 weeks. Achieved 200+ weekly downloads, shipped 1 minor and 10 patch updates based on feedback from 20+ developers (avg. 3-day turnaround), and implemented full WCAG 2.1 AA accessibility.',
      ],
    },
    contributions: [
      {
        category: 'Core Feature Development',
        items: [
          'Implemented fully customizable date selection component based on Headless UI patterns',
          'Maximized reusability through clear separation of business logic and UI logic',
          'Added Korean/English multilingual support and localized date formatting',
          'Developed and published the library in just 2 weeks',
        ],
      },
      {
        category: 'Accessibility and Usability Improvements',
        items: [
          'Implemented comprehensive accessibility features compliant with WCAG 2.1 AA standards',
          'Complete keyboard navigation support and screen reader compatibility',
          'High contrast mode support and mobile accessibility enhancement through touch gestures',
          'Built automated accessibility testing tools and validation system',
        ],
      },
      {
        category: 'Package Distribution and Management',
        items: [
          'Successfully published as npm package to ensure reusability',
          'Built stable distribution and update system through Semantic Versioning',
          'Enhanced developer experience by ensuring type safety through TypeScript',
          'Achieved 200+ weekly downloads, 1 minor and 10 patch releases, and 20+ developer feedback with an average 3-day turnaround',
        ],
      },
      {
        category: 'Continuous Improvement and Stabilization',
        items: [
          'Systematically collected and analyzed feedback from over 20 developers',
          'Continuous improvement through 10 patch updates and 1 minor update',
          'Added responsive design support according to user requirements',
        ],
      },
      {
        category: 'Documentation and Support',
        items: [
          'Wrote detailed README and API documentation',
          'Provided usage examples and demo code',
          'Documented comprehensive accessibility guide and testing instructions',
        ],
      },
    ],
    result: {
      title: 'Project Results',
      content: [
        'Released 10 patch updates and 1 minor update based on feedback from over 20 developers, significantly improving usability and stability',
        'Achieved 200+ weekly downloads and rapid feedback cycles (avg. 3 days) from 20+ developers',
      ],
    },
    technicalDetails: {
      title: 'Technical Details',
      content: [
        'Built on React 18.2.0, TypeScript 5.4.2, Styled Components 6.1.8',
        'Fast development environment and optimized production build using Vite',
        'State management and business logic separation through custom hooks',
        'Modularized component structure (containers, units, grids, displays, buttons, inputs)',
        'Automated accessibility testing scripts and validation tools',
      ],
    },
  },

  'personal-portfolio': {
    title: 'Personal Portfolio Website',
    subtitle: undefined,
    projectURL: 'https://ella-yschoi.github.io',
    githubURL: 'https://github.com/ella-yschoi/ella-yschoi.github.io',
    period: 'Jun 2025',
    tech: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'React Icons',
      'WCAG AAA',
    ],
    images: [
      `${prefix}/images/project/portfolio-lighthouse-1.png`,
      `${prefix}/images/project/portfolio-lighthouse-2.png`,
      `${prefix}/images/project/portfolio-mobile.png`,
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Built and deployed an accessible and responsive portfolio with Next.js and React in just 3 days.',
        'Implemented accessibility-first design with WCAG AAA compliance and optimized performance for exceptional user experience.',
        'Achieved Lighthouse scores of 100 in accessibility, best practices, and SEO (performance 99), and fast load performance (First Contentful Paint (FCP) 0.6s, Largest Contentful Paint (LCP) 0.7s, Total Blocking Time (TBT) 10ms, Speed Index 1.1s).',
      ],
    },
    contributions: [
      {
        category: 'Modern Tech Stack Implementation',
        items: [
          'Leveraged Next.js 15.3.3, React 19, and TypeScript 5 for type-safe development',
          'Implemented component-based architecture with reusable components and proper TypeScript interfaces',
          'Used Tailwind CSS 4.1.10 for consistent design system and rapid development',
        ],
      },
      {
        category: 'Accessibility-First Design',
        items: [
          'Implemented WCAG AAA compliance with semantic HTML structure and proper heading hierarchy',
          'Added comprehensive ARIA attributes and keyboard navigation support',
          'Ensured screen reader compatibility with descriptive link text and alt attributes',
        ],
      },
      {
        category: 'Performance & User Experience',
        items: [
          'Optimized Core Web Vitals with efficient image handling and font optimization',
          'Implemented smooth scroll-triggered animations using Framer Motion 12.18.1',
          'Created responsive design that works seamlessly across mobile, tablet, and desktop',
          'Built and deployed the site in just 3 days, achieving Lighthouse scores of 100/100/100/99 and First Contentful Paint (FCP) 0.6s, Largest Contentful Paint (LCP) 0.7s, Total Blocking Time (TBT) 10ms, Speed Index 1.1s',
        ],
      },
      {
        category: 'SEO & Technical Architecture',
        items: [
          'Implemented App Router pattern with dynamic routing for better navigation',
          'Added optimized metadata and structured data for improved search engine visibility',
          'Used next/font for Geist Sans font optimization and improved loading performance',
        ],
      },
    ],
    result: undefined,
    technicalDetails: {
      title: 'Technical Details',
      content: [
        'Built on Next.js 15.3.3, React 19, TypeScript 5, Tailwind CSS 4.1.10',
        'Framer Motion 12.18.1 for smooth scroll-triggered animations',
        'React Icons 5.5.0 for consistent iconography',
        'App Router pattern with dynamic routing and optimized image handling',
        'Geist Sans font optimization with next/font for improved performance',
      ],
    },
  },

  'random-picker': {
    title: 'Open Source - Random Picker',
    subtitle: undefined,
    projectURL: 'https://random-picker-zeta.vercel.app',
    githubURL: 'https://github.com/ella-yschoi/random-picker',
    period: 'Feb 2024',
    tech: ['TypeScript', 'React', 'Vite', 'Emotion', 'React Router'],
    images: [
      `${prefix}/images/project/random-picker-home.png`,
      `${prefix}/images/project/random-picker-pick.png`,
      `${prefix}/images/project/random-picker-waiting.png`,
      `${prefix}/images/project/random-picker-result.png`,
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Built a simple and intuitive random selection tool for fair decision-making with clean UI and smooth user experience.',
        'Developed with React and TypeScript using Vite for fast development and optimized production builds.',
        'Implemented with Emotion for styled components and responsive design that works seamlessly across all devices.',
      ],
    },
    contributions: [
      {
        category: 'Core Feature Development',
        items: [
          'Created participant management system with input validation (max 10 participants, 6 characters each)',
          'Implemented simple random winner selection algorithm using Math.random()',
          'Built multi-step user flow: Settings → Confirmation → Loading → Results',
        ],
      },
      {
        category: 'User Interface & Experience',
        items: [
          'Designed clean, intuitive interface with clear visual feedback and smooth page transitions',
          'Implemented responsive design using Emotion styled components for consistent styling across devices',
          'Added engaging animations and GIFs for loading and celebration states to enhance user experience',
        ],
      },
      {
        category: 'State Management & Routing',
        items: [
          'Implemented React Context API for global theme state management',
          'Used React Router DOM for seamless single-page application navigation',
          'Integrated localStorage for persistent theme preference across sessions',
        ],
      },
      {
        category: 'Performance & Optimization',
        items: [
          'Optimized bundle size with Vite for fast development and efficient production builds',
          'Implemented proper TypeScript typing for better developer experience and code reliability',
          'Used React hooks for component state management and lifecycle handling',
        ],
      },
      {
        category: 'Theme & Visual Design',
        items: [
          'Implemented dark/light mode toggle with persistent user preference storage',
          'Created consistent color scheme using CSS custom properties for theme switching',
          'Added visual feedback with loading animations and celebration effects',
        ],
      },
    ],
    result: undefined,
  },
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  const mainImage = project?.images?.[0] || '';

  if (!project) {
    return (
      <section
        className='py-16 px-4 w-full bg-gray-50 min-h-screen'
        data-scrollable
      >
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold mb-6 text-black'>
            Project Not Found
          </h1>
          <p className='text-gray-600'>The requested project does not exist.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className='py-16 px-4 w-full bg-gray-50 min-h-screen'
      data-scrollable
    >
      <div className='max-w-4xl mx-auto'>
        {/* Image Section */}
        <div className='mb-10'>
          <ImageGallery
            images={project.images}
            title={project.title}
            mainImage={mainImage}
          />
        </div>

        {/* Title, Info, Tags */}
        <div className='mb-14'>
          <div className='flex flex-col md:flex-row md:items-start md:justify-between mt-10 mb-4 gap-4'>
            <div>
              <h1 className='text-3xl md:text-3xl font-bold text-black break-words'>
                {project.title}
              </h1>
              {project.period && (
                <p className='text-sm text-gray-500 font-medium mt-2'>
                  {project.period}
                </p>
              )}
            </div>
            {(project.projectURL || 'githubURL' in project) && (
              <div className='flex gap-3 flex-wrap'>
                {project.projectURL && (
                  <a
                    href={project.projectURL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium text-sm'
                    aria-label='View live demo'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='flex-shrink-0'
                      aria-hidden='true'
                    >
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                    </svg>
                    Live Demo
                  </a>
                )}
                {'githubURL' in project && project.githubURL && (
                  <a
                    href={project.githubURL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium text-sm'
                    aria-label='View source code on GitHub'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='flex-shrink-0'
                      aria-hidden='true'
                    >
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            )}
          </div>
          {project.subtitle && (
            <div className='flex items-center gap-2 mb-4'>
              <Image
                src={`${prefix}/info.svg`}
                alt='Information'
                width={16}
                height={16}
                aria-hidden='true'
              />
              <p className='text-sm text-gray-500'>{project.subtitle}</p>
            </div>
          )}
          <div className='flex flex-wrap gap-2 md:gap-3 mb-6'>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200'
                tabIndex={0}
                aria-label={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Sections */}
        <div className='space-y-12'>
          <section>
            <h2 className='text-2xl font-bold mb-6 text-black border-b border-gray-200 pb-2'>
              {project.overview.title}
            </h2>
            <div className='bg-white rounded-lg p-6 border border-gray-100'>
              <div className='space-y-3'>
                {project.overview.content.map((content, index) => (
                  <p
                    key={index}
                    className='text-gray-700 text-base leading-relaxed'
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold mb-6 text-black border-b border-gray-200 pb-2'>
              Key Contributions and Achievements
            </h2>
            <div className='space-y-6'>
              {project.contributions.map((contribution, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg p-6 border border-gray-100'
                >
                  <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                    {contribution.category}
                  </h3>
                  <ul className='list-disc pl-5 text-gray-700 text-base space-y-2'>
                    {contribution.items.map((item, itemIndex) => (
                      <li key={itemIndex} className='leading-relaxed'>
                        {item.replace(/\*\*/g, '')}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {project.result && (
            <section>
              <h2 className='text-2xl font-bold mb-6 text-black border-b border-gray-200 pb-2'>
                {project.result.title}
              </h2>
              <div className='bg-white rounded-lg p-6 border border-gray-100'>
                <ul className='list-disc pl-5 text-gray-700 text-base space-y-2'>
                  {project.result.content.map((content, index) => (
                    <li key={index} className='leading-relaxed'>
                      {content.replace(/\*\*/g, '')}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
