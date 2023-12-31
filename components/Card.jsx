import PropTypes from 'prop-types';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '../styles/card.module.scss';

export const Card = ({
  alt,
  children,
  className,
  icon,
  largeImage,
  title,
  customIconSize
}) => {
  let iconStyle = {};

  if (customIconSize?.width) {
    iconStyle.width = `${customIconSize.width}px`,
    iconStyle.height = `${customIconSize.height}px`;
  }

  return (
    <section
      className={classNames(styles.card, className ? styles[className] : '')}
    >
      <div className={styles.cardImage}>
        <Image alt={alt} width={960} height={960} quality={100} src={largeImage} />
      </div>
      <div className={styles.cardContent}>
        <h3>
          <Image
            alt={alt}
            width={customIconSize?.width ? customIconSize.width : 90}
            height={customIconSize?.height ? customIconSize.height : 90}
            quality={100}
            src={icon}
            style={iconStyle}
          />
          {title}
        </h3>
        {children}
      </div>
    </section>
  );
};

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
  ]).isRequired,
  customIconSize: PropTypes.object
};

Card.defaultProps = {
  className: '',
  icon: '',
  largeImage: ''
};
