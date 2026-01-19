'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Aprendizado.module.css';
import { FaCheckCircle, FaBookOpen, FaGift, FaCertificate } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Aprendizado() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

      const cards = containerRef.current?.querySelectorAll(`.${styles.card}`);
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <h2 className={styles.title} ref={titleRef}>
        <FaBookOpen className={styles.titleIcon} />
        O que você vai <span className={styles.titleHighlight}>aprender</span>
      </h2>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.card}>
          <div className={styles.cardNumber}>01</div>
          <div className={styles.iconWrapper}>
            <FaCheckCircle className={styles.icon} />
          </div>
          <div className={styles.content}>
            <h3>Módulo 1 – Fundamentos essenciais</h3>
            <ul>
              <li>Introdução ao curso e estrutura das aulas</li>
              <li>Shoulder Core: entenda profundamente a biomecânica da cintura escapular</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardNumber}>02</div>
          <div className={styles.iconWrapper}>
            <FaCheckCircle className={styles.icon} />
          </div>
          <div className={styles.content}>
            <h3>Módulo 2 – Análise técnica dos exercícios</h3>
            <ul>
              <li>Remada Horizontal</li>
              <li>Supino</li>
              <li>Levantamento Lateral</li>
              <li>Desenvolvimento Costas</li>
              <li>Barra Fixa</li>
              <li>Tríceps no Banco</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardBonus}`}>
          <div className={styles.bonusTag}>
            <FaGift /> BÔNUS
          </div>
          <div className={styles.iconWrapper}>
            <FaGift className={styles.icon} />
          </div>
          <div className={styles.content}>
            <h3>Bônus Exclusivo</h3>
            <p>Masterclass de Análise Biomecânica do Ombro.</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaCertificate className={styles.icon} />
          </div>
          <div className={styles.content}>
            <h3>Certificação Profissional</h3>
            <p>Certificado de conclusão reconhecido.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
