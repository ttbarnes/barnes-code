import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <footer>
    <div className="container">
      <nav>
        <Link href="/">
          <Image
            alt="Barnes Code logo"
            height={20}
            priority="true"
            quality={100}
            src="/logo-footer.svg"
            width={200}
          />
        </Link>
      </nav>
      <p>&copy; Barnes Code Ltd. Company no: 09719405</p>
    </div>
  </footer>
);
