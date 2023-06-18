import { Layout } from '../components/Layout';
import { Meta } from '../components/Meta';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Meta />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
