'use client';

import EmailCapture from '@/app/components/home/EmailCapture';
import styles from './community.module.css';

export default function CommunityPage() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>Community</h1>

      <p className={styles.lead}>
        Join discussions, ask questions, and share resources with fellow learners.
      </p>

      {/* email-signup box */}
      <EmailCapture />

      {/* link to forum */}
      <div className={styles.spaceTop}>
        <a
          href="https://discourse.example.com"         // ← replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className={styles.forumLink}
        >
          Go to Our Forum →
        </a>
      </div>

      {/* Contribute section */}
      <section className={styles.spaceTop}>
        <h2 className={styles.subtitle}>Contribute</h2>
        <p className={styles.text}>
          Submit research papers, share code, or write mini-tutorials. Help us grow
          the quantum community.
        </p>
      </section>
    </main>
  );
}