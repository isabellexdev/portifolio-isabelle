'use client';

import { FormEvent, useState } from 'react';
import { Github, Linkedin, Mail, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import styles from './Contact.module.css';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/isabellexdev',
    display: 'isabellexdev',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/isabelle-santana-a043843b0/',
    display: 'isabelle-santana',
  },
  {
    icon: Mail,
    label: 'E-mail',
    href: 'mailto:isabellexdev@gmail.com',
    display: 'isabellexdev@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/5512981096847',
    display: '+55 (12) 98109-6847',
  },
];

type Status = 'idle' | 'sending' | 'sent';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    };

    console.log('Contato:', payload);

    setTimeout(() => {
      setStatus('sent');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  }

  return (
    <section className={styles.contact} id="contato" aria-labelledby="contact-heading">
      {/* Fundo decorativo */}
      <div className={styles.bgGlow} aria-hidden />
        <div className="container">
          <div className={styles.header}>
            <h2 id="contact-heading" className={styles.heading}>
              Entre em <span className={styles.highlight}>contato</span>
            </h2>
            <p className={styles.subtitle}>
              Estou disponível para oportunidades de estágio, projetos freelance
              e conexões profissionais na área de tecnologia.
              <br />
              Será um prazer conversar com você.
            </p>
          </div>
        <div className={styles.grid}>
          {/* Coluna esquerda — canais */}
          <div className={styles.colText}>
            <p className={styles.cardLabel}>me encontre em</p>
            <ul className={styles.socials}>
              {socials.map(({ icon: Icon, label, href, display }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`${styles.socialLink} ${label === 'WhatsApp' ? styles.whatsapp : ''}`}
                  >
                    <span className={styles.socialIcon}>
                      <Icon size={18} aria-hidden />
                    </span>
                    <span className={styles.socialInfo}>
                      <span className={styles.socialLabel}>{label}</span>
                      <span className={styles.socialDisplay}>{display}</span>
                    </span>
                    <span className={styles.socialArrow}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita — formulário */}
          <div className={styles.formWrapper}>
            {status === 'sent' ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={40} />
                </div>
                <h3 className={styles.successTitle}>Mensagem enviada!</h3>
                <p className={styles.successText}>
                  Obrigada pelo contato. Responderei em breve. 💜
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={`${styles.field} ${focused === 'name' ? styles.fieldFocused : ''}`}>
                  <label className={styles.label} htmlFor="contact-name">
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Seu nome completo"
                    required
                    autoComplete="name"
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className={`${styles.field} ${focused === 'email' ? styles.fieldFocused : ''}`}>
                  <label className={styles.label} htmlFor="contact-email">
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="voce@email.com"
                    required
                    autoComplete="email"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className={`${styles.field} ${focused === 'message' ? styles.fieldFocused : ''}`}>
                  <label className={styles.label} htmlFor="contact-message">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Olá, Isabelle! Gostaria de conversar sobre..."
                    required
                    rows={5}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className={styles.spinner} aria-hidden />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}