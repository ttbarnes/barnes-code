import Image from 'next/image';
import { Card } from '../components/Card';
import { Info } from '../components/Info';
import { MISSION, PROCESS, TEXT } from '../constants';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.intro}>
        <div className='container'>
          <h2>Creative software engineering</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            <br />
            elit, sed do eiusmod tempor
          </p>
          <button>
            <Image
              alt='Scroll arrow'
              height={45}
              priority='true'
              quality={100}
              src='/scroll-arrow.svg'
              width={95}
            />
          </button>
        </div>
      </div>

      <Info
        data={MISSION}
        strapline='“Iterative, scalable software engineering”'
        title='Our mission'
      />

      <Card
        alt='User research'
        icon='/user-research.svg'
        largeImage='/user-research.jpg'
        title={
          <>
            User research &<br />
            design
          </>
        }
      >
        {TEXT}
      </Card>

      <Card
        alt='Engineering'
        className='cardMiddle'
        icon='/engineering.svg'
        largeImage='/engineering.jpg'
        title='Engineering'
      >
        {TEXT}
      </Card>

      <Card
        alt='Re-platforming, modernization'
        className='cardLast'
        icon='/rocket.svg'
        largeImage='/modernization.jpg'
        title={
          <>
            Re-platforming,
            <br />
            modernization
          </>
        }
      >
        {TEXT}
      </Card>

      <Info
        className='infoLast'
        data={PROCESS}
        strapline='“Iterative, scalable software engineering”'
        title='Our processes'
      />
    </>
  );
}
