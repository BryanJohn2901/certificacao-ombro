'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './DorPromessa.module.css';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function DorPromessa() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const chamadaRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll(`.${styles.card}`);
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      gsap.fromTo(
        chamadaRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: chamadaRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.container}>
        <div className={styles.badge}>
          <FaExclamationTriangle /> ATENÇÃO
        </div>
        <h2 className={styles.title} ref={titleRef}>
          Dor & <span className={styles.titleHighlight}>Promessa</span>
        </h2>
        <p className={styles.subtitle}>
          Você já evitou exercícios como desenvolvimento, remada pesada ou supino por medo de causar dor no ombro do seu aluno?
        </p>
        <p className={styles.subtitle}>Se você é Personal Trainer e já sentiu:</p>

        <div className={styles.cards} ref={cardsRef}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaCheckCircle className={styles.icon} />
            </div>
            <p>Medo ao aplicar supino, remadas ou desenvolvimento;</p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaCheckCircle className={styles.icon} />
            </div>
            <p>Insegurança sobre execução correta e postura;</p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaCheckCircle className={styles.icon} />
            </div>
            <p>
              Frustração ao ver seus alunos sem resultado porque o treino precisa ser leve e genérico.
            </p>
          </div>
        </div>

        <p className={styles.chamada} ref={chamadaRef}>
          <span className={styles.chamadaHighlight}>Chegou a hora de resolver isso!</span>
        </p>
      </div>
    </section>
  );
}
