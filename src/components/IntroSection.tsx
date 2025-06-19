'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ViewAllButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className='group inline-flex items-center text-black text-base font-normal transition-all relative hover:text-gray-700'
  >
    <span className='transition-transform duration-300 group-hover:translate-x-1'>
      {children}
    </span>
    <span
      aria-hidden
      className='ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1'
    >
      →
    </span>
  </Link>
);

const IntroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      ref={ref}
      className='flex flex-col items-center justify-center min-h-screen bg-white px-6 w-full relative overflow-hidden'
    >
      {/* Parallax Background */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50'
        style={{ y }}
      />

      <motion.div
        className='flex flex-col items-center gap-8 text-center max-w-3xl w-full relative z-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ opacity }}
      >
        <motion.div
          className='space-y-4'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-tight'>
            Ella Choi
          </h1>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-black tracking-wide'>
            Frontend Engineer
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Frontend Engineer who turns complexity to clarity
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href='https://docs.google.com/document/d/1PGVhLg2CTpaw1GtNKO552sTUHiUR5ScKiWiH7xSd9aA/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 text-base w-full sm:w-auto transform hover:scale-105'
          >
            이력서 보기
          </a>
          <Link
            href='#projects'
            className='px-6 py-3 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 text-base w-full sm:w-auto block'
          >
            프로젝트 보기
          </Link>
        </motion.div>

        <motion.div
          className='flex gap-10 mt-4 justify-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href='mailto:dev.ella.choi@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='이메일'
            className='text-3xl text-gray-400 hover:text-black transition-colors duration-200'
          >
            <FaEnvelope />
          </a>
          <a
            href='https://github.com/ella-yschoi'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-3xl text-gray-400 hover:text-black transition-colors duration-200'
          >
            <FaGithub />
          </a>
          <a
            href='https://linkedin.com/in/ella-yschoi'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-3xl text-gray-400 hover:text-black transition-colors duration-200'
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div
          className='mt-12 space-y-4 max-w-2xl'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className='text-lg text-gray-600 leading-relaxed'>
            안녕하세요, 마케팅과 고객 경험 배경을 가진 프론트엔드 엔지니어{' '}
            <span className='font-semibold text-black'>Ella Choi</span>입니다.
          </p>
          <p className='text-base text-gray-600 leading-relaxed'>
            React, TypeScript, 모던 툴링을 활용해 확장 가능하고 접근성 높은 웹
            애플리케이션을 구축하는 것을 전문으로 합니다. 빠르게 성장하는 의료
            AI 스타트업에서 클라우드 기반 플랫폼의 프론트엔드 개발을 주도하고,
            대규모 이미지 시각화 도구를 설계하며, 주간 릴리즈를 가능하게 하는
            CI/CD 파이프라인을 개선했습니다.
          </p>
          <p className='text-base text-gray-600 leading-relaxed'>
            코드 외적으로는 깨끗한 아키텍처나 문서화를 통한 명확성을 중요시하며,
            복잡한 시스템을 이해하기 쉬운 조각으로 나누고, 공유된 언어와 맥락을
            통해 강력한 협업을 육성하는 것을 즐깁니다.
          </p>
          <div className='flex justify-end mt-12'>
            <ViewAllButton href='/about'>View All About Me</ViewAllButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
