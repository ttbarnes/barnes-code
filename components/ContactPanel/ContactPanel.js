import Link from 'next/link';
import { ROUTES } from '../../constants';
import infoStyles from '../../styles/info.module.scss';
import styles from './ContactPanel.module.scss';

export const ContactPanel = () => (
  <section
    className={`${infoStyles.info} ${styles.container}`}
  >
    <h2>Let{"'"}s create something <span>together</span></h2>

    <p>We{"'"}re always happy to talk.</p>

    <Link
      href={ROUTES.CONTACT}
      legacyBehavior
    >
      <a className='button-link inline white-bg large'>
        Get in touch
      </a>
    </Link>
  </section>
);

export default ContactPanel;
