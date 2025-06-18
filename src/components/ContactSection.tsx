import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => (
  <section
    id='contact'
    className='py-24 px-6 w-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900'
  >
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-4xl font-bold mb-16 text-slate-900 dark:text-white'>
        Contact
      </h2>
      <div className='space-y-8'>
        <p className='text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
          함께 일하고 싶은 프로젝트가 있으시다면 언제든 연락해 주세요!
        </p>
        <div className='flex gap-8 justify-center'>
          <a
            href='mailto:ella@example.com'
            aria-label='이메일'
            className='group flex flex-col items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110'
          >
            <div className='w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300'>
              <FaEnvelope className='text-2xl' />
            </div>
            <span className='font-medium'>Email</span>
          </a>
          <a
            href='https://github.com/ella-github'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='group flex flex-col items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110'
          >
            <div className='w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300'>
              <FaGithub className='text-2xl' />
            </div>
            <span className='font-medium'>GitHub</span>
          </a>
          <a
            href='https://linkedin.com/in/ella-linkedin'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='group flex flex-col items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110'
          >
            <div className='w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300'>
              <FaLinkedin className='text-2xl' />
            </div>
            <span className='font-medium'>LinkedIn</span>
          </a>
        </div>
        <div className='mt-12 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg'>
          <p className='text-lg text-slate-700 dark:text-slate-300'>
            <span className='font-semibold text-blue-600 dark:text-blue-400'>
              Email:
            </span>{' '}
            ella@example.com
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
