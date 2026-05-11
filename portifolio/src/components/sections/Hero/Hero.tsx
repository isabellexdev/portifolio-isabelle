import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-label="Apresentação">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <p className={`${styles.tag} animateFadeIn`}>&lt; Desenvolvedora Front-End Junior /&gt;</p>
        <h1 className={`${styles.name} animateFadeIn`}>Isabelle Santana</h1>
        <p className={`${styles.subtitle} animateFadeIn`}>
          Construo interfaces que transformam ideias em experiências coesas — com clareza, acessibilidade e intenção em cada detalhe.
        </p>
        <div className={`${styles.actions} animateFadeIn`}>
          <a href="#projetos" className={styles.btnPrimary}>
            Ver Projetos
          </a>
          <a href="#sobre" className={styles.btnSecondary}>
            Sobre Mim
          </a>
        </div>
      </div>
      <div className={styles.scrollWrap} aria-hidden="true">
        <span className={styles.scrollLabel}>scroll</span>
        <div className={`${styles.scrollDot} animateGlow`} />
      </div>
    </section>
  );
}
