import styles from './Skills.module.css';

interface SkillBar {
  name: string;
  percent: number;
}

const languages: SkillBar[] = [
  { name: 'JavaScript', percent: 90 },
  { name: 'TypeScript', percent: 80 },
];

const frameworks: SkillBar[] = [
  { name: 'React', percent: 85 },
  { name: 'Next.js', percent: 85 },
  { name: 'Node.js', percent: 70 },
  { name: 'Expo', percent: 70 },
  { name: 'Express', percent: 65 },
];

function SkillGroup({ title, items }: { title: string; items: SkillBar[] }) {
  return (
    <div className={styles.group}>
      <h3 className={styles.subheading}>{title}</h3>
      <ul className={styles.list}>
        {items.map((skill) => (
          <li key={skill.name} className={styles.item}>
            <div className={styles.row}>
              <span className={styles.name}>{skill.name}</span>
              <span className={styles.percent}>{skill.percent}%</span>
            </div>
            <div className={styles.track} role="presentation">
              <div className={styles.fill} style={{ width: `${skill.percent}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.skills} id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className={styles.heading}>
          Skills
        </h2>
        <p className={styles.intro}>
          Estas são as tecnologias que venho estudando e aplicando nos meus projetos,
          organizadas por nível de familiaridade.
        </p>
        <div className={styles.columns}>
          <SkillGroup title="Linguagens" items={languages} />
          <SkillGroup title="Frameworks & ferramentas" items={frameworks} />
        </div>
      </div>
    </section>
  );
}