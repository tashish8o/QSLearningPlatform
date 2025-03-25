// app/community/page.tsx
'use client';

export default function CommunityPage() {
  return (
    <section>
      <h1>Community</h1>
      <p>Join discussions, ask questions, and share resources with fellow learners.</p>

      <div style={{ marginTop: '1rem' }}>
        <a
          href="https://discourse.example.com" // replace with actual forum link
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Our Forum
        </a>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h2>Upcoming Events</h2>
        <ul>
          <li>Women in AI Dinner - June 15</li>
          <li>Quantum Hackathon - July 3-5</li>
          <li>Research Workshops - August 20</li>
        </ul>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h2>Contribute</h2>
        <p>
          Submit research papers, share code, or write mini-tutorials. 
          Help us grow the quantum community.
        </p>
      </div>
    </section>
  );
}