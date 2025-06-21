import ProjectCard from '../../components/ProjectCard';
import { studyItems } from '../../data/study';

export default function StudyPage() {
  return (
    <section className='py-16 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <div className='pt-8'>
          <h1 className='text-3xl font-bold mb-6 text-black'>Study</h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            지속적인 학습과 성장을 추구합니다. 개발 서적, 온라인 강의, 기술 문서
            등을 통해 얻은 지식을 기록하고 공유하며, 더 나은 개발자로 거듭나기
            위해 노력합니다.
          </p>
        </div>
        <div className='grid gap-8'>
          {studyItems.map((item) => (
            <ProjectCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              description={item.description}
              tech={item.tech}
              variant='large'
              href={item.url}
              buttonText='더보기 →'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
