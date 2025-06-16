// components/MissionVisionSection.tsx
import styles from './MissionVisionSection.module.css';

export default function MissionVisionSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Welcome to Quantum Society</h2>
      <p className={styles.intro}>
        Quantum Society is an ever-growing community of curious minds pushing the boundaries of quantum science. Join us for free research, interactive tools, and vibrant discussions that fuel the future of quantum technology.
      </p>
      <div className={styles.grid}>
        <div className={styles.block}>
          <img src="/welcome/mission.png" alt="Mission" className={styles.image} />
          <h3 className={styles.heading}>Mission</h3>
          <p className={styles.text}>
            We bridge the frontiers of quantum and AI, driving quantum adoption across industries.
          </p>
        </div>
        <div className={styles.block}>
          <img src="/welcome/vision.png" alt="Vision" className={styles.image} />
          <h3 className={styles.heading}>Vision</h3>
          <p className={styles.text}>
            A world where quantum technology and AI unite to solve humanity’s greatest challenges by democratizing access to quantum knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}