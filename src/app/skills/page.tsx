import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiStyledcomponents,
  SiD3Dotjs,
  SiGithubactions,
  SiGit,
  SiJest,
  SiVitest,
} from 'react-icons/si';
import { MdWidgets, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { FaProjectDiagram } from 'react-icons/fa';

const skillsData = {
  languages: [
    {
      name: 'JavaScript',
      logo: <SiJavascript className='text-yellow-400' />,
      description:
        'Proficient in modern JavaScript (ES6+), including asynchronous programming (Promises, async/await), DOM manipulation, and REST API integration.',
    },
    {
      name: 'TypeScript',
      logo: <SiTypescript className='text-blue-500' />,
      description:
        'Building a safe development environment through type safety. Writing robust code using interfaces, generics, and union types.',
    },
    {
      name: 'HTML',
      logo: <SiHtml5 className='text-red-500' />,
      description:
        'Designing HTML structures with semantic markup and web accessibility (WCAG AAA) in mind. Enhancing SEO and user experience.',
    },
    {
      name: 'CSS',
      logo: <SiCss3 className='text-blue-500' />,
      description:
        'Implementing layouts using responsive design with CSS Grid/Flexbox. Improving maintainability through CSS variables and modularization.',
    },
  ],
  frameworks: [
    {
      name: 'React',
      logo: <SiReact className='text-sky-400' />,
      description:
        'Modern React development using functional components and Hooks. Optimizing component design and state management.',
    },
    {
      name: 'Next.js',
      logo: <SiNextdotjs className='text-black' />,
      description:
        'A React-based full-stack framework. Developing high-performance web applications using SSR, SSG, and the App Router.',
    },
    {
      name: 'Vite',
      logo: <SiVite className='text-purple-400' />,
      description:
        'Fast development server and build tool. Experience migrating from CRA to Vite, reducing build time by 82%.',
    },
    {
      name: 'Zustand',
      logo: <MdWidgets className='text-gray-400' />,
      description:
        'A lightweight state management library. Optimizing applications by separating global/local state and reducing complexity.',
    },
    {
      name: 'TailwindCSS',
      logo: <SiTailwindcss className='text-sky-400' />,
      description:
        'A utility-first CSS framework. Enabling rapid prototyping and consistent design system implementation.',
    },
    {
      name: 'Styled-Components',
      logo: <SiStyledcomponents className='text-pink-400' />,
      description:
        'A CSS-in-JS library. Component-based styling using dynamic styling and theming systems.',
    },
    {
      name: 'D3.js',
      logo: <SiD3Dotjs className='text-orange-500' />,
      description:
        'A data visualization library. Experience implementing complex charts and interactive graphs.',
    },
    {
      name: 'Rete.js',
      logo: <FaProjectDiagram className='text-purple-400' />,
      description:
        'A TypeScript-first framework for creating node-based visual editors. Experience building dataflow-driven interfaces and custom visual programming tools.',
    },
    {
      name: 'OpenSeadragon',
      logo: <MdWidgets className='text-gray-400' />,
      description:
        'A high-resolution image viewer library. Implemented visualization for pathology images and large SVS files.',
    },
  ],
  devops: [
    {
      name: 'GitHub Actions',
      logo: <SiGithubactions className='text-blue-400' />,
      description:
        'CI/CD pipeline automation. Improving development efficiency by automating build, test, and deployment processes.',
    },
    {
      name: 'Git',
      logo: <SiGit className='text-gray-400' />,
      description:
        'Version control and collaboration tool. Systematic code management through branch strategies and commit conventions.',
    },
    {
      name: 'Jest',
      logo: <SiJest className='text-rose-400' />,
      description:
        'A JavaScript testing framework. Ensuring code quality through unit and integration tests.',
    },
    {
      name: 'Vitest',
      logo: <SiVitest className='text-lime-500' />,
      description:
        'A Vite-based testing tool. Fast test execution and development environment optimization.',
    },
  ],
  principles: [
    {
      name: 'Web Accessibility',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        'Adhering to WCAG AAA guidelines. Providing an inclusive web experience through dark mode implementation and color contrast optimization.',
    },
    {
      name: 'Modular Architecture',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        'Designing modular components. Applying architectural patterns that consider reusability and maintainability.',
    },
    {
      name: 'Separation of Concerns',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        'Principle of Separation of Concerns. Improving code quality through clear separation of business logic and UI logic.',
    },
    {
      name: 'DRY Principle',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        "Don't Repeat Yourself (DRY) principle. Abstracting common logic and designing reusable components.",
    },
    {
      name: 'Single Responsibility',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        'Single Responsibility Principle. Designing each component and function to have one clear responsibility.',
    },
    {
      name: 'TDD',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        'Test-Driven Development (TDD). Writing stable code by creating tests before implementation.',
    },
  ],
};

const SkillSection = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; logo: React.ReactNode; description: string }[];
}) => (
  <div className='mb-12'>
    <h2 className='text-2xl font-bold mb-6 text-black'>{title}</h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {items.map((item) => (
        <div
          key={item.name}
          className='bg-white rounded-xl shadow border border-gray-100 p-6 hover:shadow-lg transition-shadow'
        >
          <div className='flex items-center gap-3 mb-3'>
            <span className='text-2xl'>{item.logo}</span>
            <h3 className='text-lg font-semibold text-black'>{item.name}</h3>
          </div>
          <p className='text-gray-700 text-sm leading-relaxed'>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default function SkillsPage() {
  return (
    <section className='py-16 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <div className='pt-8'>
          <h1 className='text-3xl font-bold mb-6 text-black'>My Skills</h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            I use a modern tech stack to build efficient, scalable, and visually
            appealing web applications, prioritizing performance, accessibility,
            and maintainability.
          </p>
        </div>

        <SkillSection title='Languages' items={skillsData.languages} />
        <SkillSection
          title='Frameworks & Libraries'
          items={skillsData.frameworks}
        />
        <SkillSection title='DevOps & Testing' items={skillsData.devops} />
        <SkillSection
          title='Engineering Principles'
          items={skillsData.principles}
        />
      </div>
    </section>
  );
}
