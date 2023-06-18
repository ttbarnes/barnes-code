import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Image
        src="/bg.jpg"
        alt="Landscape picture of a lake and shooting star"
        width={1000}
        height={1000}
        quality={100}
        priority="true"
        style={{
          opacity: '.35',
        }}
        aria-hidden
        className={styles.image}
      />

      <div className={styles.content}>
        <h1 aria-label="Barnes Code">
          <Image
            src="/logo.svg"
            alt="Barnes Code logo"
            width={1000}
            height={1000}
            quality={100}
            priority="true"
            className={styles.logo}
          />
        </h1>

        <p className={styles.tagline}>Creative software engineering</p>

        <p>
          <Link href="mailto:hello@barnescode.co.uk?subject=Hello Barnes Code">
            <span className={styles.button}>
              Tell us what you want to build
            </span>
          </Link>
        </p>
      </div>
    </>
  );
}
