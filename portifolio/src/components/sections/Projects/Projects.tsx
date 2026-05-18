'use client';

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  year: string;
  type: string;
}

const projects: Project[] = [
  {
    title: 'Verde Factual',
    description:
      'Portal de notícias ambientais com foco em informações factuais sobre o Brasil e suas regiões.',
    tags: ['Figma', 'HTML', 'CSS'],
    github: 'https://isatech07.github.io/Verde-Factual/',
    demo: 'https://www.figma.com/design/xfas45w1ZPjVqFyKcCGQo4/VERDE-FACTUAL-2025?node-id=1-22&t=vukvLFl8Cijg2fHV-1',
    year: '2025',
    type: 'Portal de Noticias Estático',
  },
  {
    title: 'Echomusic',
    description:
      'Plataforma musical com autenticação, comunidades e salas ao vivo para experiências compartilhadas.',
    tags: ['React', 'JavaScript', 'CSS', 'Node.js', 'Express'],
    github: 'https://github.com/camyf7/echomusic.git',
    demo: 'https://camyf7.github.io/echomusic/',
    year: '2025',
    type: 'Plataforma Musical',
  },
  {
    title: 'Wave Care — Web',
    description:
      'E-commerce de cuidados capilares com apresentação de produtos, kits e identidade visual consistente.',
    tags: ['React', 'Next.js', 'TypeScript', 'CSS', 'Nest.js', 'Prisma'],
    github: 'https://github.com/isatech07/wave-care.git',
    demo: '#',
    year: '2026',
    type: 'E-commerce de Cuidados Capilares',
  },
  {
    title: 'Wave Care — Mobile',
    description:
      'Aplicativo mobile de cuidados capilares com experiência fluida e identidade visual consistente.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Nest.js', 'Prisma'],
    github: 'https://github.com/isatech07/wave-care-mobile.git',
    demo: '#',
    year: '2026',
    type: 'Aplicativo Mobile de Cuidados Capilares',
  },
  {
    title: 'Portfólio Pessoal',
    description:
      'Portfólio pessoal com estrutura em seções, formulário de contato e identidade visual consistente.',
    tags: ['React', 'Next.js', 'TypeScript'],
    github: 'https://github.com/isabellexdev/portifolio-isabelle.git',
    demo: '#',
    year: '2026',
    type: 'Portfólio Pessoal (este site)',
  },
  {
    title: 'Papel & Ponto',
    description:
      'E-commerce de papelaria com catálogo de produtos e identidade visual consistente.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/isatech07/papel---ponto.git',
    demo: '#',
    year: '2026',
    type: 'Papelaria Online',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const { ref, inView } = useInView();
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && bodyRef.current) {
      setMaxHeight(`${bodyRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [open]);

  return (
    <div
      ref={ref}
      className={`${styles.row} ${inView ? styles.rowVisible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* index number */}
      <span className={styles.rowIndex}>{'0' + (index + 1)}</span>

      <button
        className={`${styles.rowHeader} ${open ? styles.rowHeaderOpen : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.rowTitle}>{project.title}</span>
        <span className={styles.rowMeta}>
          <span className={styles.rowType}>{project.type}</span>
          <span className={styles.rowYear}>{project.year}</span>
        </span>
        <span className={styles.rowArrow} aria-hidden>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 6.5L9 11.5L14 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div
        ref={bodyRef}
        className={styles.rowBody}
        style={{
          maxHeight,
        }}
        aria-hidden={!open}
      >
        <div className={styles.rowContent}>
          <p className={styles.rowDesc}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.links}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              <Github size={15} />
              Repositório
            </a>
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} ${styles.linkBtnAlt}`}
              >
                <ExternalLink size={15} />
                Ver Projeto
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headRef, inView: headIn } = useInView(0.2);

  return (
    <section className={styles.projects} id="projetos" aria-labelledby="projects-heading">
      <div className="container">
        <div ref={headRef} className={`${styles.header} ${headIn ? styles.headerVisible : ''}`}>
          <h2 id="projects-heading" className={styles.heading}>Projetos</h2>
          <p className={styles.intro}>
            Estes são alguns dos projetos que desenvolvi, destacando as tecnologias
            utilizadas e os desafios superados.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}