import IntroSection from '@/components/IntroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import StudySection from '@/components/StudySection';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full bg-gray-50 min-h-screen'>
      <div className='w-full max-w-5xl mx-auto px-4 md:px-6 mt-10'>
        <div id='intro' className='rounded-2xl shadow my-8'>
          <IntroSection />
        </div>
        <div id='skills' className='rounded-2xl shadow my-8'>
          <SkillsSection />
        </div>
        <div id='projects' className='rounded-2xl shadow my-8'>
          <ProjectsSection />
        </div>
        <div id='study' className='rounded-2xl shadow my-8'>
          <StudySection />
        </div>
        <div id='contact' className='rounded-2xl shadow my-8'>
          <ContactSection />
        </div>
        <div className='pb-16'></div>
      </div>
    </main>
  );
}
