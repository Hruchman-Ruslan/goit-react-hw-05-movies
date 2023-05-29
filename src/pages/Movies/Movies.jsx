import { getSearchMovies } from 'api/moviesApi';
import { Section } from 'components';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
        console.log(data);
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
