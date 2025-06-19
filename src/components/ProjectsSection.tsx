import Link from 'next/link';

const projects = [
  {
    slug: 'vience-platform',
    title: 'VIENCE 병리 데이터 플랫폼',
    description:
      'React와 TypeScript로 구축한 병리 데이터 플랫폼. 1,000개 이상의 SVS 파일 시각화를 지원하며, 고해상도 다중 이미지 오버레이가 가능한 SVS 이미지 뷰어와 패치 기반 타일 생성기를 개발했습니다.',
    tech: ['React', 'TypeScript', 'OpenSeadragon', 'Zustand'],
    image: '/project1.jpg',
  },
  {
    slug: 'datepicker-component',
    title: 'Headless UI DatePicker',
    description:
      'Headless UI 기반의 날짜 선택 컴포넌트를 개발하고 npm에 배포. 비즈니스 로직과 UI를 분리하여 컴포넌트 복잡도를 줄이고 책임을 명확히 했습니다. 20명의 개발자 피드백을 바탕으로 10개의 패치 업데이트를 릴리즈했습니다.',
    tech: ['React', 'TypeScript', 'Headless UI', 'npm'],
    image: '/project2.jpg',
  },
  {
    slug: 'vience-migration',
    title: 'VIENCE CRA → Vite 마이그레이션',
    description:
      'Create React App에서 Vite로 마이그레이션하여 빌드 시간을 82% 단축(110초 → 20초). 35개 이상의 레거시 패키지 제거 및 110개 이상의 보안 취약점 수정으로 안정적인 CI/CD 파이프라인을 구축했습니다.',
    tech: ['Vite', 'GitHub Actions', 'CI/CD', 'Security'],
    image: '/project3.jpg',
  },
];

const ProjectsSection = () => (
  <section
    id='projects'
    className='w-full bg-white rounded-2xl shadow py-16 px-0'
  >
    <div className='max-w-5xl mx-auto px-6'>
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
