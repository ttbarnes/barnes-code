import PropTypes from 'prop-types';
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

Card.propTypes = {
  alt: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  largeImage: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
};

Card.defaultProps = {
  className: '',
  icon: '',
  largeImage: ''
};
