const projects = [
  {
    title: 'AI 챗봇 웹앱',
    description:
      'OpenAI API를 활용한 대화형 AI 챗봇 웹앱. 실시간 대화 기능과 사용자 친화적인 인터페이스를 제공합니다.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    link: '#',
    image: '/project1.jpg',
  },
  {
    title: '반응형 포트폴리오',
    description:
      'React와 Tailwind CSS로 만든 개인 포트폴리오 사이트. 모던한 디자인과 완벽한 반응형 레이아웃을 구현했습니다.',
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    link: '#',
    image: '/project2.jpg',
  },
  {
    title: 'To-Do List 앱',
    description:
      '간단하고 직관적인 할 일 관리 앱. 상태 관리와 로컬 스토리지를 활용한 효율적인 작업 관리 시스템입니다.',
    tech: ['React', 'Zustand', 'TypeScript'],
    link: '#',
    image: '/project3.jpg',
  },
];

const ProjectsSection = () => (
  <section
    id='projects'
    className='py-24 px-6 w-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900'
  >
    <div className='max-w-6xl mx-auto'>
      <h2 className='text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white'>
        Projects
      </h2>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden'
          >
            <div className='h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center'>
              <div className='text-4xl text-blue-600 dark:text-blue-400 opacity-60'>
                📱
              </div>
            </div>
            <div className='p-8'>
              <h3 className='text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                {project.title}
              </h3>
              <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors'
              >
                프로젝트 보기 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
