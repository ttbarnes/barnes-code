import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
