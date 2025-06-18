const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Git', level: 'Intermediate' },
  { name: 'Figma', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
];

const SkillsSection = () => (
  <section id='skills' className='py-16 px-6 w-full bg-gray-50'>
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-12 text-center text-black'>
        Skills
      </h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='group bg-white rounded-lg p-5 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'
          >
            <h3 className='text-lg font-semibold mb-2 text-black group-hover:text-gray-700 transition-colors'>
              {skill.name}
            </h3>
            <span className='text-sm text-gray-500 font-medium'>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
