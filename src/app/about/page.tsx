import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { PiChalkboardTeacherFill } from 'react-icons/pi';
import { HiOutlineBriefcase } from 'react-icons/hi';

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
    period: 'Sep 2024 - Present',
    description: 'South Korea lab-based medical AI startup',
  },
  {
    company: 'Open Source',
    role: 'DatePicker Component Maintainer',
    period: 'Mar 2024 - Aug 2024',
    description: 'npm 배포, Headless UI 기반 컴포넌트 개발',
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
    <section className='py-16 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <div className='pt-8'>
          <h1 className='text-3xl font-bold mb-6 text-black'>About Me</h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            My journey has been shaped by a strong academic foundation, hands-on
            experience, and a passion for building scalable, accessible web
            applications. I&apos;m dedicated to designing solutions that blend
            creativity, functionality, and user-centric thinking.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Academic Education */}
          <div className='bg-white rounded-2xl shadow p-8'>
            <div className='flex items-center gap-2 mb-4'>
              <FaGraduationCap className='text-xl text-gray-400' />
              <h2 className='text-lg font-semibold text-black'>
                Academic Education
              </h2>
            </div>
            <ul className='space-y-3'>
              {academicEducation.map((edu) => (
                <li key={edu.school} className='ml-2'>
                  <div className='font-medium text-black'>{edu.school}</div>
                  <div className='text-gray-700 text-sm'>{edu.degree}</div>
                  <div className='text-gray-500 text-xs mt-1'>{edu.period}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Non-Formal Education */}
          <div className='bg-white rounded-2xl shadow p-8'>
            <div className='flex items-center gap-2 mb-4'>
              <PiChalkboardTeacherFill className='text-xl text-gray-400' />
              <h2 className='text-lg font-semibold text-black'>
                Non-Formal Education
              </h2>
            </div>
            <ul className='space-y-3'>
              {nonFormalEducation.map((edu) => (
                <li key={edu.program} className='ml-2'>
                  <div className='font-medium text-black'>{edu.program}</div>
                  <div className='text-gray-500 text-xs mt-1'>{edu.period}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Experience (List) */}
          <div className='bg-white rounded-2xl shadow p-8'>
            <div className='flex items-center gap-2 mb-4'>
              <HiOutlineBriefcase className='text-xl text-gray-400' />
              <h2 className='text-lg font-semibold text-black'>Experience</h2>
            </div>
            <ul className='space-y-3'>
              {experience.map((exp) => (
                <li key={exp.company + exp.role} className='ml-2'>
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
          <div className='bg-white rounded-2xl shadow p-8'>
            <div className='flex items-center gap-2 mb-4'>
              <FaCertificate className='text-xl text-gray-400' />
              <h2 className='text-lg font-semibold text-black'>
                Certifications
              </h2>
            </div>
            <ul className='space-y-3'>
              {certifications.map((cert) => (
                <li key={cert.name + cert.year} className='ml-2'>
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
