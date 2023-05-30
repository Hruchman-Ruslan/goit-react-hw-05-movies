import { Outlet } from 'react-router-dom';
import { Container } from 'components';
import Header from 'layout/Header/Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <Header />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
