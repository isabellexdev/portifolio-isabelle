import { Project, Skill } from '@/types';

// ===== SEUS PROJETOS =====
// Substitua com seus projetos reais!

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nome do Projeto 1',
    description: 'Descrição curta e impactante do que o projeto faz e qual problema resolve.',
    technologies: ['React', 'TypeScript', 'Next.js'],
    imageUrl: '/images/project1.png',
    githubUrl: 'https://github.com/seuusuario/projeto1',
    liveUrl: 'https://projeto1.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Nome do Projeto 2',
    description: 'Descrição curta e impactante do que o projeto faz e qual problema resolve.',
    technologies: ['React', 'CSS', 'API REST'],
    imageUrl: '/images/project2.png',
    githubUrl: 'https://github.com/seuusuario/projeto2',
    liveUrl: 'https://projeto2.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Nome do Projeto 3',
    description: 'Descrição curta e impactante do que o projeto faz e qual problema resolve.',
    technologies: ['Next.js', 'TypeScript', 'CSS Modules'],
    imageUrl: '/images/project3.png',
    githubUrl: 'https://github.com/seuusuario/projeto3',
    featured: false,
  },
  {
    id: 4,
    title: 'Nome do Projeto 4',
    description: 'Descrição curta e impactante do que o projeto faz e qual problema resolve.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: '/images/project4.png',
    githubUrl: 'https://github.com/seuusuario/projeto4',
    liveUrl: 'https://projeto4.vercel.app',
    featured: false,
  },
];

// ===== SUAS SKILLS =====

export const skills: Skill[] = [
  { name: 'HTML5', category: 'frontend', level: 'avançado' },
  { name: 'CSS3', category: 'frontend', level: 'avançado' },
  { name: 'JavaScript', category: 'frontend', level: 'avançado' },
  { name: 'TypeScript', category: 'frontend', level: 'intermediário' },
  { name: 'React', category: 'frontend', level: 'avançado' },
  { name: 'Next.js', category: 'frontend', level: 'intermediário' },
  { name: 'Git', category: 'tools', level: 'intermediário' },
  { name: 'GitHub', category: 'tools', level: 'intermediário' },
  { name: 'VS Code', category: 'tools', level: 'avançado' },
  { name: 'Figma', category: 'tools', level: 'básico' },
];