const projects = [
  {
    title: 'AI 챗봇 웹앱',
    description: 'OpenAI API를 활용한 대화형 AI 챗봇 웹앱.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API'],
    link: '#',
  },
  {
    title: '반응형 포트폴리오',
    description: 'React와 Tailwind CSS로 만든 개인 포트폴리오 사이트.',
    tech: ['React', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'To-Do List 앱',
    description: '간단하고 직관적인 할 일 관리 앱.',
    tech: ['React', 'Zustand'],
    link: '#',
  },
];

const ProjectsSection = () => (
  <section
    id='projects'
    className='py-16 flex flex-col items-center bg-gray-50 dark:bg-[#23272f] w-full'
  >
    <h2 className='text-2xl font-bold mb-8 text-blue-600'>Projects</h2>
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl'>
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='block p-6 rounded-xl shadow bg-white dark:bg-[#18181b] hover:shadow-lg transition'
        >
          <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
            {project.title}
          </h3>
          <p className='text-gray-700 dark:text-gray-300 mb-2'>
            {project.description}
          </p>
          <div className='flex flex-wrap gap-2 mt-2'>
            {project.tech.map((t) => (
              <span
                key={t}
                className='px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium dark:bg-blue-900 dark:text-blue-200'
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
