'use client';

import { FormEvent } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    };
    // Substituir por envio a API ou serviço (ex.: Formspree) quando disponível
    console.log('Contato:', payload);
  }

  return (
    <section className={styles.contact} id="contato" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className={styles.heading}>
          Contato
        </h2>
        <div className={styles.grid}>
          <div className={styles.colText}>
            <p className={styles.welcome}>
              Interessado em conversar sobre tecnologia, oportunidades de estágio ou um projeto? Envie uma mensagem — responderei assim que possível.
            </p>
            <ul className={styles.socials}>
              <li>
                <a
                  href="https://github.com/isabellexdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Github size={20} aria-hidden />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/isabelle-santana-a043843b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Linkedin size={20} aria-hidden />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="mailto:isabellexdev@gmail.com" className={styles.socialLink}>
                  <Mail size={20} aria-hidden />
                  <span>isabellexdev@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-name">
                Nome
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className={styles.input}
                placeholder="Seu nome"
                required
                autoComplete="name"
              />
            </div>
            <div className={styles.field}>
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
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-message">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                className={styles.textarea}
                placeholder="Escreva sua mensagem..."
                required
                rows={5}
              />
            </div>
            <button type="submit" className={styles.submit}>
              <Send size={18} aria-hidden />
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
