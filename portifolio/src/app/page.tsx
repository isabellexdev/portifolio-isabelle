import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Projects from '@/components/sections/Projects/Projects';
import Skills from '@/components/sections/Skills/Skills';
import Certifications from '@/components/sections/Certifications/Certifications';
import Contact from '@/components/sections/Contact/Contact';
import Footer from '@/components/sections/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
