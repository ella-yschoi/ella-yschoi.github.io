'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiPython,
  SiExpress,
  SiFastapi,
  SiOpenai,
  SiTailwindcss,
} from 'react-icons/si';
import { FaAws, FaSearch } from 'react-icons/fa';
import { MdSmartToy, MdSpeed } from 'react-icons/md';

const skills = [
  {
    name: 'JavaScript',
    icon: <SiJavascript className='text-yellow-400' />,
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className='text-blue-500' />,
    category: 'Frontend',
  },
  {
    name: 'Python',
    icon: <SiPython className='text-blue-500' />,
    category: 'Backend',
  },
  {
    name: 'React',
    icon: <SiReact className='text-sky-400' />,
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className='text-black' />,
    category: 'Frontend',
  },
  {
    name: 'Express.js',
    icon: <SiExpress className='text-black' />,
    category: 'Backend',
  },
  {
    name: 'FastAPI',
    icon: <SiFastapi className='text-emerald-500' />,
    category: 'Backend',
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss className='text-sky-400' />,
    category: 'Frontend',
  },
  {
    name: 'Claude API',
    icon: <MdSmartToy className='text-orange-500' />,
    category: 'AI',
  },
  {
    name: 'OpenAI',
    icon: <SiOpenai className='text-gray-700' />,
    category: 'AI',
  },
  {
    name: 'AI Agent',
    icon: <MdSmartToy className='text-indigo-500' />,
    category: 'AI',
  },
  {
    name: 'SEO',
    icon: <FaSearch className='text-green-500' />,
    category: 'Optimization',
  },
  {
    name: 'Performance',
    icon: <MdSpeed className='text-green-500' />,
    category: 'Optimization',
  },
  {
    name: 'AWS',
    icon: <FaAws className='text-orange-500' />,
    category: 'Cloud',
  },
  {
    name: 'Git',
    icon: <SiGit className='text-gray-400' />,
    category: 'Tools',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const SkillsSection = () => (
  <section
    id='skills'
    className='w-full bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100/50 py-16 px-8 backdrop-blur-sm'
  >
    <div className='max-w-6xl mx-auto'>
      <motion.div
        className='text-center mb-16'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
      </motion.div>

      <motion.div
        className='grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className='flex flex-col items-center gap-3'>
              <div className='text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300'>
                {skill.icon}
              </div>
              <h3 className='text-sm md:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='flex justify-center mt-16'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href='/skills'
            className='px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold
              hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
          >
            View All Skills
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
