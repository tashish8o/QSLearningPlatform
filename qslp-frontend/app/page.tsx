'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './page.module.css';
import { usePathname } from 'next/navigation';



// Dynamically import Slider from react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HomePage() {

  

const pathname = usePathname();

useEffect(() => {
  setAnimationKey(Date.now()); // regenerate key if route changes
}, [pathname]);
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

  let splashClass = styles.splashContainer;
  if (phase === 'fadeOut') {
    splashClass += ` ${styles.fadeOut}`;
  } else if (phase === 'done') {
    splashClass += ` ${styles.hideSplash}`;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Delay between slides (in milliseconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const events = [
    {
      image: '/welcome/events/qshackathon.png',
      title: 'Quantum-AI Hackathon 2025',
      description: 'A hackathon with 250 participants solving quantum challenges in partnership with Aiify.io and Fetch.ai.',
    },
    {
      image: '/welcome/events/llamaai.png',
      title: 'Llama AI Event in SF',
      description: 'Quantum Society participated in Llama AI Event in San Francisco',
    },
    {
      image: '/welcome/events/womeninai.png',
      title: 'Giga Party and Women in AI Brunch',
      description: 'Quantum Society participated in the Giga Party attracting 2000 people in the heart of San Francisco. Also, we cohosted a Women in Ai brunch a long with Founders Bay.',
    },
    {
      image: '/welcome/events/qconf.png',
      title: 'Global Quantum Conference',
      description: 'Quantum Society participated in the Q2B conference',
    },
    {
      image: '/welcome/events/japanconf.png',
      title: 'Lecture Series',
      description: 'Quantum Society hosted a lecture series in the Japanese Innovation center in Palo Alto.',
    }
  ];
  const [typedText, setTypedText] = useState("");
  const [animationKey, setAnimationKey] = useState(Date.now());
  
  useEffect(() => {
    const fullText = "For everyone, from anywhere";
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
  
    return () => clearInterval(interval);
  }, [animationKey]);
;

  return (
    <>
      {/* SPLASH SCREEN */}
      <div className={splashClass}>
        <div className={styles.splashContent}>
          <div className={styles.logo}>
            <img src="/welcome/qslogo.png" alt="Quantum Society Logo" className={styles.logoImg} />
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
          
        {/* COMBINED HERO & WELCOME SECTION */}
        <section className={styles.heroWelcomeSection}>
  <div className={styles.heroWelcomeOverlay}></div>
  <div key={animationKey} className={styles.heroWelcomeContent}>
    <h1 className={styles.animatedTitle}>EXPLORE QUANTUM</h1>
    <p className={styles.typingText}>
      {typedText}
      <span className={styles.cursor}>|</span>
    </p>
  </div>
</section>

          {/* VIDEO SECTION */}
          <section className={styles.videoSection}>
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/WW7DKcrQ-7E"
                title="Quantum Intro Video"
                allowFullScreen
                loading="lazy"
                style={{ border: 'none', width: '600px', height: '300px' }}
              ></iframe>
            </div>
          </section>

        {/* BUTTONS SECTION */}
                    <section className={styles.buttonSection}>
            <div className={styles.buttonGroup}>
              <Link href="/learning">
                <div className={styles.customButton}>
                  <span className={styles.defaultText}>Start Learning</span>
                  <span className={styles.hoverText}>
                    Curious to learn about Quantum? Awesome! Lets start from the basics.
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

          {/* MISSION & VISION SECTION */}
          <section className={styles.missionVisionSection}>
            <h2 className={styles.missionVisionTitle}>Welcome to Quantum Society</h2>
            <div style={{padding: "1rem", fontSize: "1.5rem"}}>

            Quantum Society is an ever-growing community of curious minds pushing the boundaries of quantum science. Join us to explore free research, interactive tools, and vibrant discussions that fuel the future of quantum technology

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

{/* OUR TEAM SECTION */}
<section className={styles.orgSection}>
  <h2 className={styles.orgTitle}>Our Team</h2>
  <div className={styles.orgMembers}>
    <a
      href="https://www.linkedin.com/in/antopatrex/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.member}
    >
      <img
        src="/welcome/team/anto.png"
        alt="Anto Patrex"
        className={styles.memberImg}
      />
      <h3 className={styles.memberName}>Anto Patrex</h3>
      <p className={styles.memberTitle}>Head of Technology</p>
    </a>

    <a
      href="https://www.linkedin.com/in/megan-kain/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.member}
    >
      <img
        src="/welcome/team/megan.png"
        alt="Megan Kain"
        className={styles.memberImg}
      />
      <h3 className={styles.memberName}>Megan Kain</h3>
      <p className={styles.memberTitle}>Head of Operation</p>
    </a>

    <a
      href="https://www.linkedin.com/in/danaekiaradiaz/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.member}
    >
      <img
        src="/welcome/team/kiara.png"
        alt="Kiara Diaz"
        className={styles.memberImg}
      />
      <h3 className={styles.memberName}>Kiara Diaz</h3>
      <p className={styles.memberTitle}>Head of Public Relations</p>
    </a>
  </div>
</section>

          {/* EVENTS CAROUSEL SECTION */}
          <section className={styles.eventsSection}>
            <h2 className={styles.eventsTitle}>Our Events</h2>
            <Slider {...sliderSettings}>
              {events.map((event, index) => (
                <div key={index} className={styles.eventItem}>
                  <img src={event.image} alt={event.title} className={styles.eventImage} />
                  <div className={styles.eventText}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDescription}>{event.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>

          {/* KEEP IN TOUCH SECTION */}
<section className={styles.keepInTouchSection}>
  <h2 className={styles.keepInTouchTitle}>Keep in Touch</h2>
  <div className={styles.socialLinks}>
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
  </div>
</section>








        </div>
      </main>
    </>
  );
}