import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => (
  <section id='contact' className='py-16 px-6 w-full bg-white'>
    <div className='max-w-3xl mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-8 text-black'>Contact</h2>
      <div className='space-y-6'>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          함께 일하고 싶은 프로젝트가 있으시다면 언제든 연락해 주세요!
        </p>
        <div className='flex gap-6 justify-center'>
          <a
            href='mailto:ella@example.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='이메일'
            className='group flex flex-col items-center gap-3 text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110'
          >
            <div className='w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-gray-200'>
              <FaEnvelope className='text-xl' />
            </div>
            <span className='font-medium text-sm'>이메일</span>
          </a>
          <a
            href='https://github.com/ella-github'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='group flex flex-col items-center gap-3 text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110'
          >
            <div className='w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-gray-200'>
              <FaGithub className='text-xl' />
            </div>
            <span className='font-medium text-sm'>GitHub</span>
          </a>
          <a
            href='https://linkedin.com/in/ella-linkedin'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='group flex flex-col items-center gap-3 text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110'
          >
            <div className='w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-gray-200'>
              <FaLinkedin className='text-xl' />
            </div>
            <span className='font-medium text-sm'>LinkedIn</span>
          </a>
        </div>
        <div className='mt-8 p-4 bg-gray-50 rounded-xl shadow-lg border border-gray-100'>
          <p className='text-base text-gray-700'>
            <span className='font-semibold text-black'>Email:</span>{' '}
            ella@example.com
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
