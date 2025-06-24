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
  'datepicker-component': {
    title: 'Headless UI DatePicker – React Date Selection Component',
    subtitle: 'Published as an npm package for other developers to use.',
    description:
      'Developed and published a fully customizable React date selection component applying Headless UI patterns to npm. Provides flexibility to apply to various design systems by clearly separating business logic and UI logic, and continuously improved through 10 patch updates based on feedback from 20 developers.',
    tech: [
      'React',
      'TypeScript',
      'Headless UI',
      'npm',
      'Git',
      'Semantic Versioning',
    ],
    images: [
      '/images/project/calendar-thumbnail.jpeg',
      '/images/project/calendar-props.png',
      '/images/project/calendar-npm.png',
    ],
    overview: {
      title: 'Project Overview',
      content: [
        'Developed and published a fully customizable React date selection component applying Headless UI patterns to npm.',
        'Provides flexibility to apply to various design systems by clearly separating business logic and UI logic, and continuously improved through 10 patch updates based on feedback from 20 developers.',
      ],
    },
    contributions: [
      {
        category: 'Core Feature Development',
        items: [
          'Implemented fully customizable date selection component based on Headless UI',
          'Maximized reusability through clear separation of business logic and UI logic',
          'Implemented various date format support and keyboard navigation considering accessibility',
        ],
      },
      {
        category: 'Package Distribution and Management',
        items: [
          'Successfully published as npm package to ensure reusability',
          'Built stable distribution and update system through Semantic versioning',
          'Improved developer experience by ensuring type safety through TypeScript',
        ],
      },
      {
        category: 'Continuous Improvement',
        items: [
          'Systematically collected and analyzed feedback from **20 developers**',
          'Continuous improvement and stability enhancement through **10 patch updates**',
          'Added responsive design support according to user requirements',
        ],
      },
      {
        category: 'Documentation and Support',
        items: [
          'Wrote detailed README and API documentation',
          'Provided usage examples and demo code',
          'Collected user support and feedback through GitHub Issues',
        ],
      },
    ],
    result: {
      title: 'Project Results',
      content: [
        'Successfully published to npm, making it easy for other developers to use',
        'Significantly improved usability and stability through 10 patch updates based on feedback from 20 developers',
        'Provided flexibility to apply to various design systems through Headless UI patterns',
        'Improved developer experience and reduced error rates through type safety with TypeScript',
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
          <h1 className='text-4xl font-bold mt-14 mb-4 text-black'>
            {project.title}
          </h1>
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
