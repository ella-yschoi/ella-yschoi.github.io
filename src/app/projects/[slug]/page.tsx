import { notFound } from 'next/navigation';

const projects = [
  {
    slug: 'ai-chatbot',
    title: 'AI 챗봇 웹앱',
    category: 'Web App',
    client: '개인 프로젝트',
    image: '',
    description:
      'OpenAI API를 활용한 대화형 AI 챗봇 웹앱. 실시간 대화 기능과 사용자 친화적인 인터페이스를 제공합니다.',
    approach: '사용자 중심의 대화 UI와 AI 연동, 실시간 반응성 구현',
    features: ['OpenAI API 연동', '실시간 채팅', '반응형 UI'],
    result: '사용자 피드백 기반으로 지속 개선 중',
  },
  {
    slug: 'portfolio',
    title: '반응형 포트폴리오',
    category: 'Web Design',
    client: '개인 프로젝트',
    image: '',
    description:
      'React와 Tailwind CSS로 만든 개인 포트폴리오 사이트. 모던한 디자인과 완벽한 반응형 레이아웃을 구현했습니다.',
    approach: '심플하고 직관적인 UI, 모바일 최적화',
    features: ['Next.js 기반', 'Tailwind CSS 스타일링', '반응형 레이아웃'],
    result: '미국 인턴십 지원용으로 활용',
  },
  {
    slug: 'todo-app',
    title: 'To-Do List 앱',
    category: 'Web App',
    client: '개인 프로젝트',
    image: '',
    description:
      '간단하고 직관적인 할 일 관리 앱. 상태 관리와 로컬 스토리지를 활용한 효율적인 작업 관리 시스템입니다.',
    approach: '최소한의 UI, 빠른 입력과 관리',
    features: ['Zustand 상태관리', '로컬 스토리지 연동', '모바일 최적화'],
    result: '개인 생산성 향상에 도움',
  },
];

interface Props {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className='py-16 px-6 w-full bg-white min-h-screen'>
      <div className='max-w-3xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-black mb-2'>
            {project.title}
          </h1>
          <div className='flex flex-wrap gap-4 text-sm text-gray-500 mb-4'>
            <span className='px-3 py-1 bg-gray-100 rounded-full'>
              {project.category}
            </span>
            <span className='px-3 py-1 bg-gray-100 rounded-full'>
              {project.client}
            </span>
          </div>
          {project.image && (
            <div className='rounded-xl overflow-hidden mb-6 bg-gray-50 h-56 flex items-center justify-center'>
              <img
                src={project.image}
                alt={project.title}
                className='object-contain h-full w-full'
              />
            </div>
          )}
        </div>
        <div className='space-y-8'>
          <section>
            <h2 className='text-xl font-semibold mb-2 text-black'>
              프로젝트 소개
            </h2>
            <p className='text-gray-700 text-base'>{project.description}</p>
          </section>
          <section>
            <h2 className='text-xl font-semibold mb-2 text-black'>주요 기능</h2>
            <ul className='list-disc pl-5 text-gray-700 text-base'>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className='text-xl font-semibold mb-2 text-black'>접근법</h2>
            <p className='text-gray-700 text-base'>{project.approach}</p>
          </section>
          <section>
            <h2 className='text-xl font-semibold mb-2 text-black'>결과</h2>
            <p className='text-gray-700 text-base'>{project.result}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
