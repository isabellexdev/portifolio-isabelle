import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* Aqui você pode adicionar mais seções depois:
            <About />
            <Skills />
        */}
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid rgba(184, 163, 198, 0.1)',
        color: '#7A7A7A',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem'
      }}>
        Feito com 💜 por Isabelle Santana — {new Date().getFullYear()}
      </footer>
    </>
  );
}