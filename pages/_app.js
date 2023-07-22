import PropTypes from 'prop-types';
import { Layout } from '../components/Layout';
import { Meta } from '../components/Meta';
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Meta />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
};

export default App;
