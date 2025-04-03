// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  const [phase, setPhase] = useState<'intro' | 'fadeOut' | 'done'>('intro');

  useEffect(() => {
    // Keep the splash visible for ~1.5s before starting fade
    const fadeOutTimer = setTimeout(() => {
      setPhase('fadeOut');
    }, 1500);

    // After another 1s, hide the splash
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
          <div className={styles.logo}>
            <img
              src="/image.png"
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

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* HERO SECTION: Tag Line and Video */}
          <section className={styles.heroSection}>
            <div className={styles.heroText}>
              <h1 className={styles.introTitle}>
                Explore Quantum—For Everyone, From Anywhere.
              </h1>
              {/* Hero subtext removed */}
            </div>
            <div className={styles.heroVideo}>
              <iframe
                src="https://www.youtube.com/embed/WW7DKcrQ-7E"
                title="Quantum Intro Video"
                allowFullScreen
                loading="lazy"
                style={{ border: 'none', width: '600px', height: '300px' }}
              ></iframe>
            </div>
          </section>

          {/* WELCOME SECTION */}
          <section className={styles.welcomeSection}>
            <h1 className={styles.welcomeMain}>Welcome to Quantum Society</h1>
            <p className={styles.welcomeSub}>
              We are an ever-growing community of curious minds pushing the boundaries of quantum science.
              Join us to explore free research, interactive tools, and vibrant discussions that fuel the future of quantum technology.
            </p>
          </section>

          {/* BUTTONS SECTION */}
          <section className={styles.buttonSection}>
            <div className={styles.buttonGroup}>
              <Link href="/learning">
                <div className={styles.customButton}>
                  <span className={styles.defaultText}>Start Learning</span>
                  <span className={styles.hoverText}>
                    Curious to learn about Quantum? Awesome! Let's start from the basics.
                  </span>
                </div>
              </Link>
              <Link href="/courses">
                <div className={styles.customButton}>
                  <span className={styles.defaultText}>Dive Deeper</span>
                  <span className={styles.hoverText}>
                    Already have your basics right? Dive Deeper into the future! Quantum Computing.
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* RESOURCES SECTION */}
          <section className={styles.resourcesSection}>
            <h2 className={styles.resourcesTitle}>Discover Industry Insights</h2>
            <div className={styles.resourcesLinks}>
              <a
                href="https://science.osti.gov/-/media/QIS/pdf/DOE_QIS_Roadmap_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                U.S. DOE ROADMAP to Quantum Advantage
              </a>
              <span className={styles.linkSeparator}>|</span>
              <a
                href="https://www.ibm.com/roadmaps/quantum.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IBM Quantum Development Roadmap
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}