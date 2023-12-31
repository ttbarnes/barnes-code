import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer>
    <div className={`container ${styles.container}`}>
      <nav>
        <Link href='/'>
          <Image
            alt='Barnes Code footer logo'
            height={20}
            quality={100}
            src='/logo-footer.svg'
            width={200}
          />
        </Link>
      </nav>

      <p className={styles.copy}>&copy; Barnes Code Ltd. Company no: 09719405</p>
    </div>
  </footer>
);
