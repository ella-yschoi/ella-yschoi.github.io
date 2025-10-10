'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  period?: string;
  variant?: 'small' | 'large';
  buttonText?: string;
  href?: string;
}

const ProjectCard = ({
  slug,
  title,
  description,
  image,
  tech,
  period,
  variant = 'small',
  buttonText = 'View Project →',
  href,
}: ProjectCardProps) => {
  const linkHref = href || `/projects/${slug}`;
  const isExternal = !!href;

  if (variant === 'large') {
    return (
      <motion.div
        className='group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-200/50 p-8 transition-all duration-300 hover:-translate-y-2'
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-1/3 h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden relative border border-gray-200/50'>
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            ) : (
              <span className='text-6xl text-gray-300'>📦</span>
            )}
          </div>
          <div className='w-full md:w-2/3 flex flex-col justify-between min-h-[320px] md:min-h-[320px]'>
            <div>
              <div className='flex items-center justify-between mb-3'>
                <h3 className='text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                  {title}
                </h3>
                {period && (
                  <span className='text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full'>
                    {period}
                  </span>
                )}
              </div>
              <p className='text-gray-600 mb-6 leading-relaxed text-base'>
                {description}
              </p>
              {tech && tech.length > 0 && (
                <div className='flex flex-wrap gap-2 mb-6'>
                  {tech.map((t) => (
                    <span
                      key={t}
                      className='px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={linkHref}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className='inline-flex items-center justify-center text-white font-semibold transition-all text-sm px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full self-start hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
              >
                {buttonText}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Small variant (for homepage)
  return (
    <motion.div
      className='group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-200/50 p-6 transition-all duration-300 hover:-translate-y-2'
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='h-40 flex items-center justify-center mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden relative border border-gray-200/50'>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-500'
          />
        ) : (
          <span className='text-4xl text-gray-300'>📦</span>
        )}
      </div>
      <div className='flex items-center justify-between mb-3'>
        <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
          {title}
        </h3>
        {period && (
          <span className='text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full'>
            {period}
          </span>
        )}
      </div>
      <p className='text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed'>
        {description}
      </p>
      {tech && tech.length > 0 && (
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className='px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200/50'
            >
              {t}
            </span>
          ))}
          {tech.length > 3 && (
            <span className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium'>
              +{tech.length - 3}
            </span>
          )}
        </div>
      )}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={linkHref}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className='inline-flex items-center justify-center text-white font-medium transition-all
            text-sm px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30'
        >
          {buttonText}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
