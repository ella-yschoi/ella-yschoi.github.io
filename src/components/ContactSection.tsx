import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => (
  <section id='contact' className='py-16 flex flex-col items-center'>
    <h2 className='text-2xl font-bold mb-4 text-blue-600'>Contact</h2>
    <div className='flex gap-8 mt-4'>
      <a
        href='mailto:ella@example.com'
        aria-label='이메일'
        className='text-3xl text-gray-500 hover:text-blue-600 transition-colors'
      >
        <FaEnvelope />
      </a>
      <a
        href='https://github.com/ella-github'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub'
        className='text-3xl text-gray-500 hover:text-blue-600 transition-colors'
      >
        <FaGithub />
      </a>
      <a
        href='https://linkedin.com/in/ella-linkedin'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        className='text-3xl text-gray-500 hover:text-blue-600 transition-colors'
      >
        <FaLinkedin />
      </a>
    </div>
    <p className='mt-6 text-gray-700 dark:text-gray-300'>
      이메일: ella@example.com
    </p>
  </section>
);

export default ContactSection;
