import { Outlet } from 'react-router-dom';
import { Container } from 'components';
import Header from 'layout/Header/Header';

const Layout = () => {
  return (
    <Container>
      <Header />

      <main>{<Outlet />}</main>
    </Container>
  );
};

export default Layout;
