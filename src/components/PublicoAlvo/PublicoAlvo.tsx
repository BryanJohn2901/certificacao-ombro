import styles from './PublicoAlvo.module.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function PublicoAlvo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Para quem é este curso</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaCheckCircle className={styles.icon} />
            <p>Personal Trainers que evitam exercícios de carga axial por medo de dor lombar</p>
          </div>
          <div className={styles.card}>
            <FaCheckCircle className={styles.icon} />
            <p>Treinadores que atendem alunos com hérnias, protusões ou lombalgia crônica</p>
          </div>
          <div className={styles.card}>
            <FaCheckCircle className={styles.icon} />
            <p>Profissionais que querem se destacar com domínio técnico superior</p>
          </div>
          <div className={styles.card}>
            <FaCheckCircle className={styles.icon} />
            <p>Quem busca cobrar mais por possuir certificação reconhecida em coluna</p>
          </div>
        </div>
      </div>
    </section>
  );
}
