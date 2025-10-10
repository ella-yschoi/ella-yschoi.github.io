'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { studyItems } from '../data/study';

const StudySection = () => (
  <section
    id='study'
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
          Learning Journey
        </motion.h2>
        <motion.p
          className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
        </motion.p>
      </motion.div>

      <motion.div
        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {studyItems.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='group'
          >
            <ProjectCard
              slug={item.slug}
              title={item.title}
              description={item.description}
              tech={item.sectionTech}
              image={item.image}
              href={item.url}
              buttonText='View More →'
            />
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
            href='/study'
            className='px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold
              hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
          >
            View All Study
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default StudySection;
