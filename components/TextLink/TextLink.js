import PropTypes from 'prop-types';
import styles from './TextLink.module.scss';

const TextLink = ({ text, href }) => {
  return (
    <a
      href={href}
      className={styles.link}
    >
      {text}
    </a>
  );
};

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default TextLink;
