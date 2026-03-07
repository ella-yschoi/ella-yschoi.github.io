'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

const ContactSection = () => {
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
            Looking to optimize your web performance or leverage AI to save time
            and costs? Let&apos;s talk.
          </motion.p>
        </motion.div>

        <motion.div
          className='flex justify-center w-full max-w-2xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
