import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    slug: 'vience-datahub',
    title: 'VIENCE DataHub',
    description:
      'A cloud-based pathology data management service built with React and TypeScript. Supports efficient organization of large-scale files through features like drag-and-drop upload, folder management, and list/grid view switching. Provides a performant interface for navigating deeply nested directory structures and displaying metadata for high-resolution image datasets.',
    image: '/images/project/datahub-desktop-lightmode.png',
    tech: [
      'TypeScript',
      'React',
      'Zustand',
      'OpenSeadragon',
      'Vite',
      'Tailwind CSS',
    ],
  },
  {
    slug: 'vience-workspace',
    title: 'VIENCE Workspace',
    description:
      'A visual programming platform that enables researchers to construct image processing workflows through a drag-and-drop node editor. Includes core nodes such as Data Selector, Patch Generator, and High-Resolution Viewer, allowing users to configure and preview data pipelines in real time within a single interface.',
    image: '/images/project/workspace-viewer-lightmode.png',
    tech: [
      'TypeScript',
      'React',
      'Rete.js',
      'OpenSeadragon',
      'Vite',
      'Tailwind CSS',
    ],
  },
  {
    slug: 'datepicker-calendar',
    title: 'Simple DatePicker Calendar for React',
    description:
      'Developed and published a fully customizable React date selection component to npm that complies with WCAG 2.1 AA accessibility standards, applies Headless UI patterns for design system flexibility, and has been continuously improved through 10 patch updates and 1 minor update based on feedback from over 20 developers.',
    image: '/images/project/calendar-thumbnail.jpeg',
    tech: ['TypeScript', 'React', 'Vite', 'Styled Components'],
  },
];

export default function ProjectsPage() {
  return (
    <section className='py-16 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <div className='pt-8'>
          <h1 className='text-3xl font-bold mb-6 text-black'>Projects</h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            This collection of projects showcases my ability to build efficient,
            scalable, and user-centric web applications, with a strong focus on
            clean code, performance, and accessibility.
          </p>
        </div>
        <div className='grid gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} variant='large' />
          ))}
        </div>
      </div>
    </section>
  );
}
