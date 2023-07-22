import PropTypes from 'prop-types';
import InlineErrorMessage from '../InlineErrorMessage';
import styles from './FormField.module.scss';

const VALID_INPUT_TYPES = ['text', 'email'];

const VALID_FIELD_TYPES = [...VALID_INPUT_TYPES, 'textarea'];

const FormField = ({
  id,
  type,
  label,
  register,
  validationError,
  defaultValue
}) => {
  if (!id || !type || !label) {
    return null;
  }

  const isValidFieldType = VALID_FIELD_TYPES.includes(type);

  if (!isValidFieldType) {
    return null;
  }

  return (
    <div className={styles.container}>
      <label
        htmlFor={id}
        data-testid={id}
      >
        {label}
      </label>

      <InlineErrorMessage
        text={validationError}
        id={id}
      />

      {VALID_INPUT_TYPES.includes(type) && (
        <input
          type={type}
          name={id}
          id={id}
          placeholder={label}
          {...register(id)}
          defaultValue={defaultValue}
        />
      )}

      {type === 'textarea' && (
        <textarea
          id={id}
          rows='5'
          {...register(id)}
          defaultValue={defaultValue}
        />
      )}
    
    </div>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validationError: PropTypes.string,
  defaultValue: PropTypes.string
};

FormField.defaultProps = {
  validationError: '',
  defaultValue: ''
};

export default FormField;
