const skillsData = {
  languages: [
    {
      name: 'JavaScript',
      logo: '⚡',
      description:
        'ES6+ 문법을 활용한 모던 JavaScript 개발. 비동기 처리, 모듈 시스템, 함수형 프로그래밍 패턴을 능숙하게 활용합니다.',
    },
    {
      name: 'TypeScript',
      logo: '🔷',
      description:
        '타입 안정성을 통한 안전한 개발 환경 구축. 인터페이스, 제네릭, 유니온 타입을 활용한 견고한 코드 작성.',
    },
    {
      name: 'HTML',
      logo: '🌐',
      description:
        '시맨틱 마크업과 웹 접근성(WCAG AAA)을 고려한 HTML 구조 설계. SEO 최적화와 사용자 경험 향상.',
    },
    {
      name: 'CSS',
      logo: '🎨',
      description:
        '반응형 디자인과 CSS Grid/Flexbox를 활용한 레이아웃 구현. CSS 변수와 모듈화를 통한 유지보수성 향상.',
    },
  ],
  frameworks: [
    {
      name: 'React',
      logo: '⚛️',
      description:
        '함수형 컴포넌트와 Hooks를 활용한 모던 React 개발. 컴포넌트 설계와 상태 관리 최적화.',
    },
    {
      name: 'Vite',
      logo: '🚀',
      description:
        '빠른 개발 서버와 빌드 도구. CRA에서 Vite로 마이그레이션하여 빌드 시간 82% 단축 경험.',
    },
    {
      name: 'Zustand',
      logo: '🐻',
      description:
        '가벼운 상태 관리 라이브러리. 전역/로컬 상태 분리와 복잡도 감소를 통한 애플리케이션 최적화.',
    },
    {
      name: 'TailwindCSS',
      logo: '🎯',
      description:
        '유틸리티 퍼스트 CSS 프레임워크. 빠른 프로토타이핑과 일관된 디자인 시스템 구축.',
    },
    {
      name: 'Styled-Components',
      logo: '💅',
      description:
        'CSS-in-JS 라이브러리. 동적 스타일링과 테마 시스템을 활용한 컴포넌트 기반 스타일링.',
    },
    {
      name: 'D3.js',
      logo: '📊',
      description:
        '데이터 시각화 라이브러리. 복잡한 차트와 인터랙티브 그래프 구현 경험.',
    },
    {
      name: 'OpenSeadragon',
      logo: '🔍',
      description:
        '고해상도 이미지 뷰어 라이브러리. 병리 이미지와 대용량 SVS 파일 시각화 구현.',
    },
  ],
  devops: [
    {
      name: 'GitHub Actions',
      logo: '🤖',
      description:
        'CI/CD 파이프라인 자동화. 빌드, 테스트, 배포 프로세스 자동화로 개발 효율성 향상.',
    },
    {
      name: 'Git',
      logo: '📝',
      description:
        '버전 관리와 협업 도구. 브랜치 전략과 커밋 컨벤션을 통한 체계적인 코드 관리.',
    },
    {
      name: 'Jest',
      logo: '🧪',
      description:
        'JavaScript 테스팅 프레임워크. 단위 테스트와 통합 테스트를 통한 코드 품질 보장.',
    },
    {
      name: 'Vitest',
      logo: '⚡',
      description:
        'Vite 기반 테스팅 도구. 빠른 테스트 실행과 개발 환경 최적화.',
    },
  ],
  principles: [
    {
      name: 'Web Accessibility',
      logo: '♿',
      description:
        'WCAG AAA 가이드라인 준수. 다크 모드 적용과 색상 대비 최적화를 통한 포용적 웹 경험 제공.',
    },
    {
      name: 'Modular Architecture',
      logo: '🧩',
      description:
        '모듈화된 컴포넌트 설계. 재사용성과 유지보수성을 고려한 아키텍처 패턴 적용.',
    },
    {
      name: 'Separation of Concerns',
      logo: '📋',
      description:
        '관심사 분리 원칙. 비즈니스 로직과 UI 로직의 명확한 분리를 통한 코드 품질 향상.',
    },
    {
      name: 'DRY Principle',
      logo: '🔄',
      description:
        '중복 제거 원칙. 공통 로직 추상화와 재사용 가능한 컴포넌트 설계.',
    },
    {
      name: 'Single Responsibility',
      logo: '🎯',
      description:
        '단일 책임 원칙. 각 컴포넌트와 함수가 하나의 명확한 책임만을 가지도록 설계.',
    },
    {
      name: 'TDD',
      logo: '✅',
      description:
        '테스트 주도 개발. 테스트 코드 작성 후 구현하는 방식으로 안정적인 코드 작성.',
    },
  ],
};

const SkillSection = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; logo: string; description: string }[];
}) => (
  <div className='mb-12'>
    <h2 className='text-2xl font-bold mb-6 text-black'>{title}</h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {items.map((item) => (
        <div
          key={item.name}
          className='bg-white rounded-xl shadow border border-gray-100 p-6 hover:shadow-lg transition-shadow'
        >
          <div className='flex items-center gap-3 mb-3'>
            <span className='text-2xl'>{item.logo}</span>
            <h3 className='text-lg font-semibold text-black'>{item.name}</h3>
          </div>
          <p className='text-gray-700 text-sm leading-relaxed'>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default function SkillsPage() {
  return (
    <section className='py-16 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <h1 className='text-3xl font-bold mb-6 text-black'>Skills</h1>
        <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
          I work with a dynamic skills of modern technologies to create
          efficient, scalable, and user-friendly web applications. My goal is to
          build solutions that are not only visually appealing but also
          optimized for performance, accessibility, and maintainability.
        </p>

        <SkillSection title='Languages' items={skillsData.languages} />
        <SkillSection
          title='Frameworks & Libraries'
          items={skillsData.frameworks}
        />
        <SkillSection title='DevOps & Testing' items={skillsData.devops} />
        <SkillSection
          title='Engineering Principles'
          items={skillsData.principles}
        />
      </div>
    </section>
  );
}
