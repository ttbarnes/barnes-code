import { Layout } from '../components/Layout';
import { Meta } from '../components/Meta';
import '../styles/imports.css';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Meta />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
