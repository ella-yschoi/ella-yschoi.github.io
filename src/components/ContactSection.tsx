'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const ContactSection = () => {
  const [showCopyModal, setShowCopyModal] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('dev.ella.choi@gmail.com');
      setShowCopyModal(true);
      setTimeout(() => setShowCopyModal(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section
      className='w-full bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-2xl shadow-2xl py-20 px-8 flex flex-col items-center justify-center relative overflow-hidden'
      style={{ minHeight: 300 }}
    >
      {/* Background decorative elements */}
      <motion.div
        className='absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl'
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl'
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className='max-w-4xl mx-auto w-full flex flex-col items-center justify-center relative z-10'>
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let&apos;s Build Something Together
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I&apos;m always excited to collaborate on innovative projects and
            discuss new opportunities. Let&apos;s connect and create something
            extraordinary.
          </motion.p>
        </motion.div>

        <motion.div
          className='flex flex-col sm:flex-row gap-6 w-full max-w-2xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex-1'
          >
            <Link
              href='/contact'
              className='group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold
              hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              <FaEnvelope className='text-lg' />
              <span>Get In Touch</span>
              <motion.span className='group-hover:translate-x-1 transition-transform duration-200'>
                <FaArrowRight />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex-1'
          >
            <Link
              href='https://drive.google.com/file/d/1wqWf9yQujBfU05B9eIO7m7KovRHP6aaz/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold
              hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm'
            >
              <span>View Resume</span>
              <motion.span className='group-hover:translate-x-1 transition-transform duration-200'>
                ↗
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className='flex gap-8 mt-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleEmailCopy}
            aria-label='Copy email to clipboard'
            className='text-2xl text-blue-200 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-white/10 relative cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
            {showCopyModal && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-900 text-sm rounded-md whitespace-nowrap shadow-lg z-50'
              >
                Copied to clipboard!
              </motion.div>
            )}
          </motion.button>
          <motion.a
            href='https://github.com/ella-yschoi'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-2xl text-blue-200 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-white/10'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href='https://linkedin.com/in/ella-yschoi'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-2xl text-blue-200 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-white/10'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
