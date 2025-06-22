'use client';
import { use, useState } from 'react';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
}

const projects = {
  'vience-datahub': {
    title: 'VIENCE DataHub – 병리 데이터 시각화 플랫폼',
    subtitle:
      '안내: 현재 closed beta 서비스 중이므로 위의 이미지는 AI를 활용해 재구성하였습니다.',
    description:
      '의료 AI 스타트업 VIENCE에서 병리 데이터를 고해상도로 시각화하고 분석·가공할 수 있는 웹 기반 플랫폼을 React와 TypeScript로 개발함. 대학 병원의 병리학 연구원 및 의료진이 실제 사용하는 서비스로, 1,000개 이상의 SVS(슬라이드 이미지) 파일을 지원하며, 고해상도 뷰어, 접근성 강화 UI 등 핵심 기능을 포함함.',
    tech: [
      'React',
      'TypeScript',
      'OpenSeadragon',
      'Zustand',
      'TailwindCSS',
      'Vitest',
      'Vite',
      'GitHub Actions',
      'Husky',
      'lint-staged',
    ],
    images: [
      '/images/project/datahub_desktop_lightmode.png',
      '/images/project/datahub_desktop_darkmode.png',
      '/images/project/datahub_mobile_darkmode.png',
    ],
    overview: {
      title: '프로젝트 개요',
      content: [
        '의료 AI 스타트업 VIENCE에서 병리 데이터를 고해상도로 시각화하고 분석·가공할 수 있는 웹 기반 플랫폼을 React와 TypeScript로 개발함.',
        '대학 병원의 병리학 연구원 및 의료진이 실제 사용하는 서비스로, 1,000개 이상의 SVS(슬라이드 이미지) 파일을 지원하며, 고해상도 뷰어, 접근성 강화 UI 등 핵심 기능을 포함함.',
      ],
    },
    contributions: [
      {
        category: '프론트엔드 개발',
        items: [
          '병리 이미지를 디렉토리 기반으로 관리할 수 있는 인터페이스 개발',
          'OpenSeadragon 기반 1,000개 이상의 고해상도 병리 이미지(SVS)를 지원하는 클라우드 기반 뷰어 구현',
        ],
      },
      {
        category: 'UI/UX 및 접근성 개선',
        items: [
          '**WCAG AAA** 색상 대비 기준을 준수한 다크모드 및 접근성 강화 UI 설계',
          '데스크탑·모바일 환경 모두 대응하는 반응형 레이아웃 구현',
        ],
      },
      {
        category: '코드베이스 최적화',
        items: [
          'Zustand를 활용한 전역/로컬 상태 관리 구조 도입 → 코드 복잡도 감소',
          '35개 이상의 레거시 패키지 제거, 110개 이상의 보안 취약점 수정',
          'CRA에서 Vite로 마이그레이션 → **빌드 시간 82% 단축** (110초 → 20초)',
        ],
      },
      {
        category: 'DevOps 및 테스트 자동화',
        items: [
          'GitHub Actions를 활용한 **CI/CD 파이프라인 구축** → 배포 단계 자동화 (10단계 → 1단계)',
          '2,200개 이상의 린트, 테스트, 컴파일, 빌드 오류 해결',
          'Husky + lint-staged 도입으로 커밋 시 코드 컨벤션 자동 적용',
          '**Vitest**를 통한 단위 테스트 도입으로 수동 QA를 자동화',
        ],
      },
      {
        category: '협업 및 팀 리딩',
        items: [
          'CTO와 함께 **4주 내 베타 출시** 목표로 스프린트 플래닝 주도',
          '내부 세미나 운영 및 dev wiki 정리 → 기술 결정의 기준과 프로세스 문서화',
        ],
      },
    ],
    result: {
      title: '프로젝트 결과',
      content: [
        '의료진과 병리학 연구원이 실사용 가능한 고해상도 데이터 플랫폼 성공적으로 구축',
        '기술 부채 해소 및 빌드 시간 단축 → 릴리즈 주기 안정화 및 생산성 개선',
        '주니어 개발자로서 기획부터 설계, 개발, 배포까지 **E2E 전 과정을 주도적으로 경험**',
      ],
    },
  },
  'vience-workspace': {
    title: 'VIENCE Workspace – 시각적 프로그래밍 플랫폼',
    subtitle:
      '안내: 현재 closed beta 서비스 중이므로 위의 이미지는 AI를 활용해 재구성하였습니다.',
    description:
      'Rete.js 기반의 시각적 프로그래밍 플랫폼으로, 사용자가 드래그 앤 드롭 방식으로 데이터 분석 워크플로우를 구성할 수 있는 노드 에디터를 개발함. 데이터 선택, 이미지 처리, 패치 생성, 커스텀 작업 등 다양한 노드 타입을 지원하며, 실시간 데이터 플로우 실행과 결과 시각화 기능을 제공함.',
    tech: [
      'React',
      'TypeScript',
      'Rete.js',
      'OpenSeadragon',
      'Vite',
      'TailwindCSS',
      'GitHub Actions',
    ],
    images: [
      '/images/project/workspace_viewer_lightmode.png',
      '/images/project/workspace_patchgeneration_desktop_lightmode.png',
      '/images/project/workspace_dataselector_lightmode.png',
    ],
    overview: {
      title: '프로젝트 개요',
      content: [
        'Rete.js 기반의 시각적 프로그래밍 플랫폼으로, 사용자가 드래그 앤 드롭 방식으로 데이터 분석 워크플로우를 구성할 수 있는 노드 에디터를 개발함.',
        '데이터 선택, 이미지 처리, 패치 생성, 커스텀 작업 등 다양한 노드 타입을 지원하며, 실시간 데이터 플로우 실행과 결과 시각화 기능을 제공함.',
      ],
    },
    contributions: [
      {
        category: '핵심 기능 개발',
        items: [
          'Rete.js를 활용한 드래그 앤 드롭 노드 에디터 구현',
          '데이터 선택, 이미지 처리, 패치 생성 등 다양한 노드 타입 개발',
          '실시간 데이터 플로우 실행 및 결과 시각화 기능 구현',
        ],
      },
      {
        category: '성능 최적화',
        items: [
          'CRA에서 Vite로 마이그레이션 → **빌드 시간 82% 단축** (110초 → 20초)',
          '35개 이상의 레거시 패키지 제거 및 110개 이상의 보안 취약점 수정',
          '메모리 사용량 최적화로 대용량 데이터 처리 성능 향상',
        ],
      },
      {
        category: '개발 환경 개선',
        items: [
          'GitHub Actions를 통한 **CI/CD 파이프라인 구축**',
          '자동화된 빌드, 테스트, 배포 프로세스 구현',
          '주간 릴리즈 사이클 안정화 및 개발 효율성 향상',
        ],
      },
      {
        category: '보안 및 안정성',
        items: [
          'npm audit을 통한 보안 취약점 체계적 분석 및 수정',
          '의존성 관리 개선 및 보안 스캔 자동화',
          '안전하고 안정적인 개발 환경 구축',
        ],
      },
    ],
    result: {
      title: '프로젝트 결과',
      content: [
        '빌드 시간이 82% 단축되어 개발 효율성이 크게 향상',
        '35개 이상의 레거시 패키지 제거와 110개 이상의 보안 취약점 수정으로 안전하고 안정적인 개발 환경 구축',
        'GitHub Actions를 통한 자동화된 CI/CD 파이프라인으로 주간 릴리즈 사이클을 안정화',
        '시각적 프로그래밍 플랫폼으로 연구자들이 더 직관적으로 데이터 분석 워크플로우를 구성할 수 있게 됨',
      ],
    },
  },
  'datepicker-component': {
    title: 'Headless UI DatePicker – React 날짜 선택 컴포넌트',
    subtitle: 'npm 패키지로 배포되어 다른 개발자들이 사용할 수 있도록 공개함.',
    description:
      'Headless UI 패턴을 적용한 완전히 커스터마이징 가능한 React 날짜 선택 컴포넌트를 개발하고 npm에 배포함. 비즈니스 로직과 UI 로직을 명확히 분리하여 다양한 디자인 시스템에 적용할 수 있는 유연성을 제공하며, 20명의 개발자 피드백을 바탕으로 10개의 패치 업데이트를 통해 지속적으로 개선함.',
    tech: [
      'React',
      'TypeScript',
      'Headless UI',
      'npm',
      'Git',
      'Semantic Versioning',
    ],
    images: [
      '/images/project/calendar-thumbnail.jpeg',
      '/images/project/calendar-props.png',
      '/images/project/calendar-npm.png',
    ],
    overview: {
      title: '프로젝트 개요',
      content: [
        'Headless UI 패턴을 적용한 완전히 커스터마이징 가능한 React 날짜 선택 컴포넌트를 개발하고 npm에 배포함.',
        '비즈니스 로직과 UI 로직을 명확히 분리하여 다양한 디자인 시스템에 적용할 수 있는 유연성을 제공하며, 20명의 개발자 피드백을 바탕으로 10개의 패치 업데이트를 통해 지속적으로 개선함.',
      ],
    },
    contributions: [
      {
        category: '핵심 기능 개발',
        items: [
          'Headless UI 기반의 완전히 커스터마이징 가능한 날짜 선택 컴포넌트 구현',
          '비즈니스 로직과 UI 로직의 명확한 분리로 재사용성 극대화',
          '다양한 날짜 형식 지원 및 접근성을 고려한 키보드 네비게이션 구현',
        ],
      },
      {
        category: '패키지 배포 및 관리',
        items: [
          'npm 패키지로 성공적으로 배포하여 재사용성 확보',
          'Semantic 버전 관리로 안정적인 배포 및 업데이트 체계 구축',
          'TypeScript를 통한 타입 안정성 보장으로 개발자 경험 개선',
        ],
      },
      {
        category: '지속적 개선',
        items: [
          '**20명의 개발자**로부터 받은 피드백을 체계적으로 수집 및 분석',
          '**10개의 패치 업데이트**를 통한 지속적인 개선 및 안정성 향상',
          '사용자 요구사항에 따른 반응형 디자인 지원 추가',
        ],
      },
      {
        category: '문서화 및 지원',
        items: [
          '상세한 README 및 API 문서 작성',
          '사용 예제 및 데모 코드 제공',
          'GitHub Issues를 통한 사용자 지원 및 피드백 수집',
        ],
      },
    ],
    result: {
      title: '프로젝트 결과',
      content: [
        'npm에 성공적으로 배포되어 다른 개발자들이 쉽게 사용할 수 있게 됨',
        '20명의 개발자 피드백을 바탕으로 10개의 패치 업데이트를 통해 사용성과 안정성을 크게 향상',
        'Headless UI 패턴을 통해 다양한 디자인 시스템에 적용할 수 있는 유연성을 제공',
        'TypeScript를 통한 타입 안정성으로 개발자 경험을 개선하고 오류 발생률 감소',
      ],
    },
  },
};

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects[slug as keyof typeof projects];
  const [mainImage, setMainImage] = useState(project?.images?.[0] || '');

  if (!project) {
    return (
      <section className='py-16 px-6 w-full bg-gray-50 min-h-screen'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold mb-6 text-black'>
            프로젝트를 찾을 수 없습니다
          </h1>
          <p className='text-gray-600'>
            요청하신 프로젝트가 존재하지 않습니다.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className='py-16 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        {/* 이미지 영역 */}
        <div className='mb-10'>
          <div
            className='rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg mb-4'
            style={{ minHeight: 480 }}
          >
            <Image
              src={mainImage}
              alt={project.title}
              width={800}
              height={480}
              className='object-contain w-full h-[480px]'
            />
          </div>
          <div className='flex gap-4 justify-center'>
            {project.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setMainImage(img)}
                className={`rounded-lg overflow-hidden border-2 ${
                  mainImage === img ? 'border-black' : 'border-transparent'
                } focus:outline-none`}
                style={{ width: 120, height: 80 }}
                aria-label={`썸네일 ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`썸네일 ${idx + 1}`}
                  width={120}
                  height={80}
                  className='object-cover w-full h-full'
                />
              </button>
            ))}
          </div>
        </div>

        <div className='mb-14'>
          <h1 className='text-4xl font-bold mt-14 mb-4 text-black'>
            {project.title}
          </h1>
          {project.subtitle && (
            <div className='flex items-center gap-2 mb-4'>
              <Image src='/info.svg' alt='정보' width={16} height={16} />
              <p className='text-sm text-gray-500'>{project.subtitle}</p>
            </div>
          )}
          <p className='text-lg text-gray-600 mb-6'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className='space-y-12'>
          <section>
            <h2 className='text-2xl font-bold mb-6 text-black border-b border-gray-200 pb-2'>
              {project.overview.title}
            </h2>
            <div className='bg-white rounded-lg p-6 border border-gray-100'>
              <div className='space-y-3'>
                {project.overview.content.map((content, index) => (
                  <p
                    key={index}
                    className='text-gray-700 text-base leading-relaxed'
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold mb-6 text-black border-b border-gray-200 pb-2'>
              주요 기여 및 성과
            </h2>
            <div className='space-y-6'>
              {project.contributions.map((contribution, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg p-6 border border-gray-100'
                >
                  <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                    {contribution.category}
                  </h3>
                  <ul className='list-disc pl-5 text-gray-700 text-base space-y-2'>
                    {contribution.items.map((item, itemIndex) => (
                      <li key={itemIndex} className='leading-relaxed'>
                        {item.replace(/\*\*/g, '')}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold mb-6 text-black border-b border-gray-200 pb-2'>
              {project.result.title}
            </h2>
            <div className='bg-white rounded-lg p-6 border border-gray-100'>
              <ul className='list-disc pl-5 text-gray-700 text-base space-y-2'>
                {project.result.content.map((content, index) => (
                  <li key={index} className='leading-relaxed'>
                    {content.replace(/\*\*/g, '')}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
