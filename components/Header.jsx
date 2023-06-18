import Link from 'next/link';

export const Header = () => (
  <header>
    <Link href="/">Logo</Link>
    {/* Burger menu to go here instead */}
    <nav>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);
