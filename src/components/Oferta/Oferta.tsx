'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Oferta.module.css';
import Image from 'next/image';
import { FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Oferta() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      const button = cardRef.current?.querySelector(`.${styles.botao}`);
      if (button) {
        gsap.to(button, {
          boxShadow: '0 0 40px var(--primary-glow), 0 0 80px var(--accent-glow)',
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="comecar" ref={sectionRef}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.container}>
        <h2 className={styles.alerta} ref={titleRef}>
          <FaClock className={styles.alertaIcon} />
          <span>Atenção: condição por <strong>tempo limitado</strong></span>
        </h2>

        <div className={styles.card} ref={cardRef}>
          <div className={styles.cardGlow}></div>
          
          <div className={styles.logoWrapper}>
            <Image src="/logo.webp" alt="Expertise em Ombro" width={280} height={90} className={styles.logo} />
          </div>

          <div className={styles.ofertaTag}>
            <span>🔥 Oferta Especial</span>
          </div>

          <div className={styles.precoWrapper}>
            <p className={styles.de}>
              de <span>R$ 297,00</span> por apenas
            </p>
            <p className={styles.preco}>
              <span className={styles.moeda}>R$</span>
              <span className={styles.valor}>47</span>
              <span className={styles.centavos}>,00</span>
            </p>
          </div>

          <ul className={styles.lista}>
            <li className={styles.listItem}>
              <FaCheckCircle className={styles.icone} />
              <span>Curso completo (3 módulos)</span>
            </li>
            <li className={styles.listItem}>
              <FaCheckCircle className={styles.icone} />
              <span>Planilha principal de montagem de treinos</span>
            </li>
            <li className={styles.listItem}>
              <FaCheckCircle className={styles.icone} />
              <span>Mini-curso de Treinamento Híbrido</span>
            </li>
            <li className={styles.listItem}>
              <FaCheckCircle className={styles.icone} />
              <span>Certificado Profissional</span>
            </li>
          </ul>

          <p className={styles.parcela}>
            <FaShieldAlt className={styles.parcelaIcon} />
            Parcelamento em até <strong>10x no cartão</strong>.
          </p>

          <a href="#comecar" className={`btn-premium ${styles.botao}`}>
            <span>QUERO GARANTIR A OFERTA</span>
            <span className={styles.botaoArrow}>→</span>
          </a>

          <div className={styles.pagamentoWrapper}>
            <Image src="/pagamento.webp" alt="Formas de pagamento" width={180} height={45} className={styles.pagamento} />
            <span className={styles.seguro}>🔒 Compra 100% segura</span>
          </div>
        </div>
      </div>
    </section>
  );
}
