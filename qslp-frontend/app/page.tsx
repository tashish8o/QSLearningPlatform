// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  const [phase, setPhase] = useState<'intro' | 'fadeOut' | 'done'>('intro');

  useEffect(() => {
    // 1) Keep the splash visible for ~1.5s before starting fade
    const fadeOutTimer = setTimeout(() => {
      setPhase('fadeOut');
    }, 1500);

    // 2) After another 1s, hide the splash
    const hideTimer = setTimeout(() => {
      setPhase('done');
    }, 2500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Build container classes
  let splashClass = styles.splashContainer;
  if (phase === 'fadeOut') {
    splashClass += ` ${styles.fadeOut}`;
  } else if (phase === 'done') {
    splashClass += ` ${styles.hideSplash}`;
  }

  return (
    <>
      {/* SPLASH SCREEN */}
      <div className={splashClass}>
        <div className={styles.splashContent}>
          {/* Logo from your layout */}
          <div className={styles.logo}>
            <img
              src="/image.png"
              alt="Quantum Society Logo"
              className={styles.logoImg}
            />
            <h1><div className={styles.headerTitle}>Quantum Society</div> </h1>
          </div>

          {/* Big tagline in the splash */}
          <h1 className={styles.bigTagline}>
            Explore Quantum—For Everyone, From Anywhere.
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT FADES IN */}
      <section className={styles.mainContent}>
        <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          {/* If you want the tagline again in final page, replicate here */}
          <h1 style={{ marginBottom: '1rem' }}>
            Explore Quantum—For Everyone, From Anywhere.
          </h1>

          <div style={{ marginBottom: '1rem' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WW7DKcrQ-7E"
              title="Quantum Intro Video"
              allowFullScreen
              style={{ border: 'none', maxWidth: '100%' }}
            ></iframe>
          </div>

          <p style={{ marginBottom: '1.5rem', lineHeight: '1.5' }}>
            Welcome to our next-generation quantum learning platform—your gateway
            to free papers, interactive tools, and a vibrant community.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <Link href="/learning">
              <button style={{ marginRight: '1rem' }}>Start Learning</button>
            </Link>
            <Link href="/courses">
              <button>Dive Deeper</button>
            </Link>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2>See the Industry’s Quantum Future</h2>
            <p style={{ margin: '0.5rem 0' }}>
              <a
                href="https://science.osti.gov/-/media/QIS/pdf/DOE_QIS_Roadmap_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                U.S. DOE ROADMAP to Quantum Advantage
              </a>
              {' '}|{' '}
              <a
                href="https://www.ibm.com/roadmaps/quantum.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IBM Quantum Development Roadmap
              </a>
            </p>
          </div>

          <div>
            <h3>What’s Inside:</h3>
            <ul
              style={{
                marginTop: '0.5rem',
                listStyle: 'disc',
                display: 'inline-block',
                textAlign: 'left',
              }}
            >
              <li>Free papers summarizing the latest quantum breakthroughs</li>
              <li>Interactive tools to experiment with quantum circuits</li>
              <li>A collaborative community for Q&amp;A and code sharing</li>
              <li>Step-by-step tutorials from basic qubits to advanced algorithms</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}