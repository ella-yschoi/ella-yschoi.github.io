'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToPolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreeToPolicy: e.target.checked }));
  };

  return (
    <section className='py-16 px-6 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold mb-6 text-black'>Let&apos;s Connect!</h1>
          <p className='text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed'>
            Whether it&apos;s brainstorming a new project, discussing design
            optimizations, or just sharing creative insights, I&apos;m always
            excited to collaborate. Reach out to me and let&apos;s craft
            something exceptional — together!
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Info Section */}
          <div className='space-y-8'>
            <div className='bg-white rounded-xl shadow border border-gray-100 p-8'>
              <h2 className='text-2xl font-bold mb-6 text-black'>
                Get in touch
              </h2>

              {/* Email */}
              <div className='mb-6'>
                <div className='flex items-center gap-3 mb-2'>
                  <span className='text-xl'>📧</span>
                  <span className='font-medium text-black'>Email</span>
                </div>
                <a
                  href='mailto:dev.ella.choi@gmail.com'
                  className='text-blue-600 hover:text-blue-800 transition-colors'
                >
                  dev.ella.choi@gmail.com
                </a>
              </div>

              {/* Book a Call */}
              <div className='mb-6'>
                <div className='flex items-center gap-3 mb-2'>
                  <span className='text-xl'>📅</span>
                  <span className='font-medium text-black'>Book a Call</span>
                </div>
                <a
                  href='#'
                  className='inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors'
                >
                  Schedule Meeting
                </a>
              </div>

              {/* Social Links */}
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <span className='text-xl'>💻</span>
                  <a
                    href='https://github.com/ella-yschoi'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-700 hover:text-black transition-colors'
                  >
                    GitHub
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-xl'>📝</span>
                  <a
                    href='https://medium.com/@ella_choi'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-700 hover:text-black transition-colors'
                  >
                    Tech Blog in English
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-xl'>📚</span>
                  <a
                    href='https://devella.oopy.io/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-700 hover:text-black transition-colors'
                  >
                    Tech Blog in Korean
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className='bg-white rounded-xl shadow border border-gray-100 p-8'>
            <h2 className='text-2xl font-bold mb-6 text-black'>Get in touch</h2>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none'
                  required
                />
              </div>

              <div className='flex items-start gap-3'>
                <input
                  type='checkbox'
                  id='agreeToPolicy'
                  name='agreeToPolicy'
                  checked={formData.agreeToPolicy}
                  onChange={handleCheckboxChange}
                  className='mt-1 h-4 w-4 text-black focus:ring-black border-gray-300 rounded'
                  required
                />
                <label
                  htmlFor='agreeToPolicy'
                  className='text-sm text-gray-700'
                >
                  I Agree with Privacy Policy and Cookie Policy
                </label>
              </div>

              <button
                type='submit'
                className='w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
