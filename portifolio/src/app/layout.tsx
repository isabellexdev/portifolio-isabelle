import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // Substitua com suas informações!
  title: 'Isabelle Santana | Front-End Developer',
  description: 'Portfólio de [Isabelle Santana] — Desenvolvedora Front-End especializada em React, Next.js e TypeScript.',
  keywords: ['front-end', 'react', 'next.js', 'typescript', 'portfólio', 'desenvolvedora'],
  authors: [{ name: 'Isabelle Santana' }],
  openGraph: {
    title: 'Isabelle Santana | Front-End Developer',
    description: 'Portfólio de [Isabelle Santana] — Desenvolvedora Front-End.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}