const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Git',
  'Figma',
];

const SkillsSection = () => (
  <section id='skills' className='py-16 flex flex-col items-center'>
    <h2 className='text-2xl font-bold mb-4 text-blue-600'>Skills</h2>
    <ul className='flex flex-wrap gap-4 justify-center mt-4'>
      {skills.map((skill) => (
        <li
          key={skill}
          className='px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-100 font-medium'
        >
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default SkillsSection;
