'use client';
import { useState } from 'react';
import styles from './EmailCapture.module.css';

  const ENDPOINT = 'https://sheetdb.io/api/v1/6dtqjxf39pe5s?sheet=Emails';  

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [msg,   setMsg]   = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('');

    if (!/^[\w-.]+@[\w-]+\.[\w-]+$/.test(email))
      return setMsg('Enter a valid email');

    const body = JSON.stringify({
      data: [{ Email: email, Timestamp: new Date().toISOString() }],
    });

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    })
      .then(() => { setMsg('🎉 You are all set! You have been signed up to the Quantum Society.'); setEmail(''); })
      .catch(() => setMsg('Error – try later'));
  }

  return (
    <>
      <form onSubmit={submit} className={styles.wrapper}>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Join
        </button>
      </form>

      {msg && (
        <p className={msg.startsWith('🎉') ? styles.ok : styles.err}>
          {msg}
        </p>
      )}
    </>
  );
}