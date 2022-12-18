import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const title = 'Barnes Code - Creative software engineering';
  const description = 'Specialists in bespoke web app development, API design, database design and more.';
  const keywords = 'Barnes code, barnescode.co.uk, Bespoke web app development, full stack development, javascript';

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />

        <meta
          name='viewport'
          content='height=device-height,width=device-width,initial-scale=1.0'
        />

        <meta
          name='author'
          content='Barnes Code'
        />

        <meta name='keywords' content={keywords} />

        <meta
          property='og:type'
          content='website'
        />

        <meta
          property='og:title'
          content={title}
        />

        <meta
          property='og:description'
          content={description}
        />

        <meta
          property='og:url'
          content='https://barnescode.co.uk'
        />


        <meta
          property='twitter:url'
          content='https://barnescode.co.uk'
        />

        <meta
          name='twitter:title'
          content=''
        />
        <meta
          name='twitter:description'
          content={description}
        />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      </Head>

      <main className={styles.main}>
        <Image
          src='/bg.jpg'
          alt='Landscape picture of a lake and shooting star'
          layout='fill'
          width={1000}
          height={1000}
          quality={100}
          priority='true'
          style={{
            opacity: '.35'
          }}
          aria-hidden
        />

        <div className={styles.content}>
          <h1 aria-label='Barnes Code'>
            <img
              src='/logo.svg'
              alt='Barnes Code logo'
              width={1000}
              height={1000}
              quality={100}
              priority='true'
              className={styles.logo}
            />
          </h1>

          <p className={styles.tagline}>Creative software engineering</p>

          <p>
            <Link href="mailto:hello@barnescode.co.uk?subject=Hello Barnes Code">
              <span className={styles.button}>Tell us what you want</span>
            </Link>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerCopy}>&copy; Barnes Code Ltd. Company no: 09719405</p>
        </div>
      </footer>
    </div>
  )
}
