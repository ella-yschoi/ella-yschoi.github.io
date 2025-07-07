'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiGit,
  SiGithubactions,
  SiJest,
  SiVitest,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <SiHtml5 className='text-red-500' /> },
  { name: 'CSS', icon: <SiCss3 className='text-blue-500' /> },
  { name: 'JavaScript', icon: <SiJavascript className='text-yellow-400' /> },
  { name: 'TypeScript', icon: <SiTypescript className='text-blue-500' /> },
  { name: 'React', icon: <SiReact className='text-sky-400' /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className='text-sky-400' /> },
  { name: 'Vite', icon: <SiVite className='text-purple-400' /> },
  { name: 'Next.js', icon: <SiNextdotjs className='text-black' /> },
  { name: 'Git', icon: <SiGit className='text-gray-400' /> },
  {
    name: 'GitHub Actions',
    icon: <SiGithubactions className='text-blue-400' />,
  },
  { name: 'Jest', icon: <SiJest className='text-rose-400' /> },
  { name: 'Vitest', icon: <SiVitest className='text-lime-500' /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

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

const SkillsSection = () => (
  <section
    id='skills'
    className='w-full bg-white rounded-2xl shadow py-16 px-8'
  >
    <div className='max-w-4xl mx-auto'>
      <motion.h2
        className='text-3xl font-bold mb-12 text-center text-black'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <motion.div
        className='grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className='bg-white rounded-lg p-3 md:p-5 text-center border border-gray-100'
            variants={itemVariants}
          >
            <div className='flex items-center justify-center gap-2 mb-2'>
              <div className='text-lg md:text-xl'>{skill.icon}</div>
              <h3 className='text-sm md:text-lg font-light text-black'>
                {skill.name}
              </h3>
            </div>
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
        <ViewAllButton href='/skills'>View All My Skills</ViewAllButton>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
