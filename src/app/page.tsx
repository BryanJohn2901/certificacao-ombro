'use client';

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import DorPromessa from '@/components/DorPromessa/DorPromessa';
import Conquistas from '@/components/Conquistas/Conquistas';
import Sobre from '@/components/Sobre/Sobre';
import Oferta from '@/components/Oferta/Oferta';
import Garantia from '@/components/Garantia/Garantia';
import Faq from '@/components/Faq/Faq';
import Footer from '@/components/Footer/Footer';
import Aprendizado from '@/components/Aprendizado/Aprendizado';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <DorPromessa />
      <Conquistas />
      <Aprendizado />
      <Sobre />
      <Oferta />
      <Garantia />
      <Faq />
      <Footer />
    </main>
  );
}
