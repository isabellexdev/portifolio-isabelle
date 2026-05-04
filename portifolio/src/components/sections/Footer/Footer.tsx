import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.logo}>Isabelle</p>
        <p className={styles.tagline}>
          Desenvolvido com <span aria-label="amor roxo">amor</span> por Isabelle Santana
        </p>
        <div className={styles.icons}>
          <a
            href="https://github.com/isabellexdev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/isabelle-santana-a043843b0/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:isabellexdev@gmail.com" className={styles.iconBtn} aria-label="E-mail">
            <Mail size={20} />
          </a>
        </div>
        <p className={styles.copy}>© {year} Isabelle Santana. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
