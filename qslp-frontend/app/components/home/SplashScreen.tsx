// components/SplashScreen.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const [phase, setPhase] = useState<'intro' | 'fadeOut' | 'done'>('intro');

  useEffect(() => {
    const seen = localStorage.getItem('hasSeenSplash');
    if (!seen) {
      localStorage.setItem('hasSeenSplash', 'true');
      const fadeOutTimer = setTimeout(() => setPhase('fadeOut'), 1500);
      const hideTimer = setTimeout(() => setPhase('done'), 2500);
      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(hideTimer);
      };
    } else {
      setPhase('done');
    }
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={
        `${styles.splashContainer} ` +
        (phase === 'fadeOut' ? styles.fadeOut : '')
      }
    >
      <div className={styles.splashContent}>
        <div className={styles.logo}>
          <img
            src="/welcome/qslogo.png"
            alt="Quantum Society Logo"
            className={styles.logoImg}
          />
          <h1 className={styles.headerTitle}>Quantum Society</h1>
        </div>
        <h1 className={styles.bigTagline}>
          Explore Quantum—For Everyone, From Anywhere.
        </h1>
      </div>
    </div>
  );
}