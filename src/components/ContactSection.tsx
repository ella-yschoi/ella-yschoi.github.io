import Link from 'next/link';

const ContactSection = () => (
  <section
    className='relative py-20 px-6 w-full bg-gray-50 flex flex-col items-center justify-center'
    style={{ minHeight: 220 }}
  >
    {/* 3D 그리드 배경 */}
    <div
      aria-hidden
      className='absolute inset-0 w-full h-full pointer-events-none'
    />
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-lg md:text-xl font-medium text-black text-center mb-6'>
        Do you have any project idea you
        <br />
        want to discuss about?
      </h2>
      <Link
        href='/contact'
        className='group mt-2 px-8 py-4 rounded-xl bg-black text-white text-lg font-light shadow-lg
          transition-all flex items-center justify-center relative overflow-hidden'
        style={{ minWidth: 180 }}
      >
        <span className='transition-transform duration-300 group-hover:-translate-x-2'>
          Contact Me
        </span>
        <span
          aria-hidden
          className='absolute right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xl'
        >
          →
        </span>
      </Link>
    </div>
  </section>
);

export default ContactSection;
