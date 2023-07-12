import Image from 'next/image';
import styles from '../styles/process.module.scss';

export const Process = () => (
  <section className={styles.process}>
    <h2>Our processes</h2>
    <div className={styles.processStrapline}>
      “Iterative, scalable software engineering”
    </div>
    <div className={styles.processFancyBorder} />

    <ul>
      <li>
        <div className={styles.imageWrapper}>
          <Image
            alt='Listen and understand'
            height={132}
            priority='true'
            quality={100}
            src='/process-listen.svg'
            width={132}
          />
        </div>
        <h3>Listen and understand</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </li>
      <li>
        <div className={styles.imageWrapper}>
          <Image
            alt='Define MVP'
            height={132}
            priority='true'
            quality={100}
            src='/process-mvp.svg'
            width={132}
          />
        </div>
        <h3>Define MVP</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </li>
      <li>
        <div className={styles.imageWrapper}>
          <Image
            alt='Deliver'
            height={132}
            priority='true'
            quality={100}
            src='/process-deliver.svg'
            width={132}
          />
        </div>
        <h3>Deliver</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </li>
      <li>
        <div className={styles.imageWrapper}>
          <Image
            alt='Iterate'
            height={132}
            priority='true'
            quality={100}
            src='/process-iterate.svg'
            width={132}
          />
        </div>
        <h3>Iterate</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </li>
    </ul>
  </section>
);
