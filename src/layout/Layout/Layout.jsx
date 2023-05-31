import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'layout/Header/Header';
import { Container } from 'components';

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
