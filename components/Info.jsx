import Image from 'next/image';
import classNames from 'classnames';
import styles from '../styles/info.module.scss';

export const Info = ({ className, data, strapline, title }) => (
  <section
    className={classNames(styles.info, className ? styles[className] : '')}
  >
    <h2>{title}</h2>
    <div className={styles.infoStrapline}>{strapline}</div>
    <div className={styles.infoFancyBorder} />

    <ul>
      {data.map(({ imgPath, text, title }, index) => (
        <li key={index}>
          <div className={styles.imageWrapper}>
            <Image
              alt={title}
              height={132}
              priority='true'
              quality={100}
              src={imgPath}
              width={132}
            />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  </section>
);
