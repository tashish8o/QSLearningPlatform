// components/VideoSection.tsx
export default function VideoSection() {
  return (
    <section style={{ padding: '2rem 0', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <iframe
          src="https://www.youtube.com/embed/WW7DKcrQ-7E"
          title="Quantum Intro Video"
          allowFullScreen
          loading="lazy"
          style={{ border: 'none', width: '100%', height: '300px' }}
        />
      </div>
    </section>
  );
}