import PropTypes from 'prop-types';
import TextLink from '../../components/TextLink';
import ContactForm from '../../components/ContactForm';
import { PAGES } from '../../content-strings';
import { CONTACT_EMAIL } from '../../constants';
import styles from '../../styles/contact.module.scss'; 

const {
  CONTACT: { PAGE_TITLE, INTRO }
 } = PAGES;

const ContactPage = ({ submittedValues }) => (
  <>
    <div className={styles.intro}>
      <div className={`container ${styles.container}`}>
        <h2>{PAGE_TITLE}</h2>

        <p className={styles.introCopy}>
          <span>{INTRO.FOR_MORE_INFORMATION}{' '}</span>
          <TextLink
            text={CONTACT_EMAIL}
            href={`mailto:${CONTACT_EMAIL}`}
          />
          <span>{' '}{INTRO.ALTERNATIVELY}</span>
        </p>

        <ContactForm submittedValues={submittedValues} />
      </div>
    </div>
  </>
);

ContactPage.propTypes = {
  submittedValues: PropTypes.shape({
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string
  })
};

ContactPage.defaultProps = {
  submittedValues: {}
};

export default ContactPage;
