'use client';

import styles from './Footer.module.css';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder}></div>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image src="/logo.webp" alt="Logo Personal Trainer Academy" width={260} height={80} className={styles.logo} />
          <p className={styles.tagline}>Transformando profissionais em referências</p>
        </div>

        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className={styles.socialLink} aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        <div className={styles.copySection}>
          <p className={styles.copy}>
            © 2024 Personal Trainer Academy. Todos os direitos reservados.
          </p>
          <p className={styles.madeWith}>
            Feito com <FaHeart className={styles.heart} /> para transformar carreiras
          </p>
        </div>
      </div>
    </footer>
  );
}
