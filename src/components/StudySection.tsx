'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { studyItems } from '../data/study';

const StudySection = () => (
  <section id='study' className='w-full bg-white rounded-2xl shadow py-16 px-8'>
    <div className='max-w-5xl mx-auto'>
      <motion.h2
        className='text-3xl font-bold mb-12 text-center text-black'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Study
      </motion.h2>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {studyItems.map((item) => (
          <ProjectCard
            key={item.slug}
            slug={item.slug}
            title={item.title}
            description={item.description}
            tech={item.tech}
            href={item.url}
            buttonText='더보기 →'
          />
        ))}
      </div>

      <motion.div
        className='flex justify-end mt-12'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          href='/study'
          className='group inline-flex items-center text-black text-base font-normal transition-all relative hover:text-gray-700'
        >
          <span className='transition-transform duration-300 group-hover:translate-x-1'>
            View All Study
          </span>
          <span
            aria-hidden
            className='ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1'
          >
            →
          </span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default StudySection;
