import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Bebas_Neue } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Expertise em Ombro | NextPTA',
  description: 'Domine a Biomecânica do Ombro e Prescreva Treinos Seguros, Fortes e Sem Dor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
