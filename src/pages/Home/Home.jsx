import { useEffect } from 'react';

import { Section } from 'components';
import { getTrendingMovies } from 'api/moviesApi';

const Home = () => {
  useEffect(() => {
    (async () => {
      const data = await getTrendingMovies();
      console.log(data);
    })();
  }, []);

  return (
    <Section>
      <h1>Trending today</h1>
    </Section>
  );
};

export default Home;
