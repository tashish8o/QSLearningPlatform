// components/ButtonSection.tsx
'use client';

import Link from 'next/link';
import styles from './ButtonSection.module.css';

export default function ButtonSection() {
  return (
    <section className={styles.buttonSection}>
      <div className={styles.buttonGroup}>
        <Link href="/learning">
          <div className={styles.customButton}>
            <span className={styles.defaultText}>Start Learning</span>
            <span className={styles.hoverText}>
              Curious to learn about Quantum? Awesome! Let’s start from the basics.
            </span>
          </div>
        </Link>
        <Link href="/courses">
          <div className={styles.customButton}>
            <span className={styles.defaultText}>Dive Deeper</span>
            <span className={styles.hoverText}>
              Already know the basics? Dive deeper into the future of Quantum Computing.
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}