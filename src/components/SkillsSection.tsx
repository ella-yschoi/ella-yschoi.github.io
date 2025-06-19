const skills = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Vite' },
  { name: 'Zustand' },
  { name: 'TailwindCSS' },
  { name: 'Styled-Components' },
  { name: 'D3.js' },
  { name: 'OpenSeadragon' },
  { name: 'GitHub Actions' },
  { name: 'Jest' },
  { name: 'Vitest' },
];

const SkillsSection = () => (
  <section
    id='skills'
    className='w-full bg-white rounded-2xl shadow py-16 px-8'
  >
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-12 text-center text-black'>
        Skills
      </h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='group bg-white rounded-lg  p-5 text-center transition-all duration-300 transform border border-gray-100'
          >
            <h3 className='text-lg font-light mb-2 text-black'>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
