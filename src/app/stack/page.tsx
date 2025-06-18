const stackData = {
  languages: [
    {
      name: 'JavaScript',
      description:
        'I use JavaScript for building interactive web applications and implementing dynamic functionality across the frontend.',
      logo: '🟨',
    },
    {
      name: 'TypeScript',
      description:
        'TypeScript helps me write more maintainable code with type safety and better developer experience.',
      logo: '🔵',
    },
    {
      name: 'HTML',
      description:
        'I use HTML to structure content and create semantic markup for accessible and SEO-friendly websites.',
      logo: '🟠',
    },
    {
      name: 'CSS',
      description:
        'CSS allows me to style and bring designs to life with layouts, colors, animations, and responsive adjustments.',
      logo: '🔷',
    },
  ],
  frameworks: [
    {
      name: 'React',
      description:
        'React is my primary framework for building component-based user interfaces with efficient state management.',
      logo: '⚛️',
    },
    {
      name: 'Vite',
      description:
        'I use Vite for fast development and building modern web applications with excellent developer experience.',
      logo: '⚡',
    },
    {
      name: 'Zustand',
      description:
        'Zustand provides simple and efficient state management for React applications without unnecessary complexity.',
      logo: '🐻',
    },
    {
      name: 'TailwindCSS',
      description:
        'TailwindCSS enables me to rapidly build custom designs with utility-first CSS framework.',
      logo: '🎨',
    },
    {
      name: 'Styled-Components',
      description:
        'Styled-Components helps me create component-scoped styles with CSS-in-JS for better maintainability.',
      logo: '💅',
    },
    {
      name: 'D3.js',
      description:
        'I use D3.js for creating interactive data visualizations and dynamic charts.',
      logo: '📊',
    },
    {
      name: 'OpenSeadragon',
      description:
        'OpenSeadragon allows me to implement high-resolution image viewing with zoom and pan capabilities.',
      logo: '🔍',
    },
  ],
  devops: [
    {
      name: 'GitHub Actions',
      description:
        'I use GitHub Actions for CI/CD pipelines to automate testing and deployment processes.',
      logo: '🔄',
    },
    {
      name: 'Git',
      description:
        'Git is essential for version control and collaborative development workflows.',
      logo: '📝',
    },
    {
      name: 'Jest',
      description:
        'Jest is my testing framework for unit and integration tests to ensure code quality.',
      logo: '🧪',
    },
    {
      name: 'Vitest',
      description:
        'Vitest provides fast unit testing for Vite-based projects with excellent performance.',
      logo: '⚡',
    },
  ],
  principles: [
    {
      name: 'Web Accessibility',
      description:
        'I prioritize creating inclusive web experiences that are accessible to all users.',
      logo: '♿',
    },
    {
      name: 'Modular Architecture',
      description:
        'I design systems with modular components for better maintainability and scalability.',
      logo: '🧩',
    },
    {
      name: 'Separation of Concerns',
      description:
        'I organize code by separating different responsibilities for cleaner and more maintainable code.',
      logo: '📋',
    },
    {
      name: 'DRY Principle',
      description:
        'I avoid code duplication by creating reusable components and functions.',
      logo: '🔄',
    },
    {
      name: 'Single Responsibility',
      description:
        'Each component and function has a single, well-defined purpose.',
      logo: '🎯',
    },
    {
      name: 'Test-Driven Development',
      description:
        'I write tests first to ensure code quality and guide the development process.',
      logo: '✅',
    },
  ],
};

const StackSection = ({ title, items }: { title: string; items: any[] }) => (
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

export default function StackPage() {
  return (
    <section className='py-16 px-6 w-full bg-gray-50 min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-6 text-black'>Stack</h1>
        <p className='text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed'>
          I work with a dynamic stack of modern technologies to create
          efficient, scalable, and user-friendly web applications. My goal is to
          build solutions that are not only visually appealing but also
          optimized for performance, accessibility, and maintainability.
        </p>

        <StackSection title='Languages' items={stackData.languages} />
        <StackSection
          title='Frameworks & Libraries'
          items={stackData.frameworks}
        />
        <StackSection title='DevOps & Testing' items={stackData.devops} />
        <StackSection
          title='Engineering Principles'
          items={stackData.principles}
        />
      </div>
    </section>
  );
}
