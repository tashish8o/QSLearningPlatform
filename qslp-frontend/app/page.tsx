// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './page.module.css';
import { usePathname } from 'next/navigation';
import Papa from 'papaparse';

// Dynamically import Slider from react-slick with SSR disabled
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function HomePage() {
  const pathname = usePathname();

  // regenerate typing animation on route change
  const [animationKey, setAnimationKey] = useState(Date.now());
  useEffect(() => {
    setAnimationKey(Date.now());
  }, [pathname]);

  // Splash phases: 'intro' | 'fadeOut' | 'done'
  const [phase, setPhase] = useState<'intro' | 'fadeOut' | 'done'>('intro');
  useEffect(() => {
    const seen = localStorage.getItem('hasSeenSplash');
    if (!seen) {
      localStorage.setItem('hasSeenSplash', 'true');
      const fadeOutTimer = setTimeout(() => setPhase('fadeOut'), 1500);
      const hideTimer = setTimeout(() => setPhase('done'), 2500);
      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(hideTimer);
      };
    } else {
      setPhase('done');
    }
  }, []);

  // compute splash container classes
  let splashClass = styles.splashContainer;
  if (phase === 'fadeOut') splashClass += ` ${styles.fadeOut}`;
  else if (phase === 'done') splashClass += ` ${styles.hideSplash}`;

    


// 2. Make sure your EventRow interface matches your sheet’s headers exactly:
interface EventRow {
  eventNumber: string;   // header: "EventID (qsxx)"
  title:       string;   // header: "Title"
  description: string;   // header: "Description"
  image:       string;   // header: "Image URL"
  link:        string;   // header: "Link"
}

// 3. Inside your HomePage component, replace or add the following:

// ─── State to hold parsed rows ─────────────────────────────────────────────────
const [events, setEvents] = useState<EventRow[]>([]);

// ─── Fetch & parse the CSV each time ─────────────────────────────────────────────
useEffect(() => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRy3a4cUvz5w3dYHbxKMhr1LxVKoJImOvn-PsS3RQ_Xgz_HPBnjuTBhondyD6_BYi6GvKxEZ4u00e7V/pub?output=csv";

  fetch(csvUrl)
    .then((res) => {
      if (!res.ok) throw new Error(`Fetch error: ${res.statusText}`);
      return res.text();
    })
    .then((csvText) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
const parsed: EventRow[] = (result.data as Record<string, string>[]).map((row) => {
  const rawImage = row["Image URL"]?.trim() ?? "";
  let imageUrl = "";

  // Try to extract FILE_ID from either "/d/FILE_ID/" or "id=FILE_ID"
  let match = rawImage.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (!match) {
    match = rawImage.match(/id=([a-zA-Z0-9_-]+)/);
  }
  if (match) {
    imageUrl = `https://drive.google.com/thumbnail?id=${match[1]}`;
  } else {
    imageUrl = rawImage;
  }

  return {
    eventNumber: row["EventID (qsxx)"]?.trim()   ?? "",
    title:       row["Title"]?.trim()            ?? "",
    description: row["Description"]?.trim()      ?? "",
    image:       imageUrl,
    link:        row["Link"]?.trim()             ?? "",
  };
});

console.log(parsed);

const filtered: EventRow[] = parsed.filter(ev => {
  return (
    ev.title.trim()       !== "" ||
    ev.description.trim() !== "" ||
    ev.image.trim()       !== ""
  );
});

setEvents(filtered);
        },
        error: (err) => console.error("CSV parse error:", err),
      });
    })
    .catch((err) => console.error("Failed to fetch CSV:", err));
}, []);

// ─── Slider settings (unchanged, for example) ──────────────────────────────────
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true } },
    { breakpoint: 600,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

  

  // Typing effect for hero subtitle
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const fullText = "Be Ready. Join the Movement.";
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [animationKey]);

  return (
    <>
      {/* SPLASH SCREEN */}
      <div className={splashClass}>
        <div className={styles.splashContent}>
          <div className={styles.logo}>
            <img
              src="/welcome/qslogo.png"
              alt="Quantum Society Logo"
              className={styles.logoImg}
            />
            <h1 className={styles.headerTitle}></h1>
          </div>
          <h1 className={styles.bigTagline}>
            Explore Quantum—For Everyone, From Anywhere.
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>

          {/* HERO & WELCOME */}
          <section className={styles.heroWelcomeSection}>
            <div className={styles.heroWelcomeOverlay}></div>
            <div key={animationKey} className={styles.heroWelcomeContent}>
              <h1 className={styles.animatedTitle}> The Quantum Revolution Is Coming.
          </h1>
              <p className={styles.typingText}>
                {typedText}
                <span className={styles.cursor}>|</span>
                <br/>
                <a href="/community" className={styles.joinButton}>Join</a>
              </p>
            </div>

          
          </section>




          {/* MISSION & VISION */}
          <section className={styles.missionVisionSection}>
            <h2 className={styles.missionVisionTitle}>Welcome to Quantum Society</h2>
            <div style={{ padding: '1rem', fontSize: '1.5rem' }}>
              Quantum Society is an ever-growing community of curious minds pushing the boundaries of quantum science. Join us for free research, interactive tools, and vibrant discussions that fuel the future of quantum technology.
            </div>
            <div className={styles.missionVisionFlex}>
              <div className={styles.mvBlock}>
                <img src="/welcome/mission.png" alt="Mission" className={styles.mvImage} />
                <h3 className={styles.mvHeading}>Mission</h3>
                <p className={styles.mvText}>
                  We bridge the frontiers of quantum and AI, driving quantum adoption across industries.
                </p>
              </div>
              <div className={styles.mvBlock}>
                <img src="/welcome/vision.png" alt="Vision" className={styles.mvImage} />
                <h3 className={styles.mvHeading}>Vision</h3>
                <p className={styles.mvText}>
                  A world where quantum technology and AI unite to solve humanity’s greatest challenges by democratizing access to quantum knowledge.
                </p>
              </div>
            </div>
          </section>

          {/* OUR TEAM */}
          <section className={styles.orgSection}>
            <h2 className={styles.orgTitle}>Our Team</h2>
            <div className={styles.orgMembers}>
              <a
                href="https://www.linkedin.com/in/antopatrex/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.member}
              >
                <img src="/welcome/team/anto.png" alt="Anto Patrex" className={styles.memberImg} />
                <h3 className={styles.memberName}>Anto Patrex</h3>
                <p className={styles.memberTitle}>Head of Technology</p>
              </a>

              <a
                href="https://www.linkedin.com/in/danaekiaradiaz/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.member}
              >
                <img src="/welcome/team/kiara.png" alt="Kiara Diaz" className={styles.memberImg} />
                <h3 className={styles.memberName}>Kiara Diaz</h3>
                <p className={styles.memberTitle}>Head of Public Relations</p>
              </a>

              <a
                href="https://www.linkedin.com/in/annaatlasova/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.member}
              >
                <img src="/welcome/team/anna.jpeg" alt="Anna Atlasova" className={styles.memberImg} />
                <h3 className={styles.memberName}>Anna Atlasova</h3>
                <p className={styles.memberTitle}>Head of Education & Research</p>
              </a>

            </div>
          </section>

                    {/* BUTTONS */}
          <section className={styles.buttonSection}>
            <h2 className={styles.missionVisionTitle}>Quantum Learning Hub</h2>
            <div style={{ paddingTop: '0rem', fontSize: '1.5rem' , paddingBottom: '1rem'}}>
              Build a foundation of quantum computing skills, and understand how to apply them in the real world.
            </div>
            <div className={styles.buttonGroup}>
              <Link href="/learning">
                <div className={styles.customButton}>
                  <span className={styles.defaultText}>Start Learning</span>
                  <span className={styles.hoverText}>
                    Curious to learn about Quantum? Awesome! Let’s start from the basics.
                  </span>
                </div>
              </Link>
              <Link href="/community">
                <div className={styles.customButton}>
                  <span className={styles.defaultText}>Join Us</span>
                  <span className={styles.hoverText}>
                    Connect with forward-thinking minds. Stay updated on the latest research, events, and news.
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/*Events*/}
            <section className={styles.eventsSection}>
              <h2 className={styles.eventsTitle}>Our Events</h2>
              <Slider {...sliderSettings}>
                {events.map((event, idx) => (
                  <div key={idx} className={styles.eventItem}>
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        className={styles.eventImage}
                      />
                    )}
                    <div className={styles.eventText}>
                      <h3 className={styles.eventTitle}>{event.title}</h3>
                      <p className={styles.eventDescription}>{event.description}</p>
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.eventLink}
                        >
                          More…
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </section>

          {/* FOLLOW US */}
          <section className={styles.keepInTouchSection}>
            <h2 className={styles.keepInTouchTitle}>Follow Us</h2>
            <div className={styles.socialLinks}>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/quantumsociety/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.75 7H7v7h2.25v-7zM8.12 6.75a1.31 1.31 0 1 0 0 2.62 1.31 1.31 0 0 0 0-2.62zM17 13.25c0-2.15-1.15-3.25-2.69-3.25-1.17 0-1.7.64-2 1.09v-.94H10v7h2.25v-3.89c.18-.32.57-.64 1.11-.64.74 0 1.14.48 1.14 1.38v3.15H17v-3.9z"/>
                </svg>
                LinkedIn
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/quantumsociety0/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2C4.57 2 2 4.58 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.42 22 16.25v-8.5C22 4.57 19.42 2 16.25 2h-8.5zm0 1.5h8.5c2.17 0 3.75 1.58 3.75 3.75v8.5c0 2.17-1.58 3.75-3.75 3.75h-8.5A3.76 3.76 0 0 1 4 16.25v-8.5C4 5.33 5.58 3.75 7.75 3.75zm4.25 3.25a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/>
                </svg>
                Instagram
              </a>
              
              {/* X */}
              <a
                href="https://x.com/quantumsociety0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  className={styles.socialIcon}
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
                X
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}