// components/FollowUsSection.tsx
import styles from './FollowUsSection.module.css';

const channels = [
  { name: 'Twitter', url: 'https://twitter.com/quantumsociety0', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46…"/></svg>
    )
  },
  { name: 'Instagram', url: 'https://www.instagram.com/quantumsociety0/', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.75…"/></svg>
    )
  },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/quantumsociety/posts/?feedView=all', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19…"/></svg>
    )
  },
];

export default function FollowUsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Follow Us</h2>
      <div className={styles.links}>
        {channels.map((ch) => (
          <a key={ch.name} href={ch.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {ch.icon}
            <span>{ch.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}