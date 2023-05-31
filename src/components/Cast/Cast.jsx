import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api/moviesApi';

import { CastInfo, Loader, Section } from 'components';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        setError('Sorry something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <Section>
      <CastInfo cast={cast} />
      {isLoading && <Loader />}
    </Section>
  );
};

export default Cast;
