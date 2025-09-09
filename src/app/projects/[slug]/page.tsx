import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all project slugs
export async function generateStaticParams() {
  return [
    { slug: 'vience-datahub' },
    { slug: 'vience-workspace' },
    { slug: 'datepicker-calendar' },
    { slug: 'personal-portfolio' },
  ];
}

const projects = {
  'vience-datahub': {
    title: 'DataHub',
    subtitle:
      'Note: Currently in closed beta service, so the images above have been reconstructed using AI.',
    projectURL: undefined,
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
      '/images/project/datahub-desktop-lightmode.png',
      '/images/project/datahub-desktop-darkmode.png',
      '/images/project/datahub-mobile-darkmode.png',
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'At medical AI startup VIENCE, developed a cloud-based service for managing and processing large-scale pathology image data using React and TypeScript.',
        'This internal service supports over 1,000 SVS files and enables pathology researchers and medical staff at university hospitals to manage files and process data efficiently.',
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
    metrics: {
      title: 'Key Metrics',
      content: [
        '1,000+ SVS files processed and managed',
        '90% reduction in data preparation time (6h → 30m)',
        '$1M+ in enterprise leads generated',
        'CI/CD: 10+ steps → 1, CI time 3m → 50s',
        '2,200+ issues and 110+ security vulnerabilities resolved',
        '67% reduction in component development time',
        '150+ issues prioritized for beta launch in 4 weeks',
        '3 internal tech seminars and dev wiki for onboarding',
      ],
    },
  },

  'vience-workspace': {
    title: 'Workspace',
    subtitle:
      'Note: Currently in closed beta service, so the images above have been reconstructed using AI.',
    projectURL: undefined,
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
      '/images/project/workspace-viewer-lightmode.png',
      '/images/project/workspace-patchgeneration-desktop-lightmode.png',
      '/images/project/workspace-dataselector-lightmode.png',
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
    metrics: {
      title: 'Key Metrics',
      content: [
        'Migrated from CRA to Vite in 2 days (build time 110s → 20s)',
        'Stable weekly releases and rapid feature delivery',
        '150+ issues prioritized for beta launch in 4 weeks',
      ],
    },
  },

  'datepicker-calendar': {
    title: 'Simple DatePicker Calendar for React',
    subtitle: undefined,
    projectURL:
      'https://www.npmjs.com/package/react-simple-datepicker-calendar',
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
      '/images/project/calendar-thumbnail.jpeg',
      '/images/project/calendar-npm.png',
      '/images/project/calendar-features.png',
      '/images/project/calendar-props.png',
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
        'Successfully published to npm, making it easy for other developers to use',
        'Released 10 patch updates and 1 minor update based on feedback from over 20 developers, significantly improving usability and stability',
        'Provided flexibility to apply to various design systems through Headless UI patterns',
        'Ensured comprehensive accessibility for all users through WCAG 2.1 AA standard compliance',
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
    metrics: {
      title: 'Key Metrics',
      content: [
        'Version: v0.2.0 (latest) - 10 patch updates, 1 minor update',
        'Accessibility: 100% compliant with WCAG 2.1 AA standards',
        'Language Support: Korean and English multilingual support',
        'Type Safety: 100% type safety guaranteed through TypeScript strict mode',
        '200+ weekly downloads, 1 minor and 10 patch releases, 20+ developer feedback, avg. 3-day turnaround',
      ],
    },
  },

  'personal-portfolio': {
    title: 'Personal Portfolio Website',
    subtitle: undefined,
    projectURL: undefined,
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
      '/images/project/portfolio-lighthouse-1.png',
      '/images/project/portfolio-lighthouse-2.png',
      '/images/project/portfolio-mobile.png',
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
    result: {
      title: 'Project Results',
      content: [
        'Successfully built a modern, accessible portfolio website that effectively showcases professional skills and projects',
        'Served as a living documentation and demonstration platform for my frontend engineering principles and best practices.',
      ],
    },
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
    metrics: {
      title: 'Key Features',
      content: [
        'Accessibility: WCAG AAA compliance with full keyboard and screen reader support',
        'Performance: Optimized Core Web Vitals and efficient resource loading',
        'Responsive Design: Adaptive layouts for mobile, tablet, and desktop',
        'Modern Stack: Next.js 15, React 19, TypeScript 5, Tailwind CSS 4.1.10',
        'Lighthouse: Accessibility/Best Practices/SEO 100, Performance 99',
        'Core Web Vitals: First Contentful Paint (FCP) 0.6s, Largest Contentful Paint (LCP) 0.7s, Total Blocking Time (TBT) 10ms, Speed Index 1.1s',
        'Built and deployed in 3 days',
      ],
    },
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
          <div className='rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg mb-4 min-h-[240px] md:min-h-[480px]'>
            <Image
              src={mainImage}
              alt={project.title + ' main screenshot'}
              width={800}
              height={480}
              className='object-contain w-full h-[240px] md:h-[480px]'
              priority
            />
          </div>
          <div className='flex gap-2 md:gap-4 justify-center flex-wrap md:flex-nowrap'>
            {project.images.map((img, idx) => (
              <div
                key={img}
                className={`rounded-lg overflow-hidden border-2 ${
                  mainImage === img ? 'border-black' : 'border-transparent'
                }`}
                style={{ width: 120, height: 80 }}
              >
                <Image
                  src={img}
                  alt={project.title + ' thumbnail ' + (idx + 1)}
                  width={120}
                  height={80}
                  className='object-cover w-full h-full'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Title, Info, Tags */}
        <div className='mb-14'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between mt-10 mb-4 gap-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-black break-words'>
              {project.title}
            </h1>
            {project.projectURL && (
              <a
                href={project.projectURL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium text-sm'
                aria-label='View on npm'
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
                View on npm
              </a>
            )}
          </div>
          {project.subtitle && (
            <div className='flex items-center gap-2 mb-4'>
              <Image
                src='/info.svg'
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
        </div>
      </div>
    </section>
  );
}
