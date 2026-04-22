import { projects } from '@/data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={`${styles.projects} section`} id="projetos">
      <div className="container">

        <div className={styles.header}>
          <h2 className="section-title">
            Meus <span>Projetos</span>
          </h2>
          <p className={styles.subtitle}>
            Alguns dos projetos que desenvolvi — cada um com um problema real pra resolver.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>

              {/* Imagem */}
              <div className={styles.cardImage}>
                {project.imageUrl && (
                  <img src={project.imageUrl} alt={project.title} />
                )}

                {/* Overlay com links */}
                <div className={styles.cardOverlay}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlayLink}
                  >
                    GitHub →
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayLink}
                    >
                      Ver site →
                    </a>
                  )}
                </div>

                {/* Badge featured */}
                {project.featured && (
                  <span className={styles.featuredBadge}>Destaque</span>
                )}
              </div>

              {/* Conteúdo */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}