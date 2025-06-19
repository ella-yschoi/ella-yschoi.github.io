import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    slug: 'vience-platform',
    title: 'VIENCE DataHub',
    description:
      'React와 TypeScript로 구축한 병리 데이터 플랫폼. 1,000개 이상의 SVS 파일 시각화를 지원하며, 고해상도 다중 이미지 오버레이가 가능한 SVS 이미지 뷰어와 패치 기반 타일 생성기를 개발했습니다.',
    image: '/project1.jpg',
    tech: ['React', 'TypeScript', 'Vite'],
  },
  {
    slug: 'vience-viewer',
    title: 'VIENCE Viewer',
    description:
      'Create React App에서 Vite로 마이그레이션하여 빌드 시간을 82% 단축(110초 → 20초). 35개 이상의 레거시 패키지 제거 및 110개 이상의 보안 취약점 수정으로 안정적인 CI/CD 파이프라인을 구축했습니다.',
    image: '/project3.jpg',
    tech: ['React', 'TypeScript', 'OpenSeadragon'],
  },
  {
    slug: 'datepicker-component',
    title: 'Headless UI DatePicker',
    description:
      'Headless UI 기반의 날짜 선택 컴포넌트를 개발하고 npm에 배포. 비즈니스 로직과 UI를 분리하여 컴포넌트 복잡도를 줄이고 책임을 명확히 했습니다. 20명의 개발자 피드백을 바탕으로 10개의 패치 업데이트를 릴리즈했습니다.',
    image: '/project2.jpg',
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
            I work with a dynamic skills of modern technologies to create
            efficient, scalable, and user-friendly web applications. My goal is
            to build solutions that are not only visually appealing but also
            optimized for performance, accessibility, and maintainability.
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
