import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <header>
    <div className='container'>
      <Link href='/'>
        <Image
          alt='Barnes Code logo'
          height={50}
          priority='true'
          quality={100}
          src='/logo.svg'
          width={140}
        />
      </Link>
    </div>
  </header>
);
