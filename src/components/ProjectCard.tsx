import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  period?: string;
  variant?: 'small' | 'large';
  buttonText?: string;
  href?: string;
}

const ProjectCard = ({
  slug,
  title,
  description,
  image,
  tech,
  period,
  variant = 'small',
  buttonText = 'View Project →',
  href,
}: ProjectCardProps) => {
  const linkHref = href || `/projects/${slug}`;
  const isExternal = !!href;

  if (variant === 'large') {
    return (
      <div className='group bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 p-6 transition-all duration-200 hover:-translate-y-1'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='w-full md:w-1/3 h-64 md:h-80 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden relative'>
            {image ? (
              <Image src={image} alt={title} fill className='object-cover' />
            ) : (
              <span className='text-6xl text-gray-300'>📦</span>
            )}
          </div>
          <div className='w-full md:w-2/3 flex flex-col justify-between min-h-[320px] md:min-h-[320px]'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <h3 className='text-2xl font-semibold text-black group-hover:text-gray-700 transition-colors'>
                  {title}
                </h3>
                {period && (
                  <span className='text-sm text-gray-500 font-medium'>
                    {period}
                  </span>
                )}
              </div>
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
              href={linkHref}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className='inline-flex items-center justify-center text-black font-semibold hover:text-white transition-colors text-sm px-6 py-2.5 border-2 border-black rounded-full self-start hover:bg-black'
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Small variant (for homepage)
  return (
    <div className='group bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 p-4 transition-all duration-200 hover:-translate-y-1'>
      <div className='h-36 flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden relative'>
        {image ? (
          <Image src={image} alt={title} fill className='object-cover' />
        ) : (
          <span className='text-4xl text-gray-300'>📦</span>
        )}
      </div>
      <div className='flex items-center justify-between mb-2'>
        <h3 className='text-lg font-normal text-black group-hover:text-gray-700 transition-colors'>
          {title}
        </h3>
        {period && (
          <span className='text-xs text-gray-500 font-medium'>{period}</span>
        )}
      </div>
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
        href={linkHref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className='inline-flex items-center justify-center text-black font-light hover:text-white transition-colors
          text-sm px-4 py-2 border-1 border-black rounded-full mt-2 hover:bg-black'
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default ProjectCard;
