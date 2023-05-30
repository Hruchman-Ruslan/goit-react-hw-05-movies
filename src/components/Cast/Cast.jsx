import { getMovieCredits } from 'api/moviesApi';
import { Section } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastInfo from './CastInfo';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCredits(movieId);
        setMovie(data);
      } catch (error) {
        setError('Sorry something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <Section>
      <CastInfo movie={movie} />
      {isLoading && <Loader />}
    </Section>
  );
};

export default Cast;
