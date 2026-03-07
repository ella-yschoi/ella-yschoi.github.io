'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const expertiseItems = [
  {
    title: 'Responsive Fixes',
    description:
      'Solving horizontal overflow, layout shifts, and mobile-specific bugs.',
  },
  {
    title: 'Performance Tuning',
    description:
      'Optimizing Core Web Vitals, image loading, and asset delivery.',
  },
  {
    title: 'AI Integration',
    description:
      'Building custom AI agents and automated workflows using Claude Code and Anthropic API.',
  },
  {
    title: 'Full-Stack Solutions',
    description:
      'React, Next.js, Python/FastAPI. Delivering robust systems that work seamlessly with AI tools.',
  },
];

const IntroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

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
              Available for Hire
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
            <span className='text-blue-600 font-medium'>Software Engineer</span>
            <br />
            Performance Optimization & AI-Driven Automation
          </motion.p>
        </motion.div>

        <motion.div
          className='flex flex-col sm:flex-row gap-4 w-full justify-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href='/skills'
              className='group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold
                hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-base w-full sm:w-auto block hover:shadow-lg shadow-blue-500/25'
            >
              <span className='flex items-center justify-center gap-2'>
                View Skills
                <motion.span className='group-hover:translate-x-1 transition-transform duration-200'>
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>
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
          className='mt-8 space-y-8 max-w-2xl'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className='space-y-4'>
            <p className='text-lg text-gray-600 leading-relaxed'>
              I create{' '}
              <span className='text-blue-600 font-medium'>
                high-performance, pixel-perfect web experiences
              </span>{' '}
              and build{' '}
              <span className='text-blue-600 font-medium'>
                AI-powered automation systems
              </span>{' '}
              that save time and costs.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              With 3+ years of marketing experience prior to engineering, I
              understand how{' '}
              <span className='text-blue-600 font-medium'>
                technical performance directly impacts conversion rates and
                business growth.
              </span>
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-left'>
            {expertiseItems.map((item, index) => (
              <motion.div
                key={item.title}
                className='bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 border-l-2 border-l-blue-400'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <h3 className='text-sm font-semibold text-gray-900 mb-1'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-500'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
