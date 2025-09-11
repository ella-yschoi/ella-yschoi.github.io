'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

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
  const [showCopyModal, setShowCopyModal] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('dev.ella.choi@gmail.com');
      setShowCopyModal(true);
      setTimeout(() => setShowCopyModal(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

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
          className='space-y-1'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-tight'>
            Ella Choi
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed'>
            Frontend Engineer bridging UX and business impact
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col sm:flex-row gap-4 w-full justify-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href='https://drive.google.com/file/d/1VghfplJCZzPSLFcMPgcozdjzAbXDZI6D/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 rounded-full border-2 border-black text-black font-semibold
              hover:bg-black hover:text-white transition-all duration-300 text-base w-full sm:w-auto transform hover:scale-105'
          >
            Resume
          </a>
          <Link
            href='#projects'
            className='px-6 py-3 rounded-full border-2 border-black text-black font-semibold
              hover:bg-black hover:text-white transition-all duration-300 text-base w-full sm:w-auto block'
          >
            Projects
          </Link>
        </motion.div>

        <motion.div
          className='flex gap-10 mt-4 justify-center relative'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={handleEmailCopy}
            aria-label='Copy email to clipboard'
            className='text-3xl text-gray-400 hover:text-black transition-colors duration-200 relative cursor-pointer'
          >
            <FaEnvelope />
            {showCopyModal && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-black text-sm rounded-md whitespace-nowrap border border-gray-200 shadow-md z-50'
              >
                Copied to clipboard!
              </motion.div>
            )}
          </button>
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
          className='mt-1 space-y-4 max-w-xl'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className='text-lg text-gray-600 leading-relaxed'>
            I enjoy building products that balance technical excellence with
            real user needs. My work often sits at the intersection of design,
            engineering, and business, turning ideas into practical solutions.
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
