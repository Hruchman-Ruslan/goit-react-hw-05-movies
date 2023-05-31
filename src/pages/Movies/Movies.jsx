import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'api/moviesApi';

import { Loader, MoviesList, SearchForm, Section } from 'components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    (async () => {
      setIsLoading(true);
      try {
        const data = await getSearchMovies(query);
        setMovies(data);
      } catch (error) {
        setError('Sorry something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <Section>
      <SearchForm />
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </Section>
  );
};

export default Movies;
