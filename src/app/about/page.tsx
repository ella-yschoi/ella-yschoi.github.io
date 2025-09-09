import { FaHandsHelping, FaUniversity } from 'react-icons/fa';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { calculateDuration } from '@/utils/dateUtils';

const education = [
  {
    institution: 'Code States - Engineering Bootcamp',
    degree:
      'Completed a full-time frontend training program focused on modern web development. Built a strong foundation in HTML/CSS, JavaScript, TypeScript, and React.',
    period: 'Feb 2023 - Aug 2023',
  },
  {
    institution: 'Algoma University',
    degree: 'Foreign Exchange Program, Business Administration and Economics',
    period: 'Sep 2015 - Jun 2016',
  },
  {
    institution: 'Soonchunhyang University',
    degree: "Bachelor's degree, Department of IT-Finance Management",
    period: 'Mar 2013 - Feb 2017',
  },
];

const volunteering = [
  {
    organization: 'Growth & Share',
    role: 'Community Lead',
    period: 'Jul 2021 - Aug 2022',
    description:
      'Built and led a startup-focused community of early-career developers and entrepreneurs, organizing regular meetups and workshops, building the community website, and facilitating peer-to-peer knowledge sharing.',
  },
  {
    organization: 'Algoma University',
    role: 'Korean Language Tutor',
    period: 'Dec 2015 - Apr 2016',
    description:
      'Volunteered to teach Korean to three Canadian students during a study abroad semester in Canada, fostering cultural exchange and improving their conversational skills.',
  },
];

const experience = [
  {
    company: 'VIENCE',
    role: 'Frontend Engineer',
    period: 'Sep 2024 - Aug 2025',
    startDate: '2024-09-01',
    description: 'South Korea lab-based medical AI startup',
  },
  {
    company: 'Channel Talk',
    role: 'Customer Experience Manager',
    period: 'Aug 2022 - Jan 2023',
    description: 'Managed customer experience and CRM campaigns.',
  },
  {
    company: 'Next Kitchen',
    role: 'Customer Relationship Management Manager',
    period: 'Jul 2021 - Aug 2022',
    description:
      'Focused on content marketing and customer experience management.',
  },
  {
    company: 'BROWNBAG',
    role: 'Marketing Manager',
    period: 'Jul 2018 - Nov 2020',
    description: 'Designed B2C/B2B onboarding flows, led marketing campaigns.',
  },
];

export default function AboutPage() {
  return (
    <section className='py-16 w-full bg-gray-50 min-h-screen' data-scrollable>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <div className='pt-8'>
          <h1 className='text-3xl font-bold mb-6 text-black'>About Me</h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            I leverage my academic foundation and practical experience to build
            scalable and accessible web applications, focusing on creative,
            user-centric solutions.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Experience (Full Width) */}
          <div className='bg-white rounded-2xl shadow p-8 md:col-span-2'>
            <div className='flex items-center gap-2 mb-4'>
              <HiOutlineBriefcase className='text-xl text-gray-400' />
              <h2 className='text-xl font-semibold text-black'>Experience</h2>
            </div>
            <ul className='space-y-6'>
              {experience.map((exp) => (
                <li key={exp.company + exp.role} className='ml-2'>
                  <div className='flex items-center gap-2'>
                    <div className='font-medium text-black'>
                      {exp.company} - {exp.role}
                    </div>
                    {exp.period.includes('Aug 2025') && (
                      <span className='relative flex h-3 w-3'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
                      </span>
                    )}
                  </div>
                  <div className='text-gray-700 text-sm'>{exp.description}</div>
                  <div className='text-gray-500 text-xs mt-1'>
                    {exp.period}
                    {exp.period.includes('Present') && exp.startDate && (
                      <span className='ml-1'>
                        ({calculateDuration(exp.startDate)})
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education (Combined) */}
          <div className='bg-white rounded-2xl shadow p-8'>
            <div className='flex items-center gap-2 mb-4'>
              <FaUniversity className='text-xl text-gray-400' />
              <h2 className='text-xl font-semibold text-black'>Education</h2>
            </div>
            <ul className='space-y-6'>
              {education.map((edu) => (
                <li key={edu.institution} className='ml-2'>
                  <div className='font-medium text-black'>
                    {edu.institution}
                  </div>
                  <div className='text-gray-700 text-sm mt-1'>{edu.degree}</div>
                  <div className='text-gray-500 text-xs mt-1'>{edu.period}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Volunteering */}
          <div className='bg-white rounded-2xl shadow p-8'>
            <div className='flex items-center gap-2 mb-4'>
              <FaHandsHelping className='text-xl text-gray-400' />
              <h2 className='text-xl font-semibold text-black'>Volunteering</h2>
            </div>
            <ul className='space-y-6'>
              {volunteering.map((item) => (
                <li key={item.organization} className='ml-2'>
                  <div className='font-medium text-black'>
                    {item.organization} - {item.role}
                  </div>
                  <div className='text-gray-700 text-sm'>
                    {item.description}
                  </div>
                  <div className='text-gray-500 text-xs mt-1'>
                    {item.period}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
