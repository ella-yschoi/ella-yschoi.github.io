'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/', id: 'intro' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects', id: 'projects' },
  { label: 'Skills', href: '/skills', id: 'skills' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50'>
      <nav className='max-w-5xl mx-auto flex items-center justify-between px-4 py-3'>
        <Link href='/' className='font-bold text-xl text-black tracking-tight'>
          Ella Choi
        </Link>
        <ul className='flex gap-2 sm:gap-4 md:gap-6'>
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
      </nav>
    </header>
  );
};

export default Header;
