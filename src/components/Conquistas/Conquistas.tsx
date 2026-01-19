'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Conquistas.module.css';
import { FaCheckCircle, FaTrophy } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Conquistas() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title} ref={titleRef}>
          <FaTrophy className={styles.titleIcon} />
          O que você vai <span className={styles.titleHighlight}>conquistar:</span>
        </h2>

        <div className={styles.card} ref={cardRef}>
          <div className={styles.cardGlow}></div>
          <div className={styles.iconWrapper}>
            <FaCheckCircle className={styles.icon} />
          </div>
          <div className={styles.content}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Prescreva treinos para membros superiores com <strong>domínio técnico</strong>, segurança articular e lógica biomecânica — mesmo em alunos com dor ou instabilidade no ombro.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
