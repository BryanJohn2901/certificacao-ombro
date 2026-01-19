'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Sobre.module.css';
import Image from 'next/image';
import { FaAward, FaBook, FaUsers, FaPlay } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Sobre() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      const statItems = statsRef.current?.querySelectorAll(`.${styles.stat}`);
      if (statItems) {
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
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
      <div className={styles.container}>
        <div className={styles.texto} ref={textRef}>
          <div className={styles.badge}>
            <FaAward /> ESPECIALISTA
          </div>
          <h2 className={styles.titulo}>
            Quem é <span className={styles.tituloHighlight}>André Albuquerque?</span>
          </h2>
          <p className={styles.descricao}>
            Professor de Educação Física e Mestre em Biomecânica, André conecta com mais de 200 mil pessoas nas redes, é autor dos livros
            &quot;Biomecânica Aplicada à Reabilitação de Lesões&quot; e &quot;Biomecânica Prática no Exercício Físico&quot; e já formou 23 mil alunos.
            Especialista em aplicar biomecânica clínica no cotidiano do treino, agora traz o Expertise em Ombro para profissionais que
            querem dominar a dor no ombro.
          </p>

          <div className={styles.stats} ref={statsRef}>
            <div className={styles.stat}>
              <FaUsers className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>200k+</span>
                <span className={styles.statLabel}>Seguidores</span>
              </div>
            </div>
            <div className={styles.stat}>
              <FaAward className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>23k+</span>
                <span className={styles.statLabel}>Alunos formados</span>
              </div>
            </div>
            <div className={styles.stat}>
              <FaBook className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>14+</span>
                <span className={styles.statLabel}>Anos de experiência</span>
              </div>
            </div>
          </div>

          <a href="#comecar" className={`btn-premium ${styles.botao}`}>
            <FaPlay className={styles.btnIcon} />
            <span>QUERO EXPERIMENTAR AGORA</span>
          </a>
        </div>

        <div className={styles.imagem} ref={imageRef}>
          <div className={styles.imagemGlow}></div>
          <div className={styles.imagemBorder}>
            <Image src="/andre.webp" alt="André Albuquerque" width={400} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
