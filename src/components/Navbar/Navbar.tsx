'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
      <div className={styles.navbarInner}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.webp"
            alt="Logo"
            width={260}
            height={80}
            className={styles.logoImage}
          />
        </div>

        <Link href="#comecar" className={`btn-premium ${styles.button}`}>
          <span>COMEÇAR AGORA</span>
        </Link>
      </div>
    </header>
  );
}
