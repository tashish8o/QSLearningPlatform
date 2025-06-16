// components/EventsSection.tsx
'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import styles from './EventsSection.module.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface EventRow {
  eventNumber: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, dots: true } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export default function EventsSection() {
  const [events, setEvents] = useState<EventRow[]>([]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRy3a4cUvz5w3dYHbxKMhr1LxVKoJImOvn-PsS3RQ_Xgz_HPBnjuTBhondyD6_BYi6GvKxEZ4u00e7V/pub?output=csv";

    fetch(csvUrl)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const parsed = (result.data as Record<string, string>[]).map((row) => {
              const raw = row["Image URL"]?.trim() ?? "";
              let imageUrl = "";
              const m1 = raw.match(/\/d\/([a-zA-Z0-9_-]+)/) || raw.match(/id=([a-zA-Z0-9_-]+)/);
              if (m1) imageUrl = `https://drive.google.com/thumbnail?id=${m1[1]}`;
              else imageUrl = raw;

              return {
                eventNumber: row["EventID (qsxx)"]?.trim() ?? "",
                title: row["Title"]?.trim() ?? "",
                description: row["Description"]?.trim() ?? "",
                image: imageUrl,
                link: row["Link"]?.trim() ?? "",
              };
            }).filter(ev => ev.title || ev.description || ev.image);

            setEvents(parsed);
          },
        });
      })
      .catch(console.error);
  }, []);

  return (
    <section className={styles.eventsSection}>
      <h2 className={styles.eventsTitle}>Our Events</h2>
      <Slider {...sliderSettings}>
        {events.map((ev, i) => (
          <div key={i} className={styles.eventItem}>
            {ev.image && <img src={ev.image} alt={ev.title} className={styles.eventImage} />}
            <div className={styles.eventText}>
              <h3 className={styles.eventTitle}>{ev.title}</h3>
              <p className={styles.eventDescription}>{ev.description}</p>
              {ev.link && (
                <a href={ev.link} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>
                  More…
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}