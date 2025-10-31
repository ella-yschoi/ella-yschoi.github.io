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
    className='group inline-flex items-center text-gray-700 text-base font-medium transition-all relative hover:text-blue-600'
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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

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
      className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 px-6 w-full relative overflow-hidden'
    >
      {/* Animated Background Elements */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-indigo-100/20'
        style={{ y }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className='absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-xl'
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-xl'
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className='flex flex-col items-center gap-8 text-center max-w-4xl w-full relative z-10'
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
          <motion.div
            className='inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
            <span className='text-sm font-medium text-gray-600'>
              Available for opportunities
            </span>
          </motion.div>

          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight'>
            Ella Choi
          </h1>
          <motion.p
            className='text-lg sm:text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className='text-blue-600 font-medium'>Software Engineer</span>{' '}
            <br />
            Specializing in{' '}
            <span className='text-black font-medium'>zero to one</span> product
            development
          </motion.p>
        </motion.div>

        <motion.div
          className='flex flex-col sm:flex-row gap-4 w-full justify-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href='https://drive.google.com/file/d/1C-IVz2eRtc3PiBOpEPjBxvRZmsusMcRr/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold
              hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-base w-full sm:w-auto transform hover:scale-105 hover:shadow-lg shadow-blue-500/25'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='flex items-center justify-center gap-2'>
              Resume
              <motion.span className='group-hover:translate-x-1 transition-transform duration-200'>
                ↗
              </motion.span>
            </span>
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href='#projects'
              className='px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold
                hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-base w-full sm:w-auto block'
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className='flex gap-8 mt-6 justify-center relative'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            onClick={handleEmailCopy}
            aria-label='Copy email to clipboard'
            className='text-2xl text-gray-400 hover:text-blue-600 transition-colors duration-200 relative cursor-pointer p-2 rounded-full hover:bg-blue-50'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
            {showCopyModal && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap shadow-lg z-50'
              >
                Copied to clipboard!
              </motion.div>
            )}
          </motion.button>
          <motion.a
            href='https://github.com/ella-yschoi'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-2xl text-gray-400 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href='https://linkedin.com/in/ella-yschoi'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-2xl text-gray-400 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        <motion.div
          className='mt-8 space-y-6 max-w-2xl'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className='text-lg text-gray-600 leading-relaxed'>
            I build products that connect{' '}
            <span className='text-indigo-600 font-medium'>user needs</span> with{' '}
            <span className='text-blue-600 font-medium'>technical depth</span>.
            <br />
            My work lives where{' '}
            <span className='text-indigo-600 font-medium'>
              engineering
            </span> and{' '}
            <span className='text-purple-600 font-medium'>business</span> meet,
            <br /> turning early ideas into practical, scalable products.
          </p>
          <div className='flex justify-end mt-8'>
            <ViewAllButton href='/about'>Learn More About Me</ViewAllButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
