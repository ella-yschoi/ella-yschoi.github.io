'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IoArrowBack } from 'react-icons/io5';

const navItems = [
  { label: 'Home', href: '/', id: 'intro' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills', id: 'skills' },
  { label: 'Projects', href: '/projects', id: 'projects' },
  { label: 'Study', href: '/study', id: 'study' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Mobile: profile image + Ella Choi on home, back button + Ella Choi on other pages
  const isHome = pathname === '/';

  return (
    <header className='fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50'>
      <nav className='max-w-5xl mx-auto flex items-center justify-between px-4 py-3'>
        {/* Mobile header left */}
        <div className='flex items-center gap-2 md:hidden'>
          {isHome ? (
            <>
              <Image
                src='/images/ella-profile.png'
                alt='Ella Choi Profile'
                width={32}
                height={32}
                className='mr-1 rounded-full bg-white'
                priority
              />
              <span className='font-bold text-xl text-black tracking-tight'>
                Ella Choi
              </span>
            </>
          ) : (
            <>
              <button
                onClick={() => router.back()}
                className='p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all mr-1'
                aria-label='Go back to previous page'
              >
                <IoArrowBack className='w-6 h-6 text-gray-700' />
              </button>
              <span className='font-bold text-xl text-black tracking-tight'>
                Ella Choi
              </span>
            </>
          )}
        </div>

        {/* Desktop header left */}
        <Link
          href='/'
          className='font-bold text-xl text-black tracking-tight hidden md:block'
        >
          Ella Choi
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-6'>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === '/' && pathname === '/') ||
              (pathname.startsWith(item.href) && item.href !== '/');
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-black bg-gray-100'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                  scroll={item.href.startsWith('#') ? false : true}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors'
          aria-label='Toggle menu'
        >
          <div className='w-6 h-6 flex flex-col justify-center items-center relative'>
            <span
              className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-white border-b border-gray-100'
          >
            <ul className='px-4 py-2 space-y-1'>
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === '/' && pathname === '/') ||
                  (pathname.startsWith(item.href) && item.href !== '/');
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-black bg-gray-100'
                          : 'text-gray-700 hover:text-black hover:bg-gray-100'
                      }`}
                      scroll={item.href.startsWith('#') ? false : true}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
