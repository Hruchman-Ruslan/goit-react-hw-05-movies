import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/moviesApi';

import { GoBack, Loader, MovieInfo, Section } from 'components';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMovieDetails(movieId);
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
      <GoBack path={goBack.current} />
      {movie && <MovieInfo {...movie} />}
      <ul>
        <li>
          <Link to="cast">Cats</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      {isLoading && <Loader />}
      <Outlet />
    </Section>
  );
};

export default MovieDetails;
