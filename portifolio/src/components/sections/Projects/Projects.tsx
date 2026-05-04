import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'Verde Factual',
    description: 'Portal de notícias ambientais com foco em informações factuais sobre o Brasil e suas regiões.',
    tags: ['Figma', 'HTML', 'CSS'],
    github: 'https://isatech07.github.io/Verde-Factual/',
    demo: 'https://www.figma.com/design/xfas45w1ZPjVqFyKcCGQo4/VERDE-FACTUAL-2025?node-id=1-22&t=vukvLFl8Cijg2fHV-1',
  },
  {
    title: 'Echomusic',
    description: 'Projeto desenvolvido durante o curso — plataforma musical com autenticação, comunidades e salas ao vivo para experiências compartilhadas.',
    tags: ['React', 'JavaScript', 'CSS', 'Node.js', 'Express'],
    github: 'https://github.com/camyf7/echomusic.git',
    demo: 'https://camyf7.github.io/echomusic/',
  },
  {
    title: 'Wave Care - Web',
    description: 'Projeto desenvolvido durante o curso — e-commerce de cuidados capilares com apresentação de produtos, kits e identidade visual consistente.',
    tags: ['React', 'Next.js', 'TypeScript', 'CSS', 'Nest.js', 'Prisma'],
    github: 'https://github.com/isatech07/wave-care.git',
    demo: '#',
  },
    {
    title: 'Wave Care - Mobile',
    description: 'Projeto desenvolvido durante o curso — aplicativo mobile de cuidados capilares com experiência fluida e identidade visual consistente.',
    tags: ['React-Native', 'Expo', 'TypeScript', 'CSS', 'Nest.js', 'Prisma'],
    github: 'https://github.com/isatech07/wave-care-mobile.git',
    demo: '#',
  },
  {
    title: 'Portfólio pessoal',
    description: 'Portfólio pessoal com estrutura em seções, formulário de contato e identidade visual consistente.',
    tags: ['React','Next.js', 'TypeScript'],
    github: 'https://github.com/isabellexdev/portifolio-isabelle.git',
    demo: '#',
  },
    {
    title: 'Papel & Ponto',
    description: 'Projeto desenvolvido durante o curso — e-commerce de papelaria com catálogo de produtos e identidade visual consistente.',
    tags: ['React','Next.js', 'Tailwind Css'],
    github: 'https://github.com/isatech07/papel---ponto.git',
    demo: '#',
  },
];


export default function Projects() {
  return (
    <section className={styles.projects} id="projetos" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className={styles.heading}>
          Projetos
        </h2>
        <p className={styles.intro}>
          Estes são alguns dos projetos que desenvolvi, destacando as tecnologias utilizadas e os desafios superados.
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.cardBar} aria-hidden />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    aria-label={`Repositório GitHub de ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    aria-label={`Demo ao vivo de ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
