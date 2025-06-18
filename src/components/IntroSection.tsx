import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const IntroSection = () => (
  <section className='flex flex-col items-center justify-center min-h-screen bg-white px-6 w-full'>
    <div className='flex flex-col items-center gap-8 text-center max-w-3xl w-full'>
      <div className='space-y-4'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-tight'>
          Ella Choi
        </h1>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-black tracking-wide'>
          Frontend Developer
        </h2>
        <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          AI와 함께 성장하는 프론트엔드 개발자
        </p>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center'>
        <a
          href='/resume.pdf'
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
      </div>

      <div className='flex gap-6 mt-8 justify-center'>
        <a
          href='mailto:ella@example.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='이메일'
          className='text-2xl text-gray-500 hover:text-black transition-colors duration-300 transform hover:scale-110'
        >
          <FaEnvelope />
        </a>
        <a
          href='https://github.com/ella-github'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='text-2xl text-gray-500 hover:text-black transition-colors duration-300 transform hover:scale-110'
        >
          <FaGithub />
        </a>
        <a
          href='https://linkedin.com/in/ella-linkedin'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='text-2xl text-gray-500 hover:text-black transition-colors duration-300 transform hover:scale-110'
        >
          <FaLinkedin />
        </a>
      </div>

      <div className='mt-12 space-y-4 max-w-2xl'>
        <p className='text-lg text-gray-600 leading-relaxed'>
          안녕하세요, AI와 함께 성장하는 프론트엔드 개발자{' '}
          <span className='font-semibold text-black'>Ella Choi</span>입니다.
        </p>
        <p className='text-base text-gray-600 leading-relaxed'>
          새로운 기술을 배우고, 사용자 경험을 개선하는 데 열정이 있습니다. 미국
          AI 스타트업에서 인턴십을 준비 중이며, 혁신적인 웹 애플리케이션을
          만들어가는 것을 목표로 하고 있습니다.
        </p>
      </div>
    </div>
  </section>
);

export default IntroSection;
