import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const IntroSection = () => (
  <section className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#18181b] dark:to-[#23272f] px-4 w-full'>
    <div className='flex flex-col items-center gap-8 text-center max-w-2xl w-full'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Ella Choi
      </h1>
      <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400'>
        Frontend Developer
      </h2>
      <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-2'>
        AI와 함께 성장하는 프론트엔드 개발자
      </p>
      <div className='flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center'>
        <a
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-base w-full sm:w-auto'
        >
          이력서 보기
        </a>
        <Link
          href='#projects'
          className='px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors text-base w-full sm:w-auto'
        >
          프로젝트 보기
        </Link>
      </div>
      <div className='flex gap-6 mt-6 justify-center'>
        <a
          href='mailto:ella@example.com'
          aria-label='이메일'
          className='text-2xl text-gray-500 hover:text-blue-600 transition-colors'
        >
          <FaEnvelope />
        </a>
        <a
          href='https://github.com/ella-github'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='text-2xl text-gray-500 hover:text-blue-600 transition-colors'
        >
          <FaGithub />
        </a>
        <a
          href='https://linkedin.com/in/ella-linkedin'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='text-2xl text-gray-500 hover:text-blue-600 transition-colors'
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </section>
);

export default IntroSection;
