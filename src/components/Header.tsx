'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/', id: 'intro' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects', id: 'projects' },
  { label: 'Skills', href: '/skills', id: 'skills' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const pathname = usePathname();

  useEffect(() => {
    // 홈 페이지가 아닌 경우에만 스크롤 스파이 기능 활성화
    if (pathname !== '/') {
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
    } else {
      // 홈 페이지에서는 항상 'intro' 섹션 활성화
      setActiveSection('intro');
    }
  }, [pathname]);

  const getActiveItem = () => {
    // 홈 페이지에서는 'Home' 메뉴만 활성화
    if (pathname === '/') {
      return 'intro';
    }
    // 다른 페이지에서는 현재 경로에 맞는 메뉴 활성화
    return activeSection;
  };

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
                  item.id && getActiveItem() === item.id
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
