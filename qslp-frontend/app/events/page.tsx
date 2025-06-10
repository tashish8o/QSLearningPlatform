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

export default function EventsPage() {
  const [events, setEvents] = useState<EventRow[]>([]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRy3a4cUvz5w3dYHbxKMhr1LxVKoJImOvn-PsS3RQ_Xgz_HPBnjuTBhondyD6_BYi6GvKxEZ4u00e7V/pub?output=csv";

    fetch(csvUrl)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data }) => {
            const parsed: EventRow[] = (data as Record<string, string>[]).map((row) => {
              // Same Google-Drive thumbnail logic as home page
              const rawImage = row["Image URL"]?.trim() ?? "";
              let imageUrl = rawImage;
              let match = rawImage.match(/\/d\/([a-zA-Z0-9_-]+)/) ??
                          rawImage.match(/id=([a-zA-Z0-9_-]+)/);
              if (match) imageUrl = `https://drive.google.com/thumbnail?id=${match[1]}`;

              return {
                eventNumber: row["EventID (qsxx)"]?.trim() ?? "",
                title:       row["Title"]?.trim()            ?? "",
                description: row["Description"]?.trim()      ?? "",
                image:       imageUrl,
                link:        row["Link"]?.trim()             ?? "",
              };
            });

            setEvents(parsed.filter(ev =>
              ev.title || ev.description || ev.image
            ));
          },
          error: (err) => console.error("CSV parse error:", err),
        });
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <Head>
        <title>Quantum Society · Events</title>
      </Head>

      <main className={styles.page}>
        <h1 className={styles.title}>Events</h1>

        <div className={styles.grid}>
          {events.map((ev) => (
            <article key={ev.eventNumber} className={styles.card}>
              {ev.image && (
                <img src={ev.image}
                     alt={ev.title}
                     loading="lazy"
                     className={styles.image}/>
              )}

              <div className={styles.body}>
                <h2 className={styles.cardTitle}>{ev.title}</h2>
                <p className={styles.desc}>{ev.description}</p>

                {ev.link && (
                  <a href={ev.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.more}>
                    More →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}