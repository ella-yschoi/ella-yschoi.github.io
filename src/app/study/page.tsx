import ProjectCard from '../../components/ProjectCard';
import { studyItems } from '../../data/study';

export default function StudyPage() {
  return (
    <section className='py-16 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <div className='pt-8'>
          <h1 className='text-3xl font-bold mb-6 text-black'>Study</h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            Committed to continuous learning, I document and share insights from
            development books, courses, and technical articles to fuel my growth
            as a developer.
          </p>
        </div>
        <div className='grid gap-8'>
          {studyItems.map((item) => (
            <ProjectCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              description={item.description}
              tech={item.pageTech}
              image={item.image}
              variant='large'
              href={item.url}
              buttonText='View More →'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
