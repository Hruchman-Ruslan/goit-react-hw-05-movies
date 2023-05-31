import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/moviesApi';

import { Loader, MoviesList, Section, Title } from 'components';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError('Sorry something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Section>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </Section>
  );
};

export default Home;
