'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

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

const ViewAllButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className='group inline-flex items-center text-black text-base font-normal transition-all relative'
  >
    <span className='transition-transform duration-300'>{children}</span>
    <span aria-hidden className='ml-2 text-xl'>
      →
    </span>
  </Link>
);

const ProjectsSection = () => (
  <section
    id='projects'
    className='w-full bg-white rounded-2xl shadow py-16 px-0'
  >
    <div className='max-w-5xl mx-auto px-8'>
      <motion.h2
        className='text-3xl font-bold mb-12 text-center text-black'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className='flex justify-end mt-12'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <ViewAllButton href='/projects'>View All Projects</ViewAllButton>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
