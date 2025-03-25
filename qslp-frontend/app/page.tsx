// app/page.tsx
'use client'; // Enable client-side features if needed

import Link from 'next/link';

export default function HomePage() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Explore Quantum—For Everyone, From Anywhere</h1>

      {/* Example embedded video (YouTube) */}
      <div style={{ margin: '1rem 0' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WW7DKcrQ-7E"
          title="Quantum Intro Video"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        Welcome to our next-generation quantum learning platform. Dive into free papers,
        interactive tools, and community insights.
      </p>

      <div style={{ marginTop: '1rem' }}>
        <Link href="/learning">
          <button style={{ marginRight: '1rem' }}>Start Learning</button>
        </Link>
        <Link href="/courses">
          <button>Dive Deeper</button>
        </Link>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>See the Industry’s Quantum Future</h2>
        <p>
          <a
            href="https://science.osti.gov/-/media/QIS/pdf/DOE_QIS_Roadmap_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. DOE ROADMAP
          </a>{' '}
          |{' '}
          <a
            href="https://www.ibm.com/roadmaps/quantum.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            IBM Quantum Development Roadmap
          </a>
        </p>
      </div>
    </section>
  );
}