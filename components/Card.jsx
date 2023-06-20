import Image from 'next/image';
import classNames from 'classnames';
import styles from '../styles/card.module.scss';

export const Card = ({ alt, children, className, icon, largeImage, title }) => (
  <section
    className={classNames(styles.card, className ? styles[className] : '')}
  >
    <div className={styles.cardImage}>
      <Image
        alt={`${alt} image`}
        height={960}
        priority='true'
        quality={100}
        src={largeImage}
        width={960}
      />
    </div>
    <div className={styles.cardContent}>
      <h3>
        <Image
          alt={`${alt} icon`}
          height={90}
          priority='true'
          quality={100}
          src={icon}
          width={90}
        />
        {title}
      </h3>
      {children}
    </div>
  </section>
);
