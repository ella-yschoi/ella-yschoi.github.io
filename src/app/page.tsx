import IntroSection from '@/components/IntroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import StudySection from '@/components/StudySection';

export default function Home() {
  return (
    <main
      className='flex flex-col items-center w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 min-h-screen'
      data-scrollable
    >
      <div className='w-full max-w-6xl mx-auto px-4 md:px-6 mt-10'>
        <div id='intro' className='rounded-2xl shadow-lg my-8 overflow-hidden'>
          <IntroSection />
        </div>
        <div id='skills' className='rounded-2xl shadow-lg my-8 overflow-hidden'>
          <SkillsSection />
        </div>
        <div
          id='projects'
          className='rounded-2xl shadow-lg my-8 overflow-hidden'
        >
          <ProjectsSection />
        </div>
        <div id='study' className='rounded-2xl shadow-lg my-8 overflow-hidden'>
          <StudySection />
        </div>
        <div
          id='contact'
          className='rounded-2xl shadow-lg my-8 overflow-hidden'
        >
          <ContactSection />
        </div>
        <div className='pb-16'></div>
      </div>
    </main>
  );
}
