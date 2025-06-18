import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Stack', href: '/stack' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => (
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
              className='px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-colors'
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

export default Header;
