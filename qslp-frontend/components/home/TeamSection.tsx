// components/TeamSection.tsx
import styles from './TeamSection.module.css';

const members = [
  { name: 'Anto Patrex', title: 'Head of Technology', img: '/welcome/team/anto.png', link: 'https://www.linkedin.com/in/antopatrex/' },
  { name: 'Megan Kain', title: 'Head of Operations', img: '/welcome/team/megan.png', link: 'https://www.linkedin.com/in/megan-kain/' },
  { name: 'Kiara Diaz', title: 'Head of Public Relations', img: '/welcome/team/kiara.png', link: 'https://www.linkedin.com/in/danaekiaradiaz/' },
];

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Team</h2>
      <div className={styles.members}>
        {members.map((m) => (
          <a key={m.name} href={m.link} target="_blank" rel="noopener noreferrer" className={styles.member}>
            <img src={m.img} alt={m.name} className={styles.image} />
            <h3 className={styles.name}>{m.name}</h3>
            <p className={styles.role}>{m.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}