import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    slug: 'ai-chatbot',
    title: 'AI 챗봇 웹앱',
    description:
      'OpenAI API를 활용한 대화형 AI 챗봇 웹앱. 실시간 대화 기능과 사용자 친화적인 인터페이스를 제공합니다.',
    image: '',
  },
  {
    slug: 'portfolio',
    title: '반응형 포트폴리오',
    description:
      'React와 Tailwind CSS로 만든 개인 포트폴리오 사이트. 모던한 디자인과 완벽한 반응형 레이아웃을 구현했습니다.',
    image: '',
  },
  {
    slug: 'todo-app',
    title: 'To-Do List 앱',
    description:
      '간단하고 직관적인 할 일 관리 앱. 상태 관리와 로컬 스토리지를 활용한 효율적인 작업 관리 시스템입니다.',
    image: '',
  },
];

export default function ProjectsPage() {
  return (
    <section className='py-16 px-6 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-bold mb-10 text-black'>Projects</h1>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
