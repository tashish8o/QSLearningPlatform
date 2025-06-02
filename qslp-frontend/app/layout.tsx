// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Quantum Learning Platform',
  description: 'Explore Quantum—For Everyone, From Anywhere',
  // Optionally add viewport info here (Next.js 13+)
  // Instead of manually placing meta tags, you can do:
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Link href="/">
          <div className={styles.logo}>
            <img
              src="/welcome/qslogo.png"
              alt="Quantum Society Logo"
              className={styles.logoImg}
            />
            <div className={styles.headerTitle}>Quantum Society</div>
          </div>
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/learning">Learning</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/community">Community</Link>
          </nav>
        </header>

        <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </main>

        <footer style={{ textAlign: 'center', padding: '1rem 0' }}>
          <p>© {new Date().getFullYear()} Quantum Society</p>
        </footer>
      </body>
    </html>
  );
}
