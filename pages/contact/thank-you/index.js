import { PAGES } from '../../../content-strings';
import styles from '../../../styles/contact.module.scss';

const {
  CONTACT_THANK_YOU: { PAGE_TITLE, BODY }
} = PAGES;

const ContactThankYouPage = () => (
  <>
    <div className={styles.intro}>
      <div className={`container ${styles.container}`}>
        <h2>{PAGE_TITLE}</h2>

        <p>{BODY}</p>
      </div>
    </div>
  </>
);
export default ContactThankYouPage;
