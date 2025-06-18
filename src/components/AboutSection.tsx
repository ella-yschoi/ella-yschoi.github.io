const AboutSection = () => (
  <section id='about' className='py-16 px-6 w-full bg-gray-50'>
    <div className='max-w-3xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center text-black'>
        About Me
      </h2>
      <div className='text-center space-y-4'>
        <p className='text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto'>
          안녕하세요, AI와 함께 성장하는 프론트엔드 개발자{' '}
          <span className='font-semibold text-black'>Ella Choi</span>입니다.
        </p>
        <p className='text-base text-gray-600 leading-relaxed max-w-2xl mx-auto'>
          새로운 기술을 배우고, 사용자 경험을 개선하는 데 열정이 있습니다. 미국
          AI 스타트업에서 인턴십을 준비 중이며, 혁신적인 웹 애플리케이션을
          만들어가는 것을 목표로 하고 있습니다.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
