"use client";
import styles from './Hero.module.css';

const skills = [
  'React', 'Next.js', 'TypeScript', 'CSS Modules', 'UI Design',
  'Acessibilidade', 'JavaScript', 'Figma', 'React Native', 'Git','GitHub',
  'HTML5', 'Responsividade', 'UX Writing', 'Expo', 'Styled Components',
];

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
          <a href="#projetos" className={styles.btnPrimary}>Ver Projetos</a>
          <a href="#sobre" className={styles.btnSecondary}>Sobre Mim</a>
        </div>
      </div>

      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className={styles.marqueeItem}>
              {skill} <span className={styles.marqueeDiv}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}