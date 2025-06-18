import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const IntroSection = () => (
  <section className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-6 w-full'>
    <div className='flex flex-col items-center gap-12 text-center max-w-4xl w-full'>
      <div className='space-y-6'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight'>
          Ella Choi
        </h1>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium text-blue-600 dark:text-blue-400 tracking-wide'>
          Frontend Developer
        </h2>
        <p className='text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed'>
          AI와 함께 성장하는 프론트엔드 개발자
        </p>
      </div>

      <div className='flex flex-col sm:flex-row gap-6 mt-8 w-full justify-center'>
        <a
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg w-full sm:w-auto transform hover:scale-105'
        >
          이력서 보기
        </a>
        <Link
          href='#projects'
          className='px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg w-full sm:w-auto transform hover:scale-105'
        >
          프로젝트 보기
        </Link>
      </div>

      <div className='flex gap-8 mt-12 justify-center'>
        <a
          href='mailto:ella@example.com'
          aria-label='이메일'
          className='text-3xl text-slate-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110'
        >
          <FaEnvelope />
        </a>
        <a
          href='https://github.com/ella-github'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='text-3xl text-slate-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110'
        >
          <FaGithub />
        </a>
        <a
          href='https://linkedin.com/in/ella-linkedin'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='text-3xl text-slate-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110'
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </section>
);

export default IntroSection;
