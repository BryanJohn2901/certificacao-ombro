import styles from './Beneficios.module.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function Beneficios() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Benefícios imediatos após o curso</h2>

        <div className={styles.lista}>
          <div className={styles.item}>
            <FaCheckCircle className={styles.icon} />
            <p>Domínio técnico avançado da Core Spine (estabilidade lombo-pélvica)</p>
          </div>
          <div className={styles.item}>
            <FaCheckCircle className={styles.icon} />
            <p>Prescrição segura de agachamento, stiff e terra para alunos sensíveis</p>
          </div>
          <div className={styles.item}>
            <FaCheckCircle className={styles.icon} />
            <p>Correção prática das compensações (valgo dinâmico, retroversão pélvica, etc.)</p>
          </div>
          <div className={styles.item}>
            <FaCheckCircle className={styles.icon} />
            <p>Mais performance e menos risco de recaída de dor nas costas</p>
          </div>
          <div className={styles.item}>
            <FaCheckCircle className={styles.icon} />
            <p>Argumentos biomecânicos sólidos para justificar suas decisões técnicas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
