import { Download, BookOpen, Brain, Clock } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="sobre" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className={styles.heading}>Sobre mim</h2>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <p className={styles.paragraph}>Olá! Eu sou a Isabelle 👋</p>
            <p className={styles.paragraph}>
              Sou <span className={styles.highlight}>desenvolvedora front-end júnior</span>, apaixonada por tecnologia, design e por transformar ideias em experiências digitais funcionais e intuitivas.
            </p>
            <p className={styles.paragraph}>
              Atualmente, estou focada no desenvolvimento de interfaces modernas, responsivas e bem estruturadas, utilizando tecnologias como <span className={styles.highlight}>React</span> e <span className={styles.highlight}>Next.js</span>. Também venho explorando cada vez mais ferramentas e boas práticas para criar projetos mais profissionais, organizados e interativos.
            </p>
            <p className={styles.paragraph}>
              Gosto de unir estética e funcionalidade — não apenas fazer algo bonito, mas garantir que seja fácil de usar e realmente útil para quem acessa.
            </p>
            <p className={styles.paragraph}>
              Estou em constante aprendizado, buscando evoluir minhas habilidades e construir projetos que reflitam minha criatividade, dedicação e crescimento na área de desenvolvimento.
            </p>
            <p className={styles.paragraph}>Seja bem-vindo(a) ao meu portfólio!</p>

            <a              
              href="/curriculo.pdf"
              download
              className={styles.cvBtn}
              aria-label="Baixar currículo">
              <Download size={18} />
              Baixar Currículo
            </a>
          </div>

          <aside className={styles.card} aria-label="Resumo">
            <p className={styles.cardTitle}>Em números</p>
            <ul className={styles.stats}>
              <li className={styles.statItem}>
                <Clock size={20} className={styles.statIcon} />
                <div>
                  <span className={styles.statValue}>1+</span>
                  <span className={styles.statLabel}>ano estudando dev</span>
                </div>
              </li>
              <li className={styles.statItem}>
                <BookOpen size={20} className={styles.statIcon} />
                <div>
                  <span className={styles.statValue}>100%</span>
                  <span className={styles.statLabel}>dedicação aos estudos</span>
                </div>
              </li>
              <li className={styles.statItem}>
                <Brain size={20} className={styles.statIcon} />
                <div>
                  <span className={styles.statValue}>∞</span>
                  <span className={styles.statLabel}>curiosidade por aprender</span>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}