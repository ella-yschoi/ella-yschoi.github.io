'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '/', id: 'intro' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects', id: 'projects' },
  { label: 'Skills', href: '/skills', id: 'skills' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter((item) => item.id)
        .map((item) => item.id!);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50'>
      <nav className='max-w-5xl mx-auto flex items-center justify-between px-4 py-3'>
        <Link href='/' className='font-bold text-xl text-black tracking-tight'>
          Ella Choi
        </Link>
        <ul className='flex gap-2 sm:gap-4 md:gap-6'>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.id && activeSection === item.id
                    ? 'text-black bg-gray-100'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
                scroll={item.href.startsWith('#') ? false : true}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
