// pages/events.tsx
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Papa from 'papaparse';
import styles from './events.module.css';

interface EventRow {
  eventNumber: string;   // "EventID (qsxx)"
  title:       string;   // "Title"
  description: string;   // "Description"
  image:       string;   // "Image URL"
  link:        string;   // "Link"
}

/* 1️⃣  Put your own published-CSV links here */
const UPCOMING_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRy3a4cUvz5w3dYHbxKMhr1LxVKoJImOvn-PsS3RQ_Xgz_HPBnjuTBhondyD6_BYi6GvKxEZ4u00e7V/pub?gid=0&single=true&output=csv';
const PAST_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRy3a4cUvz5w3dYHbxKMhr1LxVKoJImOvn-PsS3RQ_Xgz_HPBnjuTBhondyD6_BYi6GvKxEZ4u00e7V/pub?gid=16807311&single=true&output=csv';

/* ─ helper to map a row exactly like on Home page ─ */
function mapRow(row: Record<string, string>): EventRow {
  const rawImage = row['Image URL']?.trim() ?? '';
  const match    = rawImage.match(/\/d\/([a-zA-Z0-9_-]+)/) ??
                   rawImage.match(/id=([a-zA-Z0-9_-]+)/);
  const imgUrl   = match
    ? `https://drive.google.com/thumbnail?id=${match[1]}`
    : rawImage;

  return {
    eventNumber: row['EventID (qsxx)']?.trim() ?? '',
    title:       row['Title']?.trim()         ?? '',
    description: row['Description']?.trim()   ?? '',
    image:       imgUrl,
    link:        row['Link']?.trim()          ?? '',
  };
}

export default function EventsPage() {
  const [upcoming, setUpcoming] = useState<EventRow[]>([]);
  const [past,     setPast]     = useState<EventRow[]>([]);

  useEffect(() => {
    async function fetchSheet(csvUrl: string) {
      const txt  = await fetch(csvUrl).then(r => r.text());
      return new Promise<EventRow[]>((resolve) => {
        Papa.parse(txt, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data }) => resolve(
            (data as Record<string, string>[]).map(mapRow)
                  .filter(ev => ev.title || ev.description || ev.image)
          ),
        });
      });
    }

    Promise.all([fetchSheet(UPCOMING_CSV), fetchSheet(PAST_CSV)])
      .then(([up, pa]) => { setUpcoming(up); setPast(pa); })
      .catch(err => console.error('CSV fetch error:', err));
  }, []);

  /* ─ little helper to render a card ─ */
  function renderCardUp(ev: EventRow) {
    return (
      <article key={ev.eventNumber} className={styles.card}>
        {ev.image && (
          <img src={ev.image} alt={ev.title}
               loading="lazy" className={styles.image} />
        )}

        <div className={styles.body}>
          <h2 className={styles.cardTitle}>{ev.title}</h2>
          <p className={styles.desc}>{ev.description}</p>

          {ev.link && (
            <a href={ev.link}
               target="_blank"
               rel="noopener noreferrer"
               className={styles.more}>
              Register
            </a>
          )}
        </div>
      </article>
    );
  }

    function renderCardPast(ev: EventRow) {
    return (
      <article key={ev.eventNumber} className={styles.card}>
        {ev.image && (
          <img src={ev.image} alt={ev.title}
               loading="lazy" className={styles.image} />
        )}

        <div className={styles.body}>
          <h2 className={styles.cardTitle}>{ev.title}</h2>
          <p className={styles.desc}>{ev.description}</p>

          {ev.link && (
            <a href={ev.link}
               target="_blank"
               rel="noopener noreferrer"
               className={styles.more}>
              Learn more
            </a>
          )}
        </div>
      </article>
    );
  }

  return (
    <>
      <Head>
        <title>Quantum Society · Events</title>
      </Head>

      <main className={styles.page}>
        <h1 className={styles.title}>Events</h1>

        {/* Upcoming section */}
        <h2 className={styles.blockTitle}>Upcoming Events</h2>
        <div className={styles.grid}>
          {upcoming.length ? upcoming.map(renderCardUp)
                           : <p>No upcoming events yet.</p>}
        </div>

        {/* Past section */}
        <h2 className={styles.blockTitle} style={{ marginTop: '3rem' }}>
          Past Events
        </h2>
        <div className={styles.grid}>
          {past.length ? past.map(renderCardPast)
                       : <p>No past events listed.</p>}
        </div>
      </main>
    </>
  );
}