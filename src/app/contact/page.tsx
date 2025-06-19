'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { MdCall } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

const contacts = [
  {
    label: 'Email',
    value: 'dev.ella.choi@gmail.com',
    href: 'mailto:dev.ella.choi@gmail.com',
    icon: <FaEnvelope className='text-2xl text-gray-400' />,
    bg: 'bg-white',
  },
  {
    label: 'Book a Call',
    value: 'Book a Call',
    href: '#',
    icon: <MdCall className='text-2xl text-yellow-400' />,
    bg: 'bg-white',
  },
  {
    label: 'GitHub',
    value: 'ella-yschoi',
    href: 'https://github.com/ella-yschoi',
    icon: <FaGithub className='text-2xl text-gray-400' />,
    bg: 'bg-gray-50',
  },
  {
    label: 'LinkedIn',
    value: 'ella-yschoi',
    href: 'https://linkedin.com/in/ella-yschoi',
    icon: <FaLinkedin className='text-2xl text-blue-400' />,
    bg: 'bg-blue-50',
  },
  {
    label: 'Tech Blog in English',
    value: 'medium.com/@ella_choi',
    href: 'https://medium.com/@ella_choi',
    icon: <TbWorld className='text-2xl text-green-400' />,
    bg: 'bg-green-50',
  },
  {
    label: 'Tech Blog in Korean',
    value: 'devella.oopy.io',
    href: 'https://devella.oopy.io/',
    icon: <TbWorld className='text-2xl text-pink-400' />,
    bg: 'bg-pink-50',
  },
];

export default function ContactPage() {
  return (
    <section className='py-16 px-6 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-start justify-between mb-10'>
          <div>
            <h1 className='text-4xl font-bold mb-4 text-black'>
              Let&apos;s Connect!
            </h1>
            <p className='text-lg text-gray-700 max-w-2xl leading-relaxed'>
              Whether it&apos;s brainstorming a new project, discussing design
              optimizations, or just sharing creative insights, I&apos;m always
              excited to collaborate. Reach out to me and let&apos;s craft
              something exceptional — together!
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target='_blank'
              rel='noopener noreferrer'
              className={`flex items-center gap-4 p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 bg-white group ${c.bg}`}
            >
              <div className='flex-shrink-0'>{c.icon}</div>
              <div className='flex-1 min-w-0'>
                <div className='text-base font-medium text-black mb-1'>
                  {c.label}
                </div>
                <div className='text-gray-600 text-sm truncate'>{c.value}</div>
              </div>
              <FiExternalLink className='text-xl text-gray-300 group-hover:text-black transition-colors' />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
