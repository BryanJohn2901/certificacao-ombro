'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Garantia.module.css';
import Image from 'next/image';
import { FaShieldAlt, FaCheck } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Garantia() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
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
        <div className={styles.left} ref={leftRef}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <Image
              src="/07-DIAS-02.webp"
              alt="07 Dias de Garantia"
              width={0}
              height={0}
              sizes="100vw"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.right} ref={rightRef}>
          <div className={styles.badge}>
            <FaShieldAlt /> GARANTIA INCONDICIONAL
          </div>
          <p className={styles.heading}>
            Satisfação garantida ou seu <span className={styles.highlight}>dinheiro de volta</span>
          </p>
          <p className={styles.text}>
            Você tem 7 dias para avaliar todo o material. Caso não se identifique, basta enviar uma mensagem
            e devolvemos 100% do valor investido.
          </p>

          <ul className={styles.garantiaList}>
            <li><FaCheck className={styles.garantiaIcon} /> Reembolso total em até 7 dias</li>
            <li><FaCheck className={styles.garantiaIcon} /> Sem burocracia</li>
            <li><FaCheck className={styles.garantiaIcon} /> Satisfação garantida</li>
          </ul>

          <a href="#comecar" className={`btn-premium ${styles.button}`}>
            <span>Sim! Quero a Certificação!</span>
          </a>
        </div>
      </div>
    </section>
  );
}
