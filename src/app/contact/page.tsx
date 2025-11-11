'use client';

import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { IoIosDocument } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
import { motion } from 'framer-motion';

const contacts = [
  {
    label: 'Email',
    value: 'dev.ella.choi@gmail.com',
    href: 'mailto:dev.ella.choi@gmail.com',
    icon: <FaEnvelope className='text-2xl' />,
    bg: 'bg-white/80 backdrop-blur-sm',
    copyable: true,
    color: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    label: 'Resume',
    value: 'View Resume',
    href: 'https://drive.google.com/file/d/1wqWf9yQujBfU05B9eIO7m7KovRHP6aaz/view?usp=sharing',
    icon: <IoIosDocument className='text-2xl' />,
    bg: 'bg-white/80 backdrop-blur-sm',
    copyable: false,
    color: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
  },
  {
    label: 'GitHub',
    value: 'ella-yschoi',
    href: 'https://github.com/ella-yschoi',
    icon: <FaGithub className='text-2xl' />,
    bg: 'bg-white/80 backdrop-blur-sm',
    copyable: false,
    color: 'text-gray-600',
    iconBg: 'bg-gray-100',
  },
  {
    label: 'LinkedIn',
    value: 'ella-yschoi',
    href: 'https://linkedin.com/in/ella-yschoi',
    icon: <FaLinkedin className='text-2xl' />,
    bg: 'bg-white/80 backdrop-blur-sm',
    copyable: false,
    color: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    label: 'Tech Blog in English',
    value: 'medium.com/@ella_choi',
    href: 'https://medium.com/@ella_choi',
    icon: <TbWorld className='text-2xl' />,
    bg: 'bg-white/80 backdrop-blur-sm',
    copyable: false,
    color: 'text-green-600',
    iconBg: 'bg-green-100',
  },
  {
    label: 'Tech Blog in Korean',
    value: 'devella.oopy.io',
    href: 'https://devella.oopy.io/',
    icon: <TbWorld className='text-2xl' />,
    bg: 'bg-white/80 backdrop-blur-sm',
    copyable: false,
    color: 'text-purple-600',
    iconBg: 'bg-purple-100',
  },
];

export default function ContactPage() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('dev.ella.choi@gmail.com');
      setShowEmailModal(true);
      setTimeout(() => setShowEmailModal(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section
      className='py-16 w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 min-h-screen'
      data-scrollable
    >
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <motion.div
          className='pt-8 mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'>
            Let&apos;s Connect!
          </h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            I&apos;m always excited to collaborate on new projects and ideas.
            <br />
            Feel free to reach out. Let&apos;s build something great together!
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {contacts.map((c, index) => {
            const isClickable = !c.copyable;

            const content = (
              <>
                <div className={`flex-shrink-0 p-3 rounded-xl ${c.iconBg}`}>
                  <div className={c.color}>{c.icon}</div>
                </div>
                <div className='flex-1 min-w-0'>
                  <div className='text-lg font-semibold text-gray-900 mb-1'>
                    {c.label}
                  </div>
                  <div className='text-gray-600 text-sm'>{c.value}</div>
                </div>
                {isClickable && (
                  <div className='flex-shrink-0'>
                    <FiExternalLink className='text-xl text-gray-400 group-hover:text-gray-600 transition-colors' />
                  </div>
                )}
              </>
            );

            if (c.label === 'Email') {
              return (
                <motion.div
                  key={c.label}
                  className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg border border-gray-200/50 transition-all hover:shadow-xl hover:-translate-y-2 group ${c.bg} w-full text-left relative cursor-pointer`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {content}
                  <div className='flex-shrink-0 relative'>
                    <button
                      onClick={handleEmailCopy}
                      className='text-xl text-gray-400 group-hover:text-gray-600 transition-colors cursor-pointer p-2 rounded-lg hover:bg-gray-100'
                      aria-label={`Copy ${c.label} to clipboard`}
                    >
                      <FiExternalLink />
                    </button>
                    {showEmailModal && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-900 text-sm rounded-md whitespace-nowrap border border-gray-200 shadow-lg z-50'
                      >
                        Copied to clipboard!
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            }

            if (isClickable) {
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg border border-gray-200/50 transition-all hover:shadow-xl hover:-translate-y-2 group ${c.bg}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={c.label}
                className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg border border-gray-200/50 ${c.bg}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {content}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
