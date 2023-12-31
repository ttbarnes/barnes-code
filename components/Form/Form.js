import PropTypes from 'prop-types';

const Form = ({ children, onSubmit, name }) => (
  <form
    aria-label={`${name} form`}
    onSubmit={onSubmit}
    noValidate
    netlify='true'
  >
    {children}
  </form>
  );

Form.propTypes = {
  children: PropTypes.oneOfType([ 
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  onSubmit: null,
  action: '',
  method: ''
};

export default Form;
