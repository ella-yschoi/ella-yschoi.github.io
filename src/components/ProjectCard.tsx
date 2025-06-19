import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  variant?: 'small' | 'large';
}

const ProjectCard = ({
  slug,
  title,
  description,
  image,
  tech,
  variant = 'small',
}: ProjectCardProps) => {
  if (variant === 'large') {
    return (
      <div className='group bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 p-6 transition-all duration-200 hover:-translate-y-1'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='w-full md:w-1/3 h-64 md:h-80 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden relative'>
            {image ? (
              <Image src={image} alt={title} fill className='object-contain' />
            ) : (
              <span className='text-6xl text-gray-300'>📦</span>
            )}
          </div>
          <div className='w-full md:w-2/3 flex flex-col justify-between min-h-[320px] md:min-h-[320px]'>
            <div>
              <h3 className='text-2xl font-semibold text-black mb-4 group-hover:text-gray-700 transition-colors'>
                {title}
              </h3>
              <p className='text-gray-600 mb-6 leading-relaxed'>
                {description}
              </p>
              {tech && tech.length > 0 && (
                <div className='flex flex-wrap gap-2 mb-6'>
                  {tech.map((t) => (
                    <span
                      key={t}
                      className='px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={`/projects/${slug}`}
              className='inline-flex items-center text-black font-semibold hover:text-gray-700 transition-colors text-sm px-6 py-2.5 border border-black rounded-full self-start'
            >
              프로젝트 보기 →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Small variant (홈페이지용)
  return (
    <div className='group bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 p-4 transition-all duration-200 hover:-translate-y-1'>
      <div className='h-36 flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden relative'>
        {image ? (
          <Image src={image} alt={title} fill className='object-contain' />
        ) : (
          <span className='text-4xl text-gray-300'>📦</span>
        )}
      </div>
      <h3 className='text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors'>
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
};

export default ProjectCard;
