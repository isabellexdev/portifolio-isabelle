import { BadgeCheck } from 'lucide-react';
import styles from './Certifications.module.css';

interface Certification {
  name: string;
  platform: string;
  year: string;
}

const certifications: Certification[] = [
  {
    name: '',
    platform: '',
    year: '',
  },
  {
    name: '',
    platform: '',
    year: '',
  },
  {
    name: '',
    platform: '',
    year: '',
  },
];

export default function Certifications() {
  return (
    <section className={styles.section} id="certificacoes" aria-labelledby="cert-heading">
      <div className="container">
        <h2 id="cert-heading" className={styles.heading}>
          Certificações
        </h2>
        <p className={styles.intro}>Cursos e certificados que marcam minha trajetória de estudos.</p>
        <ul className={styles.list}>
          {certifications.map((cert) => (
            <li key={cert.name} className={styles.card}>
              <BadgeCheck className={styles.icon} size={28} aria-hidden />
              <div className={styles.body}>
                <p className={styles.name}>{cert.name}</p>
                <p className={styles.meta}>
                  {cert.platform} · {cert.year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
