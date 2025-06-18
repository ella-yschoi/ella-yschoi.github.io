import Link from 'next/link';

const projects = [
  {
    slug: 'ai-chatbot',
    title: 'AI 챗봇 웹앱',
    description:
      'OpenAI API를 활용한 대화형 AI 챗봇 웹앱. 실시간 대화 기능과 사용자 친화적인 인터페이스를 제공합니다.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/project1.jpg',
  },
  {
    slug: 'portfolio',
    title: '반응형 포트폴리오',
    description:
      'React와 Tailwind CSS로 만든 개인 포트폴리오 사이트. 모던한 디자인과 완벽한 반응형 레이아웃을 구현했습니다.',
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    image: '/project2.jpg',
  },
  {
    slug: 'todo-app',
    title: 'To-Do List 앱',
    description:
      '간단하고 직관적인 할 일 관리 앱. 상태 관리와 로컬 스토리지를 활용한 효율적인 작업 관리 시스템입니다.',
    tech: ['React', 'Zustand', 'TypeScript'],
    image: '/project3.jpg',
  },
];

const ProjectsSection = () => (
  <section id='projects' className='py-16 px-6 w-full bg-white'>
    <div className='max-w-5xl mx-auto relative'>
      <h2 className='text-3xl font-bold mb-12 text-center text-black'>
        Projects
      </h2>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.slug}
            className='group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-100'
          >
            <div className='h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center'>
              <div className='text-3xl text-gray-600 opacity-60'>📱</div>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors'>
                {project.title}
              </h3>
              <p className='text-gray-600 mb-4 leading-relaxed text-sm'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className='px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className='inline-flex items-center text-black font-semibold hover:text-gray-700 transition-colors text-sm px-4 py-2 border border-black rounded-full mt-2'
              >
                프로젝트 보기 →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-end mt-8'>
        <Link
          href='/projects'
          className='inline-block px-6 py-3 rounded-full bg-black text-white font-semibold shadow hover:bg-gray-800 transition-all duration-300 text-base'
        >
          View All Projects
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
