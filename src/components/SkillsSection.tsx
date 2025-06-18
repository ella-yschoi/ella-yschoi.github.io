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
  <section id='skills' className='py-24 px-6 w-full bg-white dark:bg-slate-900'>
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white'>
        Skills
      </h2>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'
          >
            <h3 className='text-xl font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
              {skill.name}
            </h3>
            <span className='text-sm text-slate-500 dark:text-slate-400 font-medium'>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
