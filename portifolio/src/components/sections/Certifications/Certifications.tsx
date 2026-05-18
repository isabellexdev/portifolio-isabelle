"use client";
import styles from './Certifications.module.css';

interface Certification {
  name: string;
  platform: string;
  year: string;
  file: string;
}

const certifications: Certification[] = [
  {
    name: 'Linguagem de Programação: Criando Projetos Artísticos com JavaScript',
    platform: 'Alura',
    year: '2024',
    file: 'TANIA ISABELLE DA SILVA SANTANA - Unidade Linguagem de programação_ criando projetos artísticos com Javascript - Alura.pdf',
  },
  {
    name: 'Repositório Digital: Aprenda a Compartilhar seus Projetos',
    platform: 'Alura',
    year: '2024',
    file: 'TANIA ISABELLE DA SILVA SANTANA - Unidade Repositório digital_ aprenda a compartilhar seus projetos - Alura.pdf',
  },
  {
    name: 'Introdução à Computação: Ambientes e Ferramentas de Programação',
    platform: 'Alura',
    year: '2024',
    file: 'introducao-computacao-alura.pdf',
  },
  {
    name: 'Hackathon IFSP-SeTUR',
    platform: 'IFSP',
    year: '2025',
    file: 'Hackathon.pdf',
  },
  {
    name: 'Inglês Intermediário — EF Level 8 (CEFR B1)',
    platform: 'EF',
    year: '2025',
    file: 'EF Level 8 - Intermediate - CEFR Level B1.pdf',
  },
  {
    name: 'Planilhas: Analisando Dados sobre Acessibilidade',
    platform: 'Alura',
    year: '2026',
    file: 'TANIA ISABELLE DA SILVA SANTANA - Unidade Planilhas_ analisando dados sobre acessibilidade na sua comunidade parte 1 - Alura.pdf',
  },
  {
    name: 'Mídias Digitais: Sua Apresentação com AutorIA',
    platform: 'Alura',
    year: '2026',
    file: 'TANIA ISABELLE DA SILVA SANTANA - Unidade Mídias digitais_ sua apresentação com autorIA - Alura.pdf',
  },
];

export default function Certifications() {
  return (
    <section className={styles.section} id="certificacoes" aria-labelledby="cert-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="cert-heading" className={styles.heading}>Certificações</h2>
          <p className={styles.intro}>Cursos e certificados que marcam minha trajetória de estudos.</p>
        </div>

        <ul className={styles.grid}>
          {certifications.map((cert) => (
            <li key={cert.name} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.body}>
                  <p className={styles.name}>{cert.name}</p>
                  <p className={styles.meta}>{cert.platform} · {cert.year}</p>
                </div>
                <a
                  href={`/certificados/${cert.file}`}
                  download
                  className={styles.downloadBtn}
                  aria-label={`Baixar certificado: ${cert.name}`}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3v13M5 16l7 7 7-7" />
                    <line x1="3" y1="21" x2="21" y2="21" />
                  </svg>
                  Baixar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}