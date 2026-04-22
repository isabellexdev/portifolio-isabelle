'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Substitua YOUR_FORM_ID pelo ID do Formspree (formspree.io)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={`${styles.contact} section`} id="contato">
      <div className="container">
        <div className={styles.inner}>

          {/* Info */}
          <div className={styles.info}>
            <h2 className="section-title">
              Vamos <span>conversar?</span>
            </h2>
            <p className={styles.subtitle}>
              Estou em busca de oportunidades como Jovem Aprendiz ou Estágio em TI.
              Me manda uma mensagem — adoro conhecer pessoas e projetos novos!
            </p>

            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/isabelle-santana-a043843b0/" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span className={styles.socialIcon}>in</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/isabellexdev" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span className={styles.socialIcon}>gh</span>
                GitHub
              </a>
              <a
                href="mailto:seuemail@email.com" /* Substitua */
                className={styles.socialLink}
              >
                <span className={styles.socialIcon}>@</span>
                isabellexdev@gmail.com
              </a>
            </div>
          </div>

          {/* Formulário */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                placeholder="Seu nome"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="seu@gmail.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Olá! Gostaria de..."
                required
              />
            </div>

            {status === 'success' && (
              <p className={styles.successMessage}>
                ✓ Mensagem enviada! Responderei em breve.
              </p>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensagem →'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}