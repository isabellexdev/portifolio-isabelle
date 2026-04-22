// ===== TIPOS DO PORTFÓLIO =====

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'tools' | 'other';
  level: 'básico' | 'intermediário' | 'avançado';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}