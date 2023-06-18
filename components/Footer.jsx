import Link from 'next/link';

export const Footer = () => (
  <footer>
    <nav>
      <Link href="/">Logo</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    <p>&copy; Barnes Code Ltd. Company no: 09719405</p>
  </footer>
);
