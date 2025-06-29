'use client';
import { use, useState } from 'react';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
}

const projects = {
  'vience-datahub': {
    title: 'VIENCE DataHub – Pathology Data Visualization Platform',
    subtitle:
      'Note: Currently in closed beta service, so the images above have been reconstructed using AI.',
    description:
      'Developed a web-based platform for high-resolution visualization, analysis, and processing of pathology data using React and TypeScript at medical AI startup VIENCE. This is a service actually used by pathology researchers and medical staff at university hospitals, supporting over 1,000 SVS (slide image) files and including core features such as high-resolution viewer and accessibility-enhanced UI.',
    projectURL: undefined,
    tech: [
      'React',
      'TypeScript',
      'OpenSeadragon',
      'Zustand',
      'TailwindCSS',
      'Vitest',
      'Vite',
      'GitHub Actions',
      'Husky',
      'lint-staged',
    ],
    images: [
      '/images/project/datahub_desktop_lightmode.png',
      '/images/project/datahub_desktop_darkmode.png',
      '/images/project/datahub_mobile_darkmode.png',
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Developed a web-based platform for high-resolution visualization, analysis, and processing of pathology data using React and TypeScript at medical AI startup VIENCE.',
        'This is a service actually used by pathology researchers and medical staff at university hospitals, supporting over 1,000 SVS (slide image) files and including core features such as high-resolution viewer and accessibility-enhanced UI.',
      ],
    },
    contributions: [
      {
        category: 'Frontend Development',
        items: [
          'Developed interface for managing pathology images based on directory structure',
          'Implemented cloud-based viewer supporting over 1,000 high-resolution pathology images (SVS) using OpenSeadragon',
        ],
      },
      {
        category: 'UI/UX and Accessibility Improvements',
        items: [
          'Designed dark mode and accessibility-enhanced UI complying with **WCAG AAA** color contrast standards',
          'Implemented responsive layout supporting both desktop and mobile environments',
        ],
      },
      {
        category: 'Codebase Optimization',
        items: [
          'Introduced global/local state management structure using Zustand → Reduced code complexity',
          'Removed over 35 legacy packages and fixed over 110 security vulnerabilities',
          'Migrated from CRA to Vite → **82% reduction in build time** (110 seconds → 20 seconds)',
        ],
      },
      {
        category: 'DevOps and Test Automation',
        items: [
          'Built **CI/CD pipeline** using GitHub Actions → Automated deployment process (10 steps → 1 step)',
          'Resolved over 2,200 lint, test, compile, and build errors',
          'Introduced Husky + lint-staged for automatic code convention application on commit',
          'Introduced unit testing with **Vitest** to automate manual QA',
        ],
      },
      {
        category: 'Collaboration and Team Leadership',
        items: [
          'Led sprint planning with CTO to achieve **beta launch within 4 weeks**',
          'Operated internal seminars and organized dev wiki → Documented technical decision criteria and processes',
        ],
      },
    ],
    result: {
      title: 'Project Results',
      content: [
        'Successfully built a high-resolution data platform usable by medical staff and pathology researchers',
        'Resolved technical debt and reduced build time → Stabilized release cycles and improved productivity',
        'As a junior developer, **experienced the entire E2E process from planning to design, development, and deployment**',
      ],
    },
  },
  'vience-workspace': {
    title: 'VIENCE Workspace – Visual Programming Platform',
    subtitle:
      'Note: Currently in closed beta service, so the images above have been reconstructed using AI.',
    description:
      'Developed a node editor for a visual programming platform based on Rete.js, allowing users to configure data analysis workflows through drag-and-drop. Supports various node types including data selection, image processing, patch generation, and custom operations, providing real-time data flow execution and result visualization features.',
    projectURL: undefined,
    tech: [
      'React',
      'TypeScript',
      'Rete.js',
      'OpenSeadragon',
      'Vite',
      'TailwindCSS',
      'GitHub Actions',
    ],
    images: [
      '/images/project/workspace_viewer_lightmode.png',
      '/images/project/workspace_patchgeneration_desktop_lightmode.png',
      '/images/project/workspace_dataselector_lightmode.png',
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Developed a node editor for a visual programming platform based on Rete.js, allowing users to configure data analysis workflows through drag-and-drop.',
        'Supports various node types including data selection, image processing, patch generation, and custom operations, providing real-time data flow execution and result visualization features.',
      ],
    },
    contributions: [
      {
        category: 'Core Feature Development',
        items: [
          'Implemented drag-and-drop node editor using Rete.js',
          'Developed various node types including data selection, image processing, and patch generation',
          'Implemented real-time data flow execution and result visualization features',
        ],
      },
      {
        category: 'Performance Optimization',
        items: [
          'Migrated from CRA to Vite → **82% reduction in build time** (110 seconds → 20 seconds)',
          'Removed over 35 legacy packages and fixed over 110 security vulnerabilities',
          'Optimized memory usage to improve performance for large-scale data processing',
        ],
      },
      {
        category: 'Development Environment Improvement',
        items: [
          'Built **CI/CD pipeline** using GitHub Actions',
          'Implemented automated build, test, and deployment processes',
          'Stabilized weekly release cycles and improved development efficiency',
        ],
      },
      {
        category: 'Security and Stability',
        items: [
          'Systematically analyzed and fixed security vulnerabilities through npm audit',
          'Improved dependency management and automated security scanning',
          'Built safe and stable development environment',
        ],
      },
    ],
    result: {
      title: 'Project Results',
      content: [
        'Build time reduced by 82%, significantly improving development efficiency',
        'Removed over 35 legacy packages and fixed over 110 security vulnerabilities, building a safe and stable development environment',
        'Automated CI/CD pipeline through GitHub Actions stabilized weekly release cycles',
        'Visual programming platform enabled researchers to configure data analysis workflows more intuitively',
      ],
    },
  },
  'datepicker-calendar': {
    title: 'Simple DatePicker Calendar for React',
    subtitle: undefined,
    projectURL:
      'https://www.npmjs.com/package/react-simple-datepicker-calendar',
    description: undefined,
    tech: [
      'React',
      'TypeScript',
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
        'Developed and published a fully customizable React date selection component to npm that complies with WCAG 2.1 AA accessibility standards, applies Headless UI patterns for design system flexibility, and has been continuously improved through 10 patch updates and 1 minor update based on feedback from over 20 developers.',
      ],
    },
    contributions: [
      {
        category: 'Core Feature Development',
        items: [
          'Implemented fully customizable date selection component based on Headless UI patterns',
          'Maximized reusability through clear separation of business logic and UI logic',
          'Added Korean/English multilingual support and localized date formatting',
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
      ],
    },
  },
};

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects[slug as keyof typeof projects];
  const [mainImage, setMainImage] = useState(project?.images?.[0] || '');

  if (!project) {
    return (
      <section className='py-16 px-6 w-full bg-gray-50 min-h-screen'>
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
    <section className='py-16 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        {/* Image Section */}
        <div className='mb-10'>
          <div
            className='rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg mb-4'
            style={{ minHeight: 480 }}
          >
            <Image
              src={mainImage}
              alt={project.title}
              width={800}
              height={480}
              className='object-contain w-full h-[480px]'
            />
          </div>
          <div className='flex gap-4 justify-center'>
            {project.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setMainImage(img)}
                className={`rounded-lg overflow-hidden border-2 ${
                  mainImage === img ? 'border-black' : 'border-transparent'
                } focus:outline-none`}
                style={{ width: 120, height: 80 }}
                aria-label={`Thumbnail ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={120}
                  height={80}
                  className='object-cover w-full h-full'
                />
              </button>
            ))}
          </div>
        </div>

        <div className='mb-14'>
          <div className='flex items-center justify-between mt-14 mb-4'>
            <h1 className='text-4xl font-bold text-black'>{project.title}</h1>
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
                >
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                </svg>
                View on npm
              </a>
            )}
          </div>
          {project.subtitle && (
            <div className='flex items-center gap-2 mb-4'>
              <Image src='/info.svg' alt='Information' width={16} height={16} />
              <p className='text-sm text-gray-500'>{project.subtitle}</p>
            </div>
          )}
          <p className='text-lg text-gray-600 mb-6'>{project.description}</p>

          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

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
