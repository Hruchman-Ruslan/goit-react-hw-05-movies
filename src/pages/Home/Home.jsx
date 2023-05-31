import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/moviesApi';

import { Loader, MoviesList, Section } from 'components';

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
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </Section>
  );
};

export default Home;
