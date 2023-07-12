import Image from 'next/image';
import styles from '../styles/mission.module.scss';

export const Mission = () => (
  <section className={styles.mission}>
    <h2>Our mission</h2>
    <div className={styles.missionStrapline}>
      “Iterative, scalable software engineering”
    </div>
    <div className={styles.missionFancyBorder} />

    <ul>
      <li>
        <div className={styles.imageWrapper}>
          <Image
            alt='Software'
            height={132}
            priority='true'
            quality={100}
            src='/software.svg'
            width={132}
          />
        </div>
        <h3>Software</h3>
        <p>We build software and services that are easy to use and scale.</p>
      </li>
      <li>
        <div className={styles.imageWrapper}>
          <Image
            alt='Services'
            height={132}
            priority='true'
            quality={100}
            src='/services.svg'
            width={132}
          />
        </div>
        <h3>Services</h3>
        <p>We build software and services that are easy to use and scale.</p>
      </li>
      <li>
        <div className={styles.imageWrapper}>
          <Image
            alt='Products'
            height={132}
            priority='true'
            quality={100}
            src='/products.svg'
            width={132}
          />
        </div>
        <h3>Products</h3>
        <p>We build software and services that are easy to use and scale.</p>
      </li>
    </ul>
  </section>
);
