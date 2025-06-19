'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Vite' },
  { name: 'Zustand' },
  { name: 'TailwindCSS' },
  { name: 'Styled-Components' },
  { name: 'D3.js' },
  { name: 'OpenSeadragon' },
  { name: 'GitHub Actions' },
  { name: 'Jest' },
  { name: 'Vitest' },
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
    className='group inline-flex items-center text-black text-base font-normal transition-all relative'
  >
    <span className='transition-transform duration-300'>{children}</span>
    <span aria-hidden className='ml-2 text-xl'>
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
        className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className='group bg-white rounded-lg p-5 text-center transition-all duration-300 transform border border-gray-100'
            variants={itemVariants}
          >
            <h3 className='text-lg font-light mb-2 text-black'>{skill.name}</h3>
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
