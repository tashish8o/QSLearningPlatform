// components/home/HeroSection.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

interface HeroProps {
  animationKey: number;
}

export default function HeroSection({ animationKey }: HeroProps) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const fullText = "For everyone, from anywhere";
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [animationKey]);

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        The Quantum Revolution Is Coming.
        <br />
        Be Ready. Join the Movement.
      </h1>
      <p className={styles.subtitle}>
        {typedText}
        <span className={styles.cursor}>|</span>
      </p>

      {/* ← corrected Link usage here */}
      <Link href="/community" className={styles.button}>
        Join
      </Link>
    </section>
  );
}