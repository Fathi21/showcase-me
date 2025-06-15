
// --- DATA ---
const experiences = [
  {
    position: 'Frontend Developer',
    company: 'Tech Solutions Ltd',
    duration: 'Jan 2022 - Present',
    description: 'Worked on building responsive UI using React and Tailwind CSS based design systems.',
  },
  {
    position: 'Software Intern',
    company: 'DevWorks Inc.',
    duration: 'Jun 2021 - Dec 2021',
    description: 'Assisted in creating reusable React components and optimizing performance.',
  },
];

const projects = [
  {
    title: 'Music-player-UI',
    description: 'A personal developer portfolio built with React, TypeScript, and Tailwind.',
    tags: ['react', 'typescript', 'tailwind'],
    repo: 'https://github.com/Fathi21/Music-player-UI',
  },
  {
    title: 'Music-player-API',
    description: 'Backend API for a to-do list app using Node.js and Express.',
    tags: ['node', 'express', 'api'],
    repo: 'https://github.com/yourusername/task-api',
  },
    {
    title: 'Noglo-API',
    description: 'Backend API for a to-do list app using Node.js and Express.',
    tags: ['node', 'express', 'api'],
    repo: 'https://github.com/yourusername/task-api',
  },
    {
    title: 'Noglo-UI',
    description: 'Backend API for a to-do list app using Node.js and Express.',
    tags: ['node', 'express', 'api'],
    repo: 'https://github.com/yourusername/task-api',
  },
  {
    title: 'IQFaceoff-UI',
    description: 'A personal developer portfolio built with React, TypeScript, and Tailwind.',
    tags: ['react', 'typescript', 'tailwind'],
    repo: 'https://github.com/yourusername/task-api',
  },
  {
    title: 'IQFaceoff-API',
    description: 'A personal developer portfolio built with React, TypeScript, and Tailwind.',
    tags: ['react', 'typescript', 'tailwind'],
    repo: 'https://github.com/yourusername/task-api',
  },
  {
    title: 'CatVsDogs-AI-classifier',
    description: 'Backend API for a to-do list app using Node.js and Express.',
    tags: ['node', 'express', 'api'],
    repo: 'https://github.com/yourusername/task-api',
  },
  
];

const articles = [
  {
    title: 'Understanding React Hooks',
    summary: 'A deep dive into useState, useEffect, and custom hooks.',
    tags: ['react', 'hooks', 'frontend'],
  },
  {
    title: 'TypeScript for Beginners',
    summary: 'Learn the basics of TypeScript and how it helps large-scale projects.',
    tags: ['typescript', 'javascript', 'programming'],
  },
];

// --- COMPONENTS ---
import Sidebar from "@/components/portfolio/Sidebar";
import ExperienceCard from "@/components/portfolio/ExperienceCard";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ArticleCard from "@/components/portfolio/ArticleCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-start p-4 md:p-10 gap-6 bg-[hsl(225,16%,12%)]">
      {/* Sidebar/Profile */}
      <aside className="w-full max-w-xs md:sticky md:top-10 md:self-start mb-6 md:mb-0">
        <Sidebar />
      </aside>
      {/* Main content */}
      <main className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
        <section className="col-span-2">
          <h2 className="text-lg font-semibold mb-3 text-[hsl(220,14%,87%)]">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>
        </section>
        <section className="col-span-2">
          <h2 className="text-lg font-semibold mb-3 text-[hsl(220,14%,87%)]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projects.map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </div>
        </section>
        <section className="col-span-2">
          <h2 className="text-lg font-semibold mb-3 text-[hsl(220,14%,87%)]">Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {articles.map((art, i) => (
              <ArticleCard key={i} {...art} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
