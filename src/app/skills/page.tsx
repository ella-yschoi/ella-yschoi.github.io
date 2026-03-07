'use client';

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
  SiPython,
  SiExpress,
  SiStorybook,
  SiSocketdotio,
  SiReactquery,
  SiFastapi,
  SiFlutter,
  SiOpenai,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import {
  MdWidgets,
  MdOutlineTipsAndUpdates,
  MdSpeed,
  MdSmartToy,
} from 'react-icons/md';
import { FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
        'Expertise in type-safe development. Writing robust code using interfaces, generics, and union types for scalable applications.',
    },
    {
      name: 'Python',
      logo: <SiPython className='text-blue-500' />,
      description:
        'Proficient in backend development with FastAPI, scripting automation, and AI agent orchestration. Building CLI tools and deployment workflows.',
    },
    {
      name: 'HTML',
      logo: <SiHtml5 className='text-red-500' />,
      description:
        'Expertise in semantic markup and web accessibility (WCAG AAA). Enhancing SEO and user experience through proper HTML structure.',
    },
    {
      name: 'CSS',
      logo: <SiCss3 className='text-blue-500' />,
      description:
        'Expertise in responsive design with CSS Grid/Flexbox. Debugging layout shifts, overflow issues, and mobile-specific rendering problems.',
    },
  ],
  frameworks: [
    {
      name: 'React',
      logo: <SiReact className='text-sky-400' />,
      description:
        'Expertise in modern React development using functional components and Hooks. Optimizing component design and state management.',
    },
    {
      name: 'Next.js',
      logo: <SiNextdotjs className='text-black' />,
      description:
        'Proficient in full-stack React framework. Building high-performance web applications using SSR, SSG, and the App Router.',
    },
    {
      name: 'Express.js',
      logo: <SiExpress className='text-black' />,
      description:
        'Building REST APIs, WebSocket signaling servers, and backend services. Proficient in Socket.io integration and PDF generation pipelines.',
    },
    {
      name: 'FastAPI',
      logo: <SiFastapi className='text-emerald-500' />,
      description:
        'Proficient in high-performance Python APIs with automatic OpenAPI docs, async support, and dependency injection.',
    },
    {
      name: 'Flutter',
      logo: <SiFlutter className='text-sky-400' />,
      description:
        'Cross-platform mobile development with Dart. Building responsive UIs with state management and API integration.',
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
        'Lightweight state management. Optimizing applications by separating global/local state and reducing complexity.',
    },
    {
      name: 'TanStack Query',
      logo: <SiReactquery className='text-amber-500' />,
      description:
        'Server-state management with caching, background refetching, and optimistic updates for resilient data fetching.',
    },
    {
      name: 'Socket.io',
      logo: <SiSocketdotio className='text-black' />,
      description:
        'Real-time communication for chat and signaling. Implementing rooms, presence, and reliability strategies with backoff.',
    },
    {
      name: 'TailwindCSS',
      logo: <SiTailwindcss className='text-sky-400' />,
      description:
        'Utility-first CSS framework. Enabling rapid prototyping and consistent design system implementation.',
    },
    {
      name: 'Styled-Components',
      logo: <SiStyledcomponents className='text-pink-400' />,
      description:
        'CSS-in-JS library. Component-based styling using dynamic styling and theming systems.',
    },
    {
      name: 'D3.js',
      logo: <SiD3Dotjs className='text-orange-500' />,
      description:
        'Data visualization library. Expertise in implementing complex charts and interactive graphs.',
    },
    {
      name: 'Rete.js',
      logo: <FaProjectDiagram className='text-purple-400' />,
      description:
        'TypeScript-first framework for node-based visual editors. Building dataflow-driven interfaces and custom visual programming tools.',
    },
    {
      name: 'OpenSeadragon',
      logo: <MdWidgets className='text-gray-400' />,
      description:
        'High-resolution image viewer library. Implemented visualization for pathology images and large SVS files.',
    },
  ],
  tools: [
    {
      name: 'AWS',
      logo: <FaAws className='text-orange-500' />,
      description:
        'EC2 instance management and SSH connection. Comfortable connecting and operating instances for deployments.',
    },
    {
      name: 'GitHub Actions',
      logo: <SiGithubactions className='text-blue-400' />,
      description:
        'CI/CD pipeline automation. Automating build, test, lint, security scanning, and deployment processes.',
    },
    {
      name: 'Git',
      logo: <SiGit className='text-gray-400' />,
      description:
        'Version control and collaboration. Systematic code management through branch strategies and commit conventions.',
    },
    {
      name: 'Storybook',
      logo: <SiStorybook className='text-pink-500' />,
      description:
        'UI component development environment. Documenting states and interactions with isolated stories and visual regression readiness.',
    },
    {
      name: 'Jest',
      logo: <SiJest className='text-rose-400' />,
      description:
        'JavaScript testing framework. Ensuring code quality through unit and integration tests.',
    },
    {
      name: 'Vitest',
      logo: <SiVitest className='text-lime-500' />,
      description:
        'Vite-based testing tool. Fast test execution and development environment optimization.',
    },
  ],
  performance: [
    {
      name: 'Core Web Vitals Optimization',
      logo: <MdSpeed className='text-green-500' />,
      description:
        'Proficient in diagnosing and improving LCP, FID, and CLS scores for better user experience and SEO rankings.',
    },
    {
      name: 'Image & Asset Optimization',
      logo: <MdSpeed className='text-blue-500' />,
      description:
        'Expertise in lazy loading, next-gen formats (WebP/AVIF), responsive images, and CDN-based asset delivery.',
    },
    {
      name: 'Responsive Layout Debugging',
      logo: <MdSpeed className='text-orange-500' />,
      description:
        'Solving CLS issues, horizontal overflow, and mobile-specific rendering problems across browsers and devices.',
    },
    {
      name: 'SEO Technical Audit',
      logo: <MdSpeed className='text-purple-500' />,
      description:
        'Structured data, meta optimization, canonical URLs, and Lighthouse-driven performance auditing.',
    },
  ],
  ai: [
    {
      name: 'Claude Code / Anthropic API',
      logo: <MdSmartToy className='text-orange-500' />,
      description:
        'Expertise in building AI-powered workflows, automated code review pipelines, and multi-agent orchestration with Claude.',
    },
    {
      name: 'OpenAI API',
      logo: <SiOpenai className='text-gray-700' />,
      description:
        'Proficient in GPT integration for content generation, data analysis, and conversational AI features.',
    },
    {
      name: 'AI Agent Orchestration',
      logo: <MdSmartToy className='text-indigo-500' />,
      description:
        'Designing multi-agent workflows with triangular verification, self-correction loops, and automated quality gates.',
    },
    {
      name: 'Prompt Engineering',
      logo: <MdSmartToy className='text-emerald-500' />,
      description:
        'Crafting effective prompts for code generation, analysis, and structured output. Optimizing token usage and response quality.',
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
        'Improving code quality through clear separation of business logic and UI logic.',
    },
    {
      name: 'DRY Principle',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        "Don't Repeat Yourself. Abstracting common logic and designing reusable components.",
    },
    {
      name: 'Single Responsibility',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        'Designing each component and function to have one clear responsibility.',
    },
    {
      name: 'TDD',
      logo: <MdOutlineTipsAndUpdates className='text-gray-400' />,
      description:
        'Test-Driven Development. Writing stable code by creating tests before implementation.',
    },
  ],
};

const SkillSection = ({
  title,
  items,
  color,
}: {
  title: string;
  items: { name: string; logo: React.ReactNode; description: string }[];
  color: string;
}) => (
  <motion.div
    className='mb-16'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className='flex items-center gap-3 mb-8'>
      <div className={`p-2 ${color} rounded-lg`}></div>
      <h2 className='text-2xl font-bold text-gray-900'>{title}</h2>
    </div>

    <motion.div
      className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          className='group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className='flex items-center gap-3 mb-4'>
            <div className='text-3xl group-hover:scale-110 transition-transform duration-300'>
              {item.logo}
            </div>
            <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
              {item.name}
            </h3>
          </div>
          <p className='text-gray-600 text-sm leading-relaxed'>
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default function SkillsPage() {
  return (
    <section
      className='py-16 w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 min-h-screen'
      data-scrollable
    >
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <motion.div
          className='pt-8 mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'>
            Skills
          </h1>
          <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
            A comprehensive overview of my technical skills, from responsive
            web performance to AI-driven automation, built on modern frameworks
            and best practices.
          </p>

          {/* Skills Overview Cards */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
            <motion.div
              className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/50'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className='text-2xl font-bold text-blue-600'>5</div>
              <div className='text-sm text-gray-600'>Languages</div>
            </motion.div>
            <motion.div
              className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/50'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='text-2xl font-bold text-indigo-600'>14</div>
              <div className='text-sm text-gray-600'>Frameworks</div>
            </motion.div>
            <motion.div
              className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/50'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className='text-2xl font-bold text-purple-600'>6</div>
              <div className='text-sm text-gray-600'>Tools</div>
            </motion.div>
            <motion.div
              className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/50'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className='text-2xl font-bold text-green-600'>8</div>
              <div className='text-sm text-gray-600'>
                Performance & AI
              </div>
            </motion.div>
          </div>
        </motion.div>

        <SkillSection
          title='Programming Languages'
          items={skillsData.languages}
          color='bg-blue-100'
        />

        <SkillSection
          title='Frameworks & Libraries'
          items={skillsData.frameworks}
          color='bg-indigo-100'
        />

        <SkillSection
          title='Tools & Testing'
          items={skillsData.tools}
          color='bg-purple-100'
        />

        <SkillSection
          title='Performance & SEO'
          items={skillsData.performance}
          color='bg-green-100'
        />

        <SkillSection
          title='AI & Automation'
          items={skillsData.ai}
          color='bg-orange-100'
        />

        <SkillSection
          title='Development Principles'
          items={skillsData.principles}
          color='bg-gray-100'
        />
      </div>
    </section>
  );
}
