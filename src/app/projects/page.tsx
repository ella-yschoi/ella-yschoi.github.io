import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    slug: 'vience-datahub',
    title: 'VIENCE DataHub',
    description:
      'A pathology data platform built with React and TypeScript. It supports the visualization of over 1,000 SVS files and features a high-resolution image viewer based on OpenSeadragon. Manages various data types including folders, datasets, and models, and provides an efficient data workflow through a real-time progress tracking system.',
    image: '/images/project/datahub_desktop_lightmode.png',
    tech: [
      'React',
      'TypeScript',
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
      'A visual programming platform based on Rete.js, enabling users to construct data analysis workflows via a drag-and-drop node editor. It offers diverse node types for data selection, image processing, patch generation, and custom tasks, while supporting real-time data flow execution and result visualization. An efficient research environment was built through workspace management, a template system, and collaboration features.',
    image: '/images/project/workspace_viewer_lightmode.png',
    tech: [
      'React',
      'TypeScript',
      'Rete.js',
      'OpenSeadragon',
      'Vite',
      'Tailwind CSS',
    ],
  },
  {
    slug: 'datepicker-component',
    title: 'Simple DatePicker Calendar for React',
    description:
      'A customizable date picker component for React published on npm. It features easy date selection and a customizable color scheme to fit any design. Built with a headless UI approach to separate business logic from presentation, this component was iteratively improved through 10 patch releases based on user feedback.',
    image: '/images/project/calendar-thumbnail.jpeg',
    tech: ['React', 'TypeScript', 'Vite'],
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
