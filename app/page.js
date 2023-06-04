import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <div className={styles.grid}>
          <a
            href='https://www.instagram.com/youngun.in/'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'>
            <h2>
              Just like any good joke, we need some time to get this up and
              running
            </h2>
            <br />
            <br />
            <p>
              However you can reach out to us <span>-&gt;</span> @youngun.in
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
