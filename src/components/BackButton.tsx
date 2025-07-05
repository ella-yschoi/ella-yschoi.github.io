'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  // 홈페이지에서는 뒤로가기 버튼을 숨김
  if (pathname === '/') {
    return null;
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.button
      onClick={handleBack}
      className='fixed top-24 left-4 z-40 md:hidden bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95'
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      aria-label='Back to previous page'
    >
      <IoArrowBack className='w-5 h-5 text-gray-700' />
    </motion.button>
  );
};

export default BackButton;
