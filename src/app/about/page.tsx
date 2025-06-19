const academicEducation = [
  {
    school: 'Soonchunhyang University',
    degree: 'B.A. in IT Finance & Business Administration',
    period: '2017',
  },
];

const nonFormalEducation = [
  {
    program: 'CodeStates Bootcamp - Frontend fundamentals & programming basics',
    period: 'August 2023',
  },
];

const experience = [
  {
    company: 'VIENCE',
    role: 'Frontend Engineer',
    period: 'September 2024 - Present',
    description: "South Korea's lab-based medical AI startup",
  },
];

const certifications = [
  {
    name: 'Web Accessibility (WCAG AAA)',
    org: 'Self-certified through project implementation',
    year: '2024',
  },
  {
    name: 'CI/CD Pipeline Automation',
    org: 'GitHub Actions implementation',
    year: '2024',
  },
  {
    name: 'TDD & Testing Practices',
    org: 'Jest & Vitest implementation',
    year: '2024',
  },
];

export default function AboutPage() {
  return (
    <section className='py-16 px-6 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-bold mb-10 text-black'>About Me</h1>
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Academic Education */}
          <div className='bg-white rounded-xl shadow border border-gray-100 p-6'>
            <h2 className='text-xl font-semibold mb-4 text-black flex items-center gap-2'>
              <span>🎓</span> Academic Education
            </h2>
            <ul className='space-y-3'>
              {academicEducation.map((edu) => (
                <li key={edu.school}>
                  <div className='font-medium text-black'>{edu.school}</div>
                  <div className='text-gray-700 text-sm'>{edu.degree}</div>
                  <div className='text-gray-500 text-xs mt-1'>{edu.period}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Non-Formal Education */}
          <div className='bg-white rounded-xl shadow border border-gray-100 p-6'>
            <h2 className='text-xl font-semibold mb-4 text-black flex items-center gap-2'>
              <span>📚</span> Non-Formal Education
            </h2>
            <ul className='space-y-3'>
              {nonFormalEducation.map((edu) => (
                <li key={edu.program}>
                  <div className='font-medium text-black'>{edu.program}</div>
                  <div className='text-gray-500 text-xs mt-1'>{edu.period}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Experience */}
          <div className='bg-white rounded-xl shadow border border-gray-100 p-6'>
            <h2 className='text-xl font-semibold mb-4 text-black flex items-center gap-2'>
              <span>💼</span> Experience
            </h2>
            <ul className='space-y-3'>
              {experience.map((exp) => (
                <li key={exp.company + exp.role}>
                  <div className='font-medium text-black'>
                    {exp.company} - {exp.role}
                  </div>
                  <div className='text-gray-700 text-sm'>{exp.description}</div>
                  <div className='text-gray-500 text-xs mt-1'>{exp.period}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Certifications */}
          <div className='bg-white rounded-xl shadow border border-gray-100 p-6'>
            <h2 className='text-xl font-semibold mb-4 text-black flex items-center gap-2'>
              <span>📜</span> Certifications & Achievements
            </h2>
            <ul className='space-y-3'>
              {certifications.map((cert) => (
                <li key={cert.name + cert.year}>
                  <div className='font-medium text-black'>{cert.name}</div>
                  <div className='text-gray-700 text-sm'>{cert.org}</div>
                  <div className='text-gray-500 text-xs mt-1'>{cert.year}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
