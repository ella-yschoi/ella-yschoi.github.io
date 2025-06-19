import Link from 'next/link';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
}

const ProjectCard = ({
  slug,
  title,
  description,
  image,
  tech,
}: ProjectCardProps) => (
  <div className='group bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 p-4 transition-all duration-200 hover:-translate-y-1'>
    <div className='h-36 flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden'>
      {image ? (
        <img src={image} alt={title} className='object-contain h-full w-full' />
      ) : (
        <span className='text-4xl text-gray-300'>📦</span>
      )}
    </div>
    <h3 className='text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors'>
      {title}
    </h3>
    <p className='text-sm text-gray-600 line-clamp-2 mb-4'>{description}</p>
    {tech && tech.length > 0 && (
      <div className='flex flex-wrap gap-2 mb-4'>
        {tech.map((t) => (
          <span
            key={t}
            className='px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium'
          >
            {t}
          </span>
        ))}
      </div>
    )}
    <Link
      href={`/projects/${slug}`}
      className='inline-flex items-center text-black font-semibold hover:text-gray-700 transition-colors text-sm px-4 py-2 border border-black rounded-full mt-2'
    >
      프로젝트 보기 →
    </Link>
  </div>
);

export default ProjectCard;
