import styles from './Diferenciais.module.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function Diferenciais() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Diferenciais deste treinamento</h2>

        <div className={styles.item}>
          <FaCheckCircle className={styles.icon} />
          <p>Conceito exclusivo Core Spine – método simples e poderoso para máxima estabilidade</p>
        </div>

        <div className={styles.item}>
          <FaCheckCircle className={styles.icon} />
          <p>Conteúdo 100% aplicável — use na próxima sessão de treino</p>
        </div>

        <div className={styles.item}>
          <FaCheckCircle className={styles.icon} />
          <p>Acesso vitalício e atualizações contínuas</p>
        </div>

        <div className={styles.item}>
          <FaCheckCircle className={styles.icon} />
          <p>Certificação de valor – destaque seu currículo com credibilidade técnica</p>
        </div>
      </div>
    </section>
  );
}
