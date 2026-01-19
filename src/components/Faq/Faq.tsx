'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Faq.module.css';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const perguntas = [
  {
    pergunta: 'Preciso ser formado em Educação Física?',
    resposta: 'Sim. A certificação é voltada a profissionais graduados ou estudantes no último ano.',
  },
  {
    pergunta: 'Recebo materiais prontos?',
    resposta: 'Sim. Você terá acesso à planilha principal e modelos de micro/mesociclos.',
  },
  {
    pergunta: 'O curso é 100% online?',
    resposta: 'Totalmente. Assista onde e quando quiser, com acesso vitalício.',
  },
  {
    pergunta: 'O curso é 100% online ou tem aulas presenciais?',
    resposta: 'O curso é totalmente online. Você poderá assistir às aulas no seu ritmo, em qualquer lugar e dispositivo, sem precisar interromper sua rotina diária de atendimentos.',
  },
  {
    pergunta: 'Quanto tempo dura o curso?',
    resposta: 'O tempo médio para conclusão do curso varia de acordo com seu ritmo pessoal, mas a maioria dos alunos conclui o curso em até duas semanas, estudando de forma tranquila e prática.',
  },
  {
    pergunta: 'Como posso me inscrever?',
    resposta: 'Basta clicar no botão de inscrição nesta página, preencher seus dados corretamente e confirmar sua vaga. Logo após a confirmação do pagamento, você terá acesso imediato às aulas, materiais complementares e comunidade exclusiva.',
  },
];

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <h2 className={styles.title} ref={titleRef}>
        <FaQuestionCircle className={styles.titleIcon} />
        Perguntas <span className={styles.titleHighlight}>frequentes</span>
      </h2>
      <div className={styles.container} ref={containerRef}>
        {perguntas.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${openIndex === index ? styles.cardActive : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className={styles.cardHeader}>
              <h3>{item.pergunta}</h3>
              <FaChevronDown className={`${styles.cardIcon} ${openIndex === index ? styles.cardIconActive : ''}`} />
            </div>
            <div className={`${styles.cardBody} ${openIndex === index ? styles.cardBodyOpen : ''}`}>
              <p>{item.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
