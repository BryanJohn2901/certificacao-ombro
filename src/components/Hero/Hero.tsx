'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          videoRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.5)' },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.overlay}></div>
      <div className={styles.particles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title} ref={titleRef}>
          <span className={styles.titleLine}>Domine a Biomecânica do Ombro e</span>
          <span className={styles.titleHighlight}>Prescreva Treinos Seguros, Fortes e Sem Dor</span>
        </h1>
        <p className={styles.subtitle} ref={subtitleRef}>
          Elimine de vez a insegurança ao prescrever exercícios para ombros, torne-se referência técnica e transforme alunos sensíveis em cases de sucesso
        </p>

        <div className={styles.videoWrapper} ref={videoRef}>
          <div className={styles.videoGlow}></div>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/70qvhAF8oqQ"
              title="Vídeo de Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <a href="#comecar" className={`btn-premium ${styles.cta}`} ref={ctaRef}>
          <span>QUERO DOMINAR A MOBILIDADE NA PRÁTICA AGORA!</span>
          <span className={styles.ctaArrow}>→</span>
        </a>
      </div>
    </section>
  );
}
