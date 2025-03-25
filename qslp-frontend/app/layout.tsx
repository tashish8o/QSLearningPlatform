// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';  // We'll create a small CSS module for the header animation

export const metadata: Metadata = {
  title: 'Quantum Learning Platform',
  description: 'Explore Quantum—For Everyone, From Anywhere',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={styles.headerTitle}>Quantum Society</div>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/learning">Learning</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/community">Community</Link>
          </nav>
        </header>
        <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </main>
        <footer style={{ textAlign: 'center', padding: '1rem 0' }}>
          <p>© {new Date().getFullYear()} Quantum Society</p>
        </footer>
      </body>
    </html>
  );
}