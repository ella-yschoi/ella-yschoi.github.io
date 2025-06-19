'use client';
import { use, useState } from 'react';

interface Props {
  params: Promise<{ slug: string }>;
}

const projects = {
  'vience-platform': {
    title: 'VIENCE 병리 데이터 플랫폼',
    description:
      'React와 TypeScript로 구축한 병리 데이터 플랫폼. 1,000개 이상의 SVS 파일 시각화를 지원하며, 고해상도 다중 이미지 오버레이가 가능한 SVS 이미지 뷰어와 패치 기반 타일 생성기를 개발했습니다.',
    tech: ['React', 'TypeScript', 'OpenSeadragon', 'Zustand', 'TailwindCSS'],
    images: ['/project1.jpg', '/project1-2.jpg', '/project1-3.jpg'],
    features: [
      '1,000개 이상의 SVS 파일 시각화 지원',
      '고해상도 다중 이미지 오버레이 기능',
      '패치 기반 타일 생성기 구현',
      '전역/로컬 상태 분리를 통한 복잡도 감소',
      'WCAG AAA 색상 대비 표준 준수 다크 모드',
      '35개 이상의 레거시 패키지 제거',
      '110개 이상의 보안 취약점 수정',
      '2,200개 이상의 린트, 테스트, 컴파일, 빌드 오류 해결',
      'GitHub Actions를 통한 CI/CD 파이프라인 자동화',
      'CRA에서 Vite로 마이그레이션으로 빌드 시간 82% 단축 (110초 → 20초)',
      '스타일 규칙 자동화로 스타일 관련 PR 코멘트 60% 감소',
      'Husky와 lint-staged를 통한 pre-commit 코드 컨벤션 강제',
      'Vitest 도입으로 수동 QA를 단위 테스트로 대체',
      'CTO와 함께 4주 내 베타 출시를 위한 스프린트 플래닝 주도',
      '내부 세미나 조직 및 dev wiki를 통한 엔지니어링 결정 표준화',
    ],
    approach:
      '병리 데이터의 복잡한 시각화 요구사항을 해결하기 위해 OpenSeadragon 라이브러리를 활용한 고해상도 이미지 뷰어를 구현했습니다. 상태 관리는 Zustand를 도입하여 전역/로컬 상태를 명확히 분리하고, 웹 접근성 향상을 위해 WCAG AAA 가이드라인을 준수하는 다크 모드를 적용했습니다. 개발 효율성 향상을 위해 CRA에서 Vite로 마이그레이션을 진행하고, GitHub Actions를 통한 CI/CD 파이프라인을 구축하여 주간 릴리즈 사이클을 안정화했습니다.',
    result:
      '플랫폼은 1,000개 이상의 SVS 파일을 안정적으로 처리할 수 있게 되었고, 빌드 시간이 82% 단축되어 개발 효율성이 크게 향상되었습니다. 웹 접근성 개선으로 더 많은 사용자가 플랫폼을 이용할 수 있게 되었으며, 자동화된 CI/CD 파이프라인으로 배포 프로세스가 10단계에서 1단계로 단순화되었습니다. 또한 2,200개 이상의 오류를 해결하여 안정적인 개발 환경을 구축했습니다.',
  },
  'datepicker-component': {
    title: 'Headless UI DatePicker',
    description:
      'Headless UI 기반의 날짜 선택 컴포넌트를 개발하고 npm에 배포. 비즈니스 로직과 UI를 분리하여 컴포넌트 복잡도를 줄이고 책임을 명확히 했습니다. 20명의 개발자 피드백을 바탕으로 10개의 패치 업데이트를 릴리즈했습니다.',
    tech: ['React', 'TypeScript', 'Headless UI', 'npm', 'Git'],
    images: ['/project2.jpg', '/project2-2.jpg', '/project2-3.jpg'],
    features: [
      'Headless UI 기반의 완전히 커스터마이징 가능한 날짜 선택 컴포넌트',
      '비즈니스 로직과 UI 로직의 명확한 분리',
      'npm 패키지로 배포하여 재사용성 확보',
      '20명의 개발자로부터 받은 피드백 반영',
      '10개의 패치 업데이트를 통한 지속적인 개선',
      'Semantic 버전 관리로 안정적인 배포',
      'TypeScript를 통한 타입 안정성 보장',
      '다양한 날짜 형식 지원',
      '접근성 고려한 키보드 네비게이션',
      '반응형 디자인 지원',
    ],
    approach:
      'Headless UI 패턴을 적용하여 비즈니스 로직과 UI 로직을 완전히 분리했습니다. 이를 통해 사용자가 원하는 디자인 시스템에 맞게 스타일링할 수 있으면서도, 날짜 선택의 핵심 기능은 재사용할 수 있는 구조를 만들었습니다. 개발 과정에서 20명의 개발자로부터 피드백을 받아 지속적으로 개선했으며, Semantic 버전 관리를 통해 안정적인 배포를 보장했습니다.',
    result:
      'npm에 성공적으로 배포되어 다른 개발자들이 쉽게 사용할 수 있게 되었고, 20명의 개발자 피드백을 바탕으로 10개의 패치 업데이트를 통해 사용성과 안정성을 크게 향상시켰습니다. Headless UI 패턴을 통해 다양한 디자인 시스템에 적용할 수 있는 유연성을 제공했으며, TypeScript를 통한 타입 안정성으로 개발자 경험을 개선했습니다.',
  },
  'vience-migration': {
    title: 'VIENCE CRA → Vite 마이그레이션',
    description:
      'Create React App에서 Vite로 마이그레이션하여 빌드 시간을 82% 단축(110초 → 20초). 35개 이상의 레거시 패키지 제거 및 110개 이상의 보안 취약점 수정으로 안정적인 CI/CD 파이프라인을 구축했습니다.',
    tech: ['Vite', 'GitHub Actions', 'CI/CD', 'Security', 'npm audit'],
    images: ['/project3.jpg', '/project3-2.jpg', '/project3-3.jpg'],
    features: [
      'CRA에서 Vite로 성공적인 마이그레이션',
      '빌드 시간 82% 단축 (110초 → 20초)',
      '35개 이상의 레거시 패키지 제거',
      '110개 이상의 보안 취약점 수정',
      'GitHub Actions를 통한 CI/CD 파이프라인 구축',
      '자동화된 빌드, 테스트, 배포 프로세스',
      '주간 릴리즈 사이클 안정화',
      '개발 환경 최적화',
      '의존성 관리 개선',
      '보안 스캔 자동화',
    ],
    approach:
      '기존 Create React App의 느린 빌드 시간과 보안 취약점 문제를 해결하기 위해 Vite로의 마이그레이션을 계획했습니다. 먼저 npm audit을 통해 보안 취약점을 파악하고, 사용하지 않는 레거시 패키지들을 제거한 후 Vite 설정을 구성했습니다. GitHub Actions를 통해 자동화된 CI/CD 파이프라인을 구축하여 빌드, 테스트, 배포 프로세스를 안정화했습니다.',
    result:
      '빌드 시간이 82% 단축되어 개발 효율성이 크게 향상되었고, 35개 이상의 레거시 패키지 제거와 110개 이상의 보안 취약점 수정으로 안전하고 안정적인 개발 환경을 구축했습니다. GitHub Actions를 통한 자동화된 CI/CD 파이프라인으로 주간 릴리즈 사이클을 안정화했으며, 개발자들이 더 빠르고 안전한 개발 환경에서 작업할 수 있게 되었습니다.',
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
            style={{ minHeight: 320 }}
          >
            <img
              src={mainImage}
              alt={project.title}
              className='object-contain w-full h-[320px]'
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
                <img
                  src={img}
                  alt={`썸네일 ${idx + 1}`}
                  className='object-cover w-full h-full'
                />
              </button>
            ))}
          </div>
        </div>

        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-4 text-black'>
            {project.title}
          </h1>
          <p className='text-lg text-gray-600 mb-6'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200'
              >
                {tech}
              </span>
            ))}
          </div>
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
            <ul className='list-disc pl-5 text-gray-700 text-base space-y-1'>
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
