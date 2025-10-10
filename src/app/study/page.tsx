'use client';

import ProjectCard from '../../components/ProjectCard';
import { studyItems } from '../../data/study';
import { motion } from 'framer-motion';

export default function StudyPage() {
  return (
    <section
      className='py-16 w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 min-h-screen'
      data-scrollable
    >
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <motion.div
          className='pt-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'>
            Study
          </h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            Committed to continuous learning, I document and share insights from
            development books, courses, and technical articles to fuel my growth
            as a developer.
          </p>
        </motion.div>
        <div className='grid gap-8'>
          {studyItems.map((item) => (
            <ProjectCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              description={item.description}
              tech={item.pageTech}
              image={item.image}
              variant='large'
              href={item.url}
              buttonText='View More →'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
