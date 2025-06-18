const AboutSection = () => (
  <section id='about' className='py-24 px-6 w-full bg-white dark:bg-slate-900'>
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white'>
        About Me
      </h2>
      <div className='text-center space-y-6'>
        <p className='text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto'>
          안녕하세요, AI와 함께 성장하는 프론트엔드 개발자{' '}
          <span className='font-semibold text-blue-600 dark:text-blue-400'>
            Ella Choi
          </span>
          입니다.
        </p>
        <p className='text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto'>
          새로운 기술을 배우고, 사용자 경험을 개선하는 데 열정이 있습니다. 미국
          AI 스타트업에서 인턴십을 준비 중이며, 혁신적인 웹 애플리케이션을
          만들어가는 것을 목표로 하고 있습니다.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
