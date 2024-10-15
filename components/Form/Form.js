import PropTypes from 'prop-types';

const Form = ({ children, name, onSubmit = null }) => (
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

export default Form;
