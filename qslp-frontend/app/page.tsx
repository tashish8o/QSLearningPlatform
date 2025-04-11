'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './page.module.css';

// Dynamically import Slider from react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

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

  // Example events data; replace with your actual details
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
            <div className={styles.heroWelcomeContent}>
              <h1 className={styles.combinedTitle}>
                Explore Quantum—For Everyone, From Anywhere.
              </h1>
              <h2 className={styles.combinedSubtitle}>
                Welcome to Quantum Society
              </h2>
              <p className={styles.combinedDescription}>
                Quantum Society is an ever-growing community of curious minds pushing the boundaries of quantum science.
                Join us to explore free research, interactive tools, and vibrant discussions that fuel the future of quantum technology.
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

          {/* MISSION & VISION SECTION */}
          <section className={styles.missionVisionSection}>
            <h2 className={styles.missionVisionTitle}>About Quantum Society</h2>
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
              <div className={styles.member}>
                <img
                  src="/welcome/team/anto.png"
                  alt="Anto Patrex"
                  className={styles.memberImg}
                />
                <h3 className={styles.memberName}>Anto Patrex</h3>
                <p className={styles.memberTitle}>Head of Technology</p>
              </div>
              <div className={styles.member}>
                <img
                  src="/welcome/team/megan.png"
                  alt="Megan Kain"
                  className={styles.memberImg}
                />
                <h3 className={styles.memberName}>Megan Kain</h3>
                <p className={styles.memberTitle}>Head of Operation</p>
              </div>
              <div className={styles.member}>
                <img
                  src="/welcome/team/kiara.png"
                  alt="Kiara Diaz"
                  className={styles.memberImg}
                />
                <h3 className={styles.memberName}>Kiara Diaz</h3>
                <p className={styles.memberTitle}>Head of Public Relations</p>
              </div>
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








        </div>
      </main>
    </>
  );
}