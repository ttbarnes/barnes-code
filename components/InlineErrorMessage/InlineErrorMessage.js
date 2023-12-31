import PropTypes from 'prop-types';
import styles from './InlineErrorMessage.module.scss';

const InlineErrorMessage = ({ id, text }) => {
  if (id && text) {
    return (
      <span className={`${styles.container} ${styles.containerActive}`}>
        <p
          className={styles.message}
          aria-live='assertive'
          data-testid={`inline-error-message-${id}`}
        >{text}</p>
      </span>
    );
  }

  return (
    <span className={`${styles.container} ${styles.containerInactive}`} />
  )
};

InlineErrorMessage.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default InlineErrorMessage;
