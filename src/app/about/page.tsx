'use client';

import {
  FaHandsHelping,
  FaUniversity,
  FaRocket,
  FaChartLine,
  FaCog,
  FaUsers,
} from 'react-icons/fa';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { motion } from 'framer-motion';
// import { calculateDuration } from '@/utils/dateUtils';

const experience = [
  {
    company: 'Vience',
    role: 'Frontend Engineer',
    period: 'Sep 2024 - Aug 2025',
    startDate: '2024-09-01',
    description:
      'AI-powered medical imaging and digital pathology startup (Seed, ~10 people)',
    achievements: [
      {
        icon: <FaRocket className='text-blue-500' />,
        title: 'Scalable Platform Development',
        description:
          'Led the zero-to-one development of a cloud-based pathology platform using TypeScript and React, collaborating with backend teams to integrate APIs handling 1,000+ SVS files for optimized performance.',
      },
      {
        icon: <FaChartLine className='text-green-500' />,
        title: '90% Efficiency Improvement',
        description:
          'Reduced pathology data prep time by 90% (6h → 30m), helping secure demo meetings with 2 major hospitals and generating $1M+ in enterprise leads.',
      },
      {
        icon: <FaCog className='text-purple-500' />,
        title: 'CI/CD Automation',
        description:
          'Automated CI/CD workflows using GitHub Actions, reducing manual steps from 10 to 1 and cutting CI time from 3min to 50s, while stabilizing pipelines by resolving 2,200+ issues and security vulnerabilities.',
      },
      {
        icon: <FaUsers className='text-orange-500' />,
        title: 'User-Friendly Interface',
        description:
          'Delivered a user-friendly list and grid UI from the ground up, requiring no training for medical staff by designing reusable core logic applied across three features, reducing component development time by 67%.',
      },
      {
        icon: <FaRocket className='text-indigo-500' />,
        title: 'Build Optimization',
        description:
          'Migrated from Create React App to Vite with esbuild-based bundling and tree shaking, reducing build time from 110s to 20s and enabling weekly releases.',
      },
    ],
  },
  {
    company: 'Channel Talk',
    role: 'Customer Experience Manager',
    period: 'Aug 2022 - Jan 2023',
    startDate: '2022-08-01',
    description:
      'AI-driven messenger and CRM platform startup (Series D, ~200 people)',
    achievements: [
      {
        icon: <FaHandsHelping className='text-green-500' />,
        title: 'Technical Issue Resolution',
        description:
          'Collaborated with developers to resolve technical issues for B2B customers by translating complex tech concepts into user-friendly language.',
      },
      {
        icon: <FaCog className='text-yellow-500' />,
        title: 'Feature Launch & Coordination',
        description:
          'Acted as a bridge between design, engineering, and sales by managing feature launches, coordinating requirements, writing customer guides, and publishing release notes for features like Naver Login and Roles & Permissions.',
      },
      {
        icon: <FaUniversity className='text-red-500' />,
        title: 'Content Migration & UX Planning',
        description:
          'Contributed to migrating support content from Notion to a public help site by planning the information architecture and UX with frontend engineers.',
      },
    ],
  },
  {
    company: 'NEXT KITCHEN',
    role: 'CRM Manager',
    period: 'Jul 2021 - Aug 2022',
    startDate: '2021-07-01',
    description:
      'HMR and juice manufacturing and e-commerce platform (Series A, ~50 people)',
    achievements: [
      {
        icon: <FaChartLine className='text-orange-500' />,
        title: 'Customer Relationship Management & A/B Testing',
        description:
          'Collaborated with the manufacturing team on product launches and quality improvements, conducting A/B testing and user feedback analysis to boost sales.',
      },
    ],
  },
  {
    company: 'Brownbag',
    role: 'Marketer',
    period: 'Jul 2018 - Nov 2020',
    startDate: '2018-07-01',
    description:
      'Coffee e-commerce startup offering beans and machine rentals (Series A, ~50 people)',
    achievements: [
      {
        icon: <FaChartLine className='text-green-500' />,
        title: 'Growth & User Research',
        description:
          'Designed onboarding flows, ran user research (100+ interviews), and led marketing campaigns that grew the customer base 10x and secured the first 500 business clients.',
      },
    ],
  },
];

const education = [
  {
    institution: 'Code States - Engineering Bootcamp',
    degree:
      'Completed a full-time frontend training program focused on modern web development.',
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
      'Built and led a startup-focused community of early-career developers and entrepreneurs, organizing regular meetups and workshops, building the community website, and facilitating knowledge sharing.',
  },
  {
    organization: 'Algoma University',
    role: 'Korean Language Tutor',
    period: 'Dec 2015 - Apr 2016',
    description:
      'Volunteered to teach Korean to three Canadian students during a study abroad semester in Canada, fostering cultural exchange and improving their conversational skills.',
  },
];

export default function AboutPage() {
  return (
    <section
      className='py-16 w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 min-h-screen'
      data-scrollable
    >
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <motion.div
          className='pt-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'>
            About Me
          </h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            I leverage my academic foundation and practical experience to build
            scalable and accessible web applications, focusing on creative,
            user-centric solutions.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8 mb-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='flex items-center gap-3 mb-8'>
            <div className='p-2 bg-blue-100 rounded-lg'>
              <HiOutlineBriefcase className='text-xl text-blue-600' />
            </div>
            <h2 className='text-2xl font-bold text-gray-900'>
              Work Experience
            </h2>
          </div>

          <div className='space-y-12'>
            {experience.map((exp, expIndex) => (
              <motion.div
                key={exp.company + exp.role}
                className='relative'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: expIndex * 0.1 }}
              >
                {/* Timeline line */}
                {expIndex < experience.length - 1 && (
                  <div className='absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-transparent'></div>
                )}

                <div className='flex items-start gap-6'>
                  {/* Timeline dot */}
                  <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                    {expIndex + 1}
                  </div>

                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-xl font-bold text-gray-900'>
                        {exp.role} at {exp.company}
                      </h3>
                      {exp.period.includes('Aug 2025') && (
                        <span className='relative flex h-3 w-3'>
                          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                          <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
                        </span>
                      )}
                    </div>

                    <p className='text-blue-600 font-medium mb-2'>
                      {exp.description}
                    </p>
                    <p className='text-gray-500 text-sm mb-6'>{exp.period}</p>

                    {/* Achievements */}
                    <div className='space-y-4'>
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          className='bg-gray-50 rounded-xl p-4 border border-gray-200/50 hover:border-blue-200 transition-colors'
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                        >
                          <div className='flex items-start gap-3'>
                            <div className='flex-shrink-0 mt-1'>
                              {achievement.icon}
                            </div>
                            <div>
                              <h4 className='font-semibold text-gray-900 mb-1'>
                                {achievement.title}
                              </h4>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Education */}
          <motion.div
            className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='flex items-center gap-3 mb-6'>
              <div className='p-2 bg-indigo-100 rounded-lg'>
                <FaUniversity className='text-xl text-indigo-600' />
              </div>
              <h2 className='text-xl font-bold text-gray-900'>Education</h2>
            </div>
            <div className='space-y-6'>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  className='border-l-4 border-indigo-200 pl-4'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3 className='font-semibold text-gray-900 mb-1'>
                    {edu.institution}
                  </h3>
                  <p className='text-gray-600 text-sm mb-1'>{edu.degree}</p>
                  <p className='text-gray-500 text-xs'>{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Volunteering */}
          <motion.div
            className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className='flex items-center gap-3 mb-6'>
              <div className='p-2 bg-green-100 rounded-lg'>
                <FaHandsHelping className='text-xl text-green-600' />
              </div>
              <h2 className='text-xl font-bold text-gray-900'>Volunteering</h2>
            </div>
            <div className='space-y-6'>
              {volunteering.map((item, index) => (
                <motion.div
                  key={item.organization}
                  className='border-l-4 border-green-200 pl-4'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3 className='font-semibold text-gray-900 mb-1'>
                    {item.organization} - {item.role}
                  </h3>
                  <p className='text-gray-600 text-sm mb-1'>
                    {item.description}
                  </p>
                  <p className='text-gray-500 text-xs'>{item.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
