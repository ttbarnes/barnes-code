import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <header>
    <div className='container'>
      <Link href='/'>
        <Image
          alt='Barnes Code logo'
          height={90}
          quality={100}
          src='/logo.svg'
          width={180}
        />
      </Link>
    </div>
  </header>
);
