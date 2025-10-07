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
    icon: <FaEnvelope className='text-2xl text-gray-400' />,
    bg: 'bg-white',
    copyable: true,
  },
  {
    label: 'Resume',
    value: 'View Resume',
    href: 'https://drive.google.com/file/d/1S81inwvNIDEr-upwlHFzlGAuMZIbPRhr/view?usp=sharing',
    icon: <IoIosDocument className='text-2xl text-gray-500' />,
    bg: 'bg-white',
    copyable: false,
  },
  {
    label: 'GitHub',
    value: 'ella-yschoi',
    href: 'https://github.com/ella-yschoi',
    icon: <FaGithub className='text-2xl text-gray-400' />,
    bg: 'bg-gray-100',
    copyable: false,
  },
  {
    label: 'LinkedIn',
    value: 'ella-yschoi',
    href: 'https://linkedin.com/in/ella-yschoi',
    icon: <FaLinkedin className='text-2xl text-blue-400' />,
    bg: 'bg-blue-50',
    copyable: false,
  },
  {
    label: 'Tech Blog in English',
    value: 'medium.com/@ella_choi',
    href: 'https://medium.com/@ella_choi',
    icon: <TbWorld className='text-2xl text-green-400' />,
    bg: 'bg-green-50',
    copyable: false,
  },
  {
    label: 'Tech Blog in Korean',
    value: 'devella.oopy.io',
    href: 'https://devella.oopy.io/',
    icon: <TbWorld className='text-2xl text-pink-400' />,
    bg: 'bg-pink-50',
    copyable: false,
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
    <section className='py-16 w-full bg-gray-50 min-h-screen' data-scrollable>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <div className='pt-8'>
          <h1 className='text-3xl font-bold mb-6 text-black'>
            Let&apos;s Connect!
          </h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            I&apos;m always excited to collaborate on new projects and ideas.
            <br />
            Feel free to reach out. Let&apos;s build something great together!
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {contacts.map((c) => {
            const isClickable = !c.copyable;

            const content = (
              <>
                <div className='flex-shrink-0'>{c.icon}</div>
                <div className='flex-1 min-w-0'>
                  <div className='text-base font-medium text-black mb-1'>
                    {c.label}
                  </div>
                  <div className='text-gray-600 text-sm truncate'>
                    {c.value}
                  </div>
                </div>
                {isClickable && (
                  <FiExternalLink className='text-xl text-gray-300 group-hover:text-black transition-colors' />
                )}
              </>
            );

            if (c.label === 'Email') {
              return (
                <div
                  key={c.label}
                  className={`flex items-center gap-4 p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 group ${c.bg} w-full text-left relative cursor-pointer`}
                >
                  {content}
                  <div className='flex-shrink-0 relative'>
                    <button
                      onClick={handleEmailCopy}
                      className='text-xl text-gray-300 group-hover:text-black transition-colors cursor-pointer'
                      aria-label={`Copy ${c.label} to clipboard`}
                    >
                      <FiExternalLink />
                    </button>
                    {showEmailModal && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-black text-sm rounded-md whitespace-nowrap border border-gray-200 shadow-md z-50'
                      >
                        Copied to clipboard!
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            }

            if (isClickable) {
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex items-center gap-4 p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 group ${c.bg}`}
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={c.label}
                className={`flex items-center gap-4 p-6 rounded-2xl shadow-sm border border-gray-100 ${c.bg}`}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
