'use client';

import EmailCapture from '@/app/components/home/EmailCapture';
import styles from './join.module.css';

export default function JoinPage() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>Join Quantum Society</h1>
      <p className={styles.sub}>
        Receive a monthly newsletter on upcoming events and news about
        Quantum&nbsp;Computing and AI
      </p>

      <EmailCapture />   {/* same field + Join button you already use */}
    </main>
  );
}