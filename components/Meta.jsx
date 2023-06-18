import Head from 'next/head';

import { TITLE, DESCRIPTION, KEYWORDS, DOMAIN } from '../constants';

export const Meta = () => (
  <Head>
    <meta
      name="viewport"
      content="height=device-height,width=device-width,initial-scale=1.0"
    />
    <title key="title">{TITLE}</title>
    <meta name="title" content={TITLE} />
    <meta name="description" content={DESCRIPTION} />
    <meta name="author" content="Barnes Code" />
    <meta name="keywords" content={KEYWORDS} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={DOMAIN} />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={DOMAIN} />
    <meta property="twitter:title" content={TITLE} />
    <meta property="twitter:description" content={DESCRIPTION} />

    <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
    <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
    <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
  </Head>
);
