import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.orb} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>

          {/* Badge de status */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>Disponível para oportunidades</span>
          </div>

          {/* Saudação */}
          <p className={styles.greeting}>Olá, eu sou</p>

          {/* Título */}
          <h1 className={styles.title}>
            {/* Substitua pelo seu nome! */}
            <span className={styles.name}>Isabelle Santana</span>
            <span className={styles.role}>Front-End Developer</span>
          </h1>

          {/* Descrição */}
          <p className={styles.description}>
            {/* Substitua pela sua apresentação! */}
            Desenvolvo interfaces modernas e acessíveis com React, Next.js e TypeScript.
            Apaixonada por transformar ideias em experiências digitais que fazem a diferença.
          </p>

          {/* Botões */}
          <div className={styles.actions}>
            <a href="#projetos" className={styles.btnPrimary}>
              Ver projetos →
            </a>
            <a href="#contato" className={styles.btnSecondary}>
              Fale comigo
            </a>
          </div>

          {/* Stack */}
          <div className={styles.stack}>
            <span className={styles.stackLabel}>Stack</span>
            <div className={styles.stackTags}>
              {['React', 'Next.js', 'TypeScript', 'CSS'].map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}