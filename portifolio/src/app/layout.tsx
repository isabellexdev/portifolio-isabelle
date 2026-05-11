import type { Metadata } from 'next';
import { Bebas_Neue, Poppins } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Isabelle Santana',
  description:
    'Portfólio de Isabelle Santana — Desenvolvedora Front-End Junior com foco em React, Next.js e TypeScript.',
  keywords: ['front-end', 'react', 'next.js', 'typescript', 'portfólio', 'desenvolvedora'],
  authors: [{ name: 'Isabelle Santana' }],
  openGraph: {
    title: 'Isabelle Santana | Desenvolvedora Junior',
    description: 'Portfólio — desenvolvedora junior.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
