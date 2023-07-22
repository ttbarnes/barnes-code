import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ text }) => (
  <div className={styles.button}>
    <button>{text}</button>
  </div>  
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
