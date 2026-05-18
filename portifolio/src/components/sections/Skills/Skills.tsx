'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  percent: number;
  icon: React.ReactNode;
}

const JavaScriptIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
    <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
    <path d="M9 24.5l2.3-1.4c.45.8.86 1.47 1.84 1.47.94 0 1.53-.37 1.53-1.8V14h2.83v8.83c0 2.97-1.74 4.32-4.28 4.32-2.3 0-3.63-1.19-4.22-2.65zM19.3 24.2l2.3-1.33c.6 1 1.39 1.73 2.77 1.73 1.16 0 1.9-.58 1.9-1.38 0-.96-.76-1.3-2.04-1.86l-.7-.3c-2.02-.86-3.36-1.94-3.36-4.22 0-2.1 1.6-3.7 4.1-3.7 1.78 0 3.06.62 3.98 2.24l-2.18 1.4c-.48-.86-1-1.2-1.8-1.2-.82 0-1.34.52-1.34 1.2 0 .84.52 1.18 1.72 1.7l.7.3c2.38 1.02 3.72 2.06 3.72 4.4 0 2.52-1.98 3.9-4.64 3.9-2.6 0-4.28-1.24-5.13-2.88z" fill="#333"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
    <rect width="32" height="32" rx="4" fill="#3178C6"/>
    <path d="M18.3 22.7v2.56c.42.21.91.37 1.49.47.57.1 1.18.15 1.82.15.62 0 1.21-.07 1.76-.2a4.1 4.1 0 0 0 1.4-.62c.4-.28.71-.64.93-1.08.22-.45.33-.98.33-1.6 0-.46-.07-.87-.2-1.22a2.8 2.8 0 0 0-.57-.93 3.96 3.96 0 0 0-.9-.72 8.6 8.6 0 0 0-1.2-.58 9.5 9.5 0 0 1-.84-.38 2.8 2.8 0 0 1-.54-.36 1.23 1.23 0 0 1-.29-.4.99.99 0 0 1-.1-.45c0-.15.04-.29.1-.41.07-.12.17-.22.3-.3.14-.09.3-.16.5-.2.19-.05.4-.07.64-.07.17 0 .35.01.54.04l.57.12c.19.05.38.12.55.2.18.08.33.17.47.27v-2.39a6.6 6.6 0 0 0-1.23-.3 9.12 9.12 0 0 0-1.52-.12c-.61 0-1.19.07-1.73.22a4.2 4.2 0 0 0-1.38.66c-.39.3-.69.66-.91 1.1-.22.44-.33.96-.33 1.55 0 .77.22 1.42.67 1.96.44.54 1.13 1 2.06 1.38.33.13.63.26.9.39.26.12.49.26.67.4.18.14.32.3.42.47.1.17.15.36.15.58 0 .15-.03.3-.1.43a.95.95 0 0 1-.3.33c-.13.09-.3.16-.5.21-.2.05-.44.08-.71.08-.46 0-.92-.08-1.38-.25a4.7 4.7 0 0 1-1.24-.74zM14.5 17.1H17V14.9H9v2.2h2.5V26h3V17.1z" fill="white"/>
  </svg>
);

const SQLIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
    <rect width="32" height="32" rx="4" fill="#336791"/>
    <ellipse cx="16" cy="9" rx="7" ry="3" fill="#fff" fillOpacity=".9"/>
    <path d="M9 9v5c0 1.66 3.13 3 7 3s7-1.34 7-3V9" stroke="#fff" strokeOpacity=".9" strokeWidth="1.5" fill="none"/>
    <path d="M9 14v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="#fff" strokeOpacity=".7" strokeWidth="1.5" fill="none"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
    <rect width="32" height="32" rx="4" fill="#20232A"/>
    <ellipse cx="16" cy="16" rx="3" ry="3" fill="#61DAFB"/>
    <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none"/>
    <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 16 16)"/>
    <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 16 16)"/>
  </svg>
);

const NextJsIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
    <rect width="32" height="32" rx="4" fill="#000"/>
    <defs>
      <linearGradient id="nextFade" x1="23" y1="11" x2="23" y2="23" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
    </defs>
    {/* Lado esquerdo e diagonal do N */}
    <path d="M9 23V9l13 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Lado direito com fade — detalhe icônico do logo */}
    <line x1="23" y1="9" x2="23" y2="23" stroke="url(#nextFade)" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);


const NodeJsIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
    <rect width="32" height="32" rx="4" fill="#215732"/>
    <path d="M16 6l9 5.2v10.4L16 27l-9-5.2V11.2L16 6z" fill="#83CD29"/>
    <path d="M16 10v12M11 12.7l5 2.9 5-2.9" stroke="#215732" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ExpoIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
    <rect width="32" height="32" rx="4" fill="#000020"/>
    <path d="M7 22c2-4 4-8 9-14 5 6 7 10 9 14" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
    <rect width="32" height="32" rx="4" fill="#F0F0F0"/>
    <text x="4" y="21" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#333">Ex</text>
    <path d="M4 24h24" stroke="#333" strokeWidth="1.2"/>
  </svg>
);

const allSkills: Skill[] = [
  { name: 'JavaScript', percent: 90, icon: <JavaScriptIcon /> },
  { name: 'TypeScript', percent: 80, icon: <TypeScriptIcon /> },
  { name: 'SQL', percent: 75, icon: <SQLIcon /> },
  { name: 'React', percent: 85, icon: <ReactIcon /> },
  { name: 'Next.js', percent: 85, icon: <NextJsIcon /> },
  { name: 'Node.js', percent: 70, icon: <NodeJsIcon /> },
  { name: 'Expo', percent: 70, icon: <ExpoIcon /> },
  { name: 'Express', percent: 65, icon: <ExpressIcon /> },
];

function CircularProgress({ percent }: { percent: number }) {
  const radius = 28;
  const stroke = 3.5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={radius * 2} height={radius * 2} className={styles.ring}>
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        fill="none"
        stroke="rgba(138, 92, 246, 0.18)"
        strokeWidth={stroke}
      />
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        fill="none"
        stroke="url(#purpleGrad)"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${radius} ${radius})`}
        className={styles.ringProgress}
      />
      <defs>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>{skill.icon}</div>
      <span className={styles.cardName}>{skill.name}</span>
      <div className={styles.ringWrap}>
        <CircularProgress percent={skill.percent} />
        <span className={styles.ringLabel}>{skill.percent}%</span>
      </div>
    </div>
  );
}

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const doubled = [...allSkills, ...allSkills];

  return (
    <section className={styles.skills} id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className={styles.heading}>Skills</h2>
        <p className={styles.intro}>
          Estas são as tecnologias que venho estudando e aplicando nos meus projetos,
          organizadas por nível de familiaridade.
        </p>
      </div>

      <div
        className={styles.carouselOuter}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className={styles.track}
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {doubled.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}